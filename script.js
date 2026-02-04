document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const triggerPoint = windowHeight * 0.15;

        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;

            if (elementTop < windowHeight - triggerPoint) {
                el.classList.add('active');
            }
        });
    };

    revealOnScroll();
    
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                revealOnScroll();
                ticking = false;
            });
            ticking = true;
        }
    });

    const buttons = document.querySelectorAll('.btn, .btn-submit, .socials a');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', function(e) {
            const x = e.pageX - this.offsetLeft;
            const y = e.pageY - this.offsetTop;
            
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
                width: 100px;
                height: 100px;
                left: ${x - 50}px;
                top: ${y - 50}px;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });

    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });

    const cards = document.querySelectorAll('.holentia-item, .about-card, .prologo-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });

    const inputs = document.querySelectorAll('.form-group input, .form-group textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'translateY(-2px)';
            this.parentElement.style.transition = 'transform 0.2s ease';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'translateY(0)';
        });
    });

    const footerLinks = document.querySelectorAll('.footer-links a');
    footerLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.2s ease';
        });
    });

    const socialLinks = document.querySelectorAll('.socials a');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
    });

    // Form Validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        const charCount = document.getElementById('charCount');
        const submitBtn = document.getElementById('submitBtn');

        // Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        // Name validation (only letters and spaces)
        const nameRegex = /^[A-Za-zÁáÉéÍíÓóÚúÑñ\s]+$/;

        function showError(input, errorId, message) {
            const errorElement = document.getElementById(errorId);
            errorElement.textContent = message;
            errorElement.classList.add('show');
            input.classList.add('error');
            input.classList.remove('valid');
        }

        function clearError(input, errorId) {
            const errorElement = document.getElementById(errorId);
            errorElement.textContent = '';
            errorElement.classList.remove('show');
            input.classList.remove('error');
            input.classList.add('valid');
        }

        function validateName() {
            const value = nameInput.value.trim();
            if (value.length < 2) {
                showError(nameInput, 'nameError', 'El nombre debe tener al menos 2 caracteres');
                return false;
            } else if (value.length > 50) {
                showError(nameInput, 'nameError', 'El nombre no puede tener más de 50 caracteres');
                return false;
            } else if (!nameRegex.test(value)) {
                showError(nameInput, 'nameError', 'El nombre solo puede contener letras y espacios');
                return false;
            } else {
                clearError(nameInput, 'nameError');
                return true;
            }
        }

        function validateEmail() {
            const value = emailInput.value.trim();
            if (value.length === 0) {
                showError(emailInput, 'emailError', 'El email es obligatorio');
                return false;
            } else if (value.length > 100) {
                showError(emailInput, 'emailError', 'El email no puede tener más de 100 caracteres');
                return false;
            } else if (!emailRegex.test(value)) {
                showError(emailInput, 'emailError', 'Por favor, introduce un email válido');
                return false;
            } else {
                clearError(emailInput, 'emailError');
                return true;
            }
        }

        function validateMessage() {
            const value = messageInput.value.trim();
            if (value.length < 10) {
                showError(messageInput, 'messageError', 'El mensaje debe tener al menos 10 caracteres');
                return false;
            } else if (value.length > 500) {
                showError(messageInput, 'messageError', 'El mensaje no puede tener más de 500 caracteres');
                return false;
            } else {
                clearError(messageInput, 'messageError');
                return true;
            }
        }

        function updateCharCounter() {
            const length = messageInput.value.length;
            charCount.textContent = length;
            if (length > 450) {
                charCount.parentElement.classList.add('warning');
            } else {
                charCount.parentElement.classList.remove('warning');
            }
        }

        // Real-time validation
        nameInput.addEventListener('blur', validateName);
        nameInput.addEventListener('input', () => {
            if (nameInput.classList.contains('error')) validateName();
        });

        emailInput.addEventListener('blur', validateEmail);
        emailInput.addEventListener('input', () => {
            if (emailInput.classList.contains('error')) validateEmail();
        });

        messageInput.addEventListener('blur', validateMessage);
        messageInput.addEventListener('input', () => {
            updateCharCounter();
            if (messageInput.classList.contains('error')) validateMessage();
        });

        // Form submission
        contactForm.addEventListener('submit', (e) => {
            const isNameValid = validateName();
            const isEmailValid = validateEmail();
            const isMessageValid = validateMessage();

            if (!isNameValid || !isEmailValid || !isMessageValid) {
                e.preventDefault();
                submitBtn.textContent = 'Por favor, corrige los errores';
                setTimeout(() => {
                    submitBtn.textContent = 'Enviar Mensaje';
                }, 3000);
            } else {
                // Anti-spam: disable button after submit
                submitBtn.disabled = true;
                submitBtn.textContent = 'Enviando...';
            }
        });
    }
});
