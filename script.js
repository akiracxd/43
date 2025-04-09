document.addEventListener('DOMContentLoaded', function() {
    const orderModal = document.getElementById('orderModal');
    const successModal = document.getElementById('successModal');
    
    const orderButtons = document.querySelectorAll('.order-btn, #orderNowBtn');
    
    const closeButtons = document.querySelectorAll('.close');
    
    const orderForm = document.getElementById('orderForm');
    
    orderButtons.forEach(button => {
        button.addEventListener('click', function() {
            orderModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });
    
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    });
    
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    if (orderForm) {
        orderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            orderModal.style.display = 'none';
            
            successModal.style.display = 'block';
            
            this.reset();
        });
    }
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});