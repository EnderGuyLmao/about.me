const canvas = document.getElementById("BGParticles");
const ctx = canvas.getContext('2d');
const rootStyles = getComputedStyle(document.documentElement);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = Array.from({length: 100}, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 3 + 1,
    dx: Math.random() - 0.5,
    dy: Math.random() - 0.5
}));

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.x += p.dx * 2;
        p.y += p.dy * 2;
        if(p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if(p.y < 0 || p.y > canvas.height) p.dy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
        ctx.fillStyle = rootStyles.getPropertyValue('--elements-glow-color');
        ctx.fill();
    });
    requestAnimationFrame(animate);
}

animate();