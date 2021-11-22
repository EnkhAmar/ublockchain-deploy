/* Navigation toggler */
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-container");
    const navLinks = document.querySelectorAll(".nav-links li");
    const languages = document.querySelectorAll(".language div");
    var w = window.innerWidth;

    burger.addEventListener("click", () => {
        (nav.style.display !== "block") ? nav.style.display = 'block' : nav.style.display = 'none'
        // Toggle nav
        nav.classList.toggle("nav-active");
        // Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.9s ease forwards ${index / 7 + 0.4}s`;
            }
        });
        languages.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.9s ease forwards ${navLinks.length / 7 + 0.6}s`;
            }
        });
        // Burger Animation
        burger.classList.toggle("toggle");
    });

    if (w <= 840) {
        navLinks.forEach((link, index) => [
            link.addEventListener("click", () => {
                burger.click();
            }),
        ]);
    }
};
navSlide();

/* Section scroll spy */
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .nav-container ul li");
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
            li.classList.add("active");
        }
    });
});

//https://codepen.io/funxer/pen/Zvjebx
const canvas = document.getElementById("can");
const ctx = canvas.getContext("2d");
const points = [];
const fov = window.innerWidth < 500 ? 200 : 400;
const dist = 10;
const opacity = 0.5;
const particleSize = 2;
const maxAmplitude = 1500; // Best results with values > 500
const sideLength = 50; // How many particles per side
const spacing = window.innerWidth < 500 ? 200 : 400; // Particle distance from each other

let rotXCounter = 0;
let rotYCounter = 0;
let rotZCounter = 0;
let counter = 0;

function reportWindowSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight / 2;
}

window.onresize = reportWindowSize;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight / 2;

function Vector3(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.color = "#0D0";
}

Vector3.prototype.rotateX = function (angle) {
    const z = this.z * Math.cos(angle) - this.x * Math.sin(angle);
    const x = this.z * Math.sin(angle) + this.x * Math.cos(angle);
    return new Vector3(x, this.y, z);
};

Vector3.prototype.rotateY = function (angle) {
    const y = this.y * Math.cos(angle) - this.z * Math.sin(angle);
    const z = this.y * Math.sin(angle) + this.z * Math.cos(angle);
    return new Vector3(this.x, y, z);
};
Vector3.prototype.rotateZ = function (angle) {
    const x = this.x * Math.cos(angle) - this.y * Math.sin(angle);
    const y = this.x * Math.sin(angle) + this.y * Math.cos(angle);
    return new Vector3(x, y, this.z);
};

Vector3.prototype.perspectiveProjection = function (fov, viewDistance) {
    const factor = fov / (viewDistance + this.z);
    const x = this.x * factor + canvas.width / 2;
    const y = this.y * factor + canvas.height / 2;
    return new Vector3(x, y, this.z);
};
Vector3.prototype.draw = function () {
    const frac = this.y / maxAmplitude;
    const r = 168; //Math.floor(frac * 100);
    const g = 136; //20//;
    const b = 250; //Math.floor(255 - frac * 100);
    const vec = this.rotateX(rotXCounter)
        .rotateY(rotYCounter)
        .rotateZ(rotZCounter)
        .perspectiveProjection(fov, dist);

    this.color = `rgb(${r}, ${g}, ${b})`;
    ctx.fillStyle = this.color;
    ctx.fillRect(vec.x, vec.y, particleSize, particleSize);
};

// Init
for (let z = 0; z < sideLength; z++) {
    for (let x = 0; x < sideLength; x++) {
        const xStart = -(sideLength * spacing) / 2;
        points.push(new Vector3(xStart + x * spacing, 0, xStart + z * spacing));
    }
}

(function loop() {
    ctx.fillStyle = `rgba(0, 0, 0, ${opacity})`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0, max = points.length; i < max; i++) {
        const x = i % sideLength;
        const z = Math.floor(i / sideLength);
        const xFinal = Math.sin((x / sideLength) * 4 * Math.PI + counter);
        const zFinal = Math.cos((z / sideLength) * 4 * Math.PI + counter);
        const gap = maxAmplitude * 0.3;
        const amp = maxAmplitude - gap;

        points[z * sideLength + x].y = maxAmplitude + xFinal * zFinal * amp;

        points[i].draw();
    }
    counter += 0.003;

    rotXCounter += 0.0001;
    rotYCounter += 0.0;
    // rotZCounter += 0.005;

    window.requestAnimationFrame(loop);
})();
