document.getElementById("contactForm")?.addEventListener("submit", (e) => {
  e.preventDefault();

  const form = document.getElementById("contactForm");
  const name = document.getElementById("contactName").value;
  const number = document.getElementById("contactPhone")?.value || "";
  const email = document.getElementById("contactEmail").value;
  const message = document.getElementById("contactMessage")?.value || document.getElementById("requestMessage")?.value || "";

  const adminEmail = "anujgupta26610812@gmail.com";
  const subject = encodeURIComponent(`New Inquiry from ${name}`);
  const body = encodeURIComponent(
    `Name: ${name}\n` +
    `Phone: ${number}\n` +
    `Email: ${email}\n\n` +
    `Message:\n${message}`
  );

  const mailtoLink = `mailto:${adminEmail}?subject=${subject}&body=${body}`;
  
  const confirmMsg = document.getElementById("contactFormConfirm");
  if (confirmMsg) {
    confirmMsg.style.display = "block";
    confirmMsg.innerHTML = "✅ Message processed! Redirecting to Email...";
  }

  form.reset();
  window.location.href = mailtoLink;
});
