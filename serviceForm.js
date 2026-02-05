document.getElementById("serviceForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  try {
    const res = await fetch("http://localhost:3000/api/service", {
      method: "POST",
      body: formData
    });

    const result = await res.json();
    alert(result.message || "Request submitted successfully!");
    form.reset();

  } catch (err) {
    console.error("❌ Error:", err);
    alert("Server error! Please try again.");
  }
});
