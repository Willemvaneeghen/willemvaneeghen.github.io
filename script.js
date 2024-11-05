// Select all navigation links
const navLinks = document.querySelectorAll('nav ul li a');

// Add click event listener to each link
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor click behavior

        // Get the target section ID from the href attribute
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Scroll to the target section smoothly
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });


