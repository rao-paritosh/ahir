const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

let w, h;
let particles = [];

function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

// Particle class
class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = Math.random() * 2 - 1;
    this.vy = Math.random() * 2 - 1;
    this.radius = 80 + Math.random() * 120;
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > w) this.vx *= -1;
    if (this.y < 0 || this.y > h) this.vy *= -1;
  }

  draw() {
    const gradient = ctx.createRadialGradient(
      this.x, this.y, 0,
      this.x, this.y, this.radius
    );

    gradient.addColorStop(0, "rgba(0, 200, 255, 0.35)");
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

// Create particles
for (let i = 0; i < 6; i++) {
  particles.push(new Particle(
    Math.random() * w,
    Math.random() * h
  ));
}

// Mouse interaction
let mouse = { x: w / 2, y: h / 2 };

window.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

// Animation loop
function animate() {
  ctx.clearRect(0, 0, w, h);

  particles.forEach(p => {
    p.move();

    // subtle attraction to mouse
    let dx = mouse.x - p.x;
    let dy = mouse.y - p.y;

    p.x += dx * 0.0005;
    p.y += dy * 0.0005;

    p.draw();
  });

  requestAnimationFrame(animate);
}

animate();
