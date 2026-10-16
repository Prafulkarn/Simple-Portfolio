const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');
const revealElements = document.querySelectorAll('.reveal');

function setActiveNavLink() {
    const scrollPosition = window.scrollY + 140;

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach((link) => {
                const isCurrent = link.getAttribute('href') === `#${sectionId}`;
                link.classList.toggle('active', isCurrent);
            });
        }
    });
}

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    },
    {
        threshold: 0.2,
    }
);

revealElements.forEach((element) => revealObserver.observe(element));

window.addEventListener('scroll', setActiveNavLink);
window.addEventListener('load', setActiveNavLink);
