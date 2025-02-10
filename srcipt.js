document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navbarMenu = document.querySelector('.navbar-menu');

    mobileMenu.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        navbarMenu.classList.toggle('active');
    });
// });

const cursor = document.querySelector(".cursor");
const trail = document.querySelector(".trail");

document.addEventListener("mousemove", (e) => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    setTimeout(() => {
        trail.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    }, 50); // Delay for smooth trailing effect
});

document.addEventListener("mousedown", () => {
    cursor.classList.add("click");
    trail.classList.add("click");
});

document.addEventListener("mouseup", () => {
    cursor.classList.remove("click");
    trail.classList.remove("click");
});

// Handle form submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form values
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Log the values (you can replace this with an API call or email service)
  console.log('Email:', email);
  console.log('Message:', message);

  // Show a success message
  alert('Thank you for your message! I will get back to you soon.');

  // Clear the form
  contactForm.reset();
});

// document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star');
    const ratingValue = document.getElementById('rating-value');

    stars.forEach(star => {
        star.addEventListener('click', function() {
            const value = this.getAttribute('data-value');
            ratingValue.textContent = value;

            stars.forEach(s => {
                if (s.getAttribute('data-value') <= value) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        });

        star.addEventListener('mouseover', function() {
            const value = this.getAttribute('data-value');

            stars.forEach(s => {
                if (s.getAttribute('data-value') <= value) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        });

        star.addEventListener('mouseout', function() {
            const currentRating = ratingValue.textContent;

            stars.forEach(s => {
                if (s.getAttribute('data-value') > currentRating) {
                    s.classList.remove('active');
                }
            });
        });
    });
});