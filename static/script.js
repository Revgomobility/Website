document.getElementById("contactForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        contact: document.getElementById("contact").value,
        company: document.getElementById("company").value,
        vehicleType: document.getElementById("vehicleType").value
    };

    try {
        const response = await fetch("/submit-form", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });

        const result = await response.json();
        alert(result.message || result.error);
    } catch (error) {
        alert("An error occurred while submitting the form.");
    }
});
