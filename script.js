// Анімація появи при скролі
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll('.hidden').forEach(el => observer.observe(el));

// Анімація заголовку "WebVision - Ваше цифрове майбутнє"
const title = document.querySelector('.site-title');
if (title) {
    const text = title.textContent;
    title.textContent = '';
    let i = 0;
    function typeTitle() {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
            setTimeout(typeTitle, 80);
        }
    }
    typeTitle();
}

const star = document.createElement('div');
star.classList.add('star');
document.body.appendChild(star);

let angle = 0;
const radius = 100;
const centerX = window.innerWidth / 2;
const centerY = window.innerHeight / 2;
const speed = 0.01;

function createTrail(x, y) {
    const trail = document.createElement('div');
    trail.classList.add('trail');
    trail.style.left = `${x}px`;
    trail.style.top = `${y}px`;
    document.body.appendChild(trail);

    setTimeout(() => {
        trail.remove();
    }, 600);
}

function animateStar() {
    const x = centerX + (centerX - 50) * Math.cos(angle);
    const y = centerY + (centerY - 50) * Math.sin(angle);

    star.style.left = `${x}px`;
    star.style.top = `${y}px`;

    createTrail(x + 7, y + 7); // щоб слід йшов за центром

    angle += speed;
    requestAnimationFrame(animateStar);
}

animateStar();

