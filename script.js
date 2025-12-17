document.addEventListener('DOMContentLoaded', () => {
    
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const icon = menuBtn.querySelector('i');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
        if(mobileMenu.classList.contains('open')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    const tabs = document.querySelectorAll('.filter-tabs button');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            this.parentElement.querySelectorAll('button').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
});