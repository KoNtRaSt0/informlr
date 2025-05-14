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

let x = 0;
let y = 0;
let angle = 0;
const radius = 50; // Відстань від краю екрану
const speed = 0.01; // Зменшена швидкість
const color = 'yellow'; // Колір зірки та сліду
let side = 'top'; // Початковий бік руху

star.style.background = color;
star.style.boxShadow = `0 0 10px ${color}`;

// Функція для створення сліду зірки
function createTrail(x, y) {
    const trail = document.createElement('div');
    trail.classList.add('trail');
    trail.style.background = color;
    trail.style.left = `${x}px`;
    trail.style.top = `${y}px`;
    document.body.appendChild(trail);

    setTimeout(() => {
        trail.remove();
    }, 600);
}

// Анімація руху зірки по краю екрану
function animateStar() {
    if (side === 'top') {
        y = radius + Math.sin(angle) * radius;  // Рух по верхньому краю
        x = Math.cos(angle) * (window.innerWidth - radius * 2) + radius;
    } else if (side === 'right') {
        x = window.innerWidth - radius - Math.sin(angle) * radius;  // Рух по правому краю
        y = Math.cos(angle) * (window.innerHeight - radius * 2) + radius;
    } else if (side === 'bottom') {
        y = window.innerHeight - radius - Math.sin(angle) * radius;  // Рух по нижньому краю
        x = Math.cos(angle) * (window.innerWidth - radius * 2) + radius;
    } else if (side === 'left') {
        x = radius + Math.sin(angle) * radius;  // Рух по лівому краю
        y = Math.cos(angle) * (window.innerHeight - radius * 2) + radius;
    }

    star.style.left = `${x}px`;
    star.style.top = `${y}px`;

    // Створюємо слід
    createTrail(x, y);

    // Змінюємо сторону руху після завершення руху по одному краю
    if (angle >= Math.PI * 2) {
        angle = 0;
        switch (side) {
            case 'top':
                side = 'right';
                break;
            case 'right':
                side = 'bottom';
                break;
            case 'bottom':
                side = 'left';
                break;
            case 'left':
                side = 'top';
                break;
        }
    }

    angle += speed; // Зменшений крок для повільного руху
    requestAnimationFrame(animateStar);
}

animateStar();


