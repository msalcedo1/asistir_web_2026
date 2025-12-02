document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            if (mobileMenu.classList.contains('hidden')) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            } else {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            }
        });
    }

    // 2. Email Obfuscation (Anti-Spam)
    const mailLinks = document.querySelectorAll('.obfuscated-mail');
    const user = 'info';
    const domain = 'asistir-srl.com.ar';

    mailLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // Using window.open with _self is often handled better in various environments
            window.open(`mailto:${user}@${domain}`, '_self');
        });
        
        // Optional: Hover text to show user "it works" without revealing to bots in source
        link.title = "Enviar correo a Asistir S.R.L.";
    });

    // 3. Footer Year
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 4. Accordion Logic (for Services page)
    const accordionBtns = document.querySelectorAll('.accordion-btn');
    
    accordionBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent any default button behavior
            
            // ROBUST TRAVERSAL: Find the closest card container (the parent with .rounded-xl)
            const card = btn.closest('.rounded-xl');
            
            if (!card) return; // Safety check

            // Find the content div specifically inside this card
            const content = card.querySelector('.accordion-content');
            
            if (!content) return; // Safety check if content div is missing

            const icon = btn.querySelector('.fa-chevron-down') || btn.querySelector('.fa-chevron-up');
            const textSpan = btn.querySelector('span');
            
            if (content.style.maxHeight) {
                // CLOSE
                content.style.maxHeight = null;
                if (textSpan) textSpan.textContent = 'Ver Detalle';
                if (icon) {
                    icon.classList.remove('fa-chevron-up');
                    icon.classList.add('fa-chevron-down');
                }
            } else {
                // OPEN
                content.style.maxHeight = content.scrollHeight + "px";
                if (textSpan) textSpan.textContent = 'Ocultar Detalle';
                if (icon) {
                    icon.classList.remove('fa-chevron-down');
                    icon.classList.add('fa-chevron-up');
                }
            }
        });
    });

    // 5. Contact Form Handling
    const contactForm = document.getElementById('contact-form');
    const successDiv = document.getElementById('form-success');
    const submitBtn = document.getElementById('submit-btn');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Disable button
            submitBtn.disabled = true;
            submitBtn.textContent = 'Enviando...';
            submitBtn.classList.add('opacity-70', 'cursor-not-allowed');

            const formData = new FormData(contactForm);

            try {
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    body: formData
                });
                
                const data = await response.json();

                if (data.success) {
                    contactForm.style.display = 'none';
                    successDiv.classList.remove('hidden');
                } else {
                    alert("Hubo un error al enviar el formulario. Por favor intente nuevamente.");
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Enviar Mensaje';
                    submitBtn.classList.remove('opacity-70', 'cursor-not-allowed');
                }
            } catch (error) {
                console.error("Error:", error);
                alert("Hubo un error de conexión.");
                submitBtn.disabled = false;
                submitBtn.textContent = 'Enviar Mensaje';
                submitBtn.classList.remove('opacity-70', 'cursor-not-allowed');
            }
        });

        // Reset form functionality
        const resetBtn = document.getElementById('reset-form');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                contactForm.reset();
                contactForm.style.display = 'block';
                successDiv.classList.add('hidden');
                submitBtn.disabled = false;
                submitBtn.textContent = 'Enviar Mensaje';
                submitBtn.classList.remove('opacity-70', 'cursor-not-allowed');
            });
        }
    }
});