
document.addEventListener('DOMContentLoaded', () => {
   
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.skill-card, .timeline-item, .code-window');
    
    animatedElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        observer.observe(el);
    });

    window.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        const glow1 = document.querySelector('.glow-1');
        const glow2 = document.querySelector('.glow-2');

        if (glow1 && glow2) {
            glow1.style.transform = `translate(${mouseX * 30}px, ${mouseY * 30}px)`;
            glow2.style.transform = `translate(-${mouseX * 30}px, -${mouseY * 30}px)`;
        }
    });

    console.log("⚡ Portafolio Web Premium inicializado correctamente.");
});