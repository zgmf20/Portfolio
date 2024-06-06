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
});
