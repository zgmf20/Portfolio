document.addEventListener('DOMContentLoaded', function() {
    // 平滑滾動效果
    const links = document.querySelectorAll('a.nav-link');
    
    for (const link of links) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    }

    // 滾動淡入效果
    const fadeInElements = document.querySelectorAll('.fade-in');
    window.addEventListener('scroll', function() {
        fadeInElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                element.classList.add('visible');
            }
        });
    });
});