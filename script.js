const loader = document.getElementById("loader");

window.addEventListener("load", () => {
  setTimeout(() => {
    loader.classList.add("hide");
  }, 1200);
});

document.getElementById("year").textContent = new Date().getFullYear();

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});

document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
  });
});

const cursorGlow = document.getElementById("cursorGlow");

window.addEventListener("mousemove", e => {
  cursorGlow.style.left = e.clientX + "px";
  cursorGlow.style.top = e.clientY + "px";
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold:0.18
});

document.querySelectorAll(".reveal").forEach(section => {
  revealObserver.observe(section);
});

const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      const pct = entry.target.getAttribute("data-pct");
      const fill = entry.target.querySelector(".skill-fill");

      if(fill){
        fill.style.width = pct + "%";
      }

      skillObserver.unobserve(entry.target);
    }
  });
}, {
  threshold:0.35
});

document.querySelectorAll(".skill-row").forEach(row => {
  skillObserver.observe(row);
});

const softwareCards = document.querySelectorAll(".software-card");
const iconRing = document.getElementById("iconRing");
const totalCards = softwareCards.length;
const radius = window.innerWidth < 640 ? 230 : 310;

softwareCards.forEach((card, index) => {
  const angle = (360 / totalCards) * index;

  card.style.transform =
    `rotateY(${angle}deg) translateZ(${radius}px)`;
});

if(iconRing){
  iconRing.addEventListener("mouseenter", () => {
    iconRing.classList.add("paused");
  });

  iconRing.addEventListener("mouseleave", () => {
    iconRing.classList.remove("paused");
  });
}