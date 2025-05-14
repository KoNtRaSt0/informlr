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

// Плавна зміна кольору фону
const colors = ['#ffffff', '#f9f9f9', '#f0f0ff'];
let index = 0;
setInterval(() => {
    document.body.style.background = colors[index % colors.length];
    index++;
}, 8000);
