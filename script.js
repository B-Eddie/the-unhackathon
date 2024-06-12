document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signup-form');

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent form from submitting the traditional way

        const email = document.getElementById('email').value;

        try {
            const response = await fetch('/submit-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            });

            if (response.ok) {
                alert('Email submitted successfully!');
                form.reset(); // Clear the form
            } else {
                alert('Error submitting email.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error submitting email.');
        }
    });
});
