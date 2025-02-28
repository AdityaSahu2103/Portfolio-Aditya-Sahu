document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Here you would typically send the form data to a server
        // For this example, we'll just log it to the console
        const formData = new FormData(form);
        console.log('Form submitted with the following data:');
        for (let [key, value] of formData.entries()) {
            console.log(key + ': ' + value);
        }
        
        // Clear the form
        form.reset();
        
        // Show a success message (you can style this further)
        alert('Thank you for your message! I will get back to you soon.');
    });
});