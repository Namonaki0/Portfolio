//? MENU SCROLL EFFECT
const header = document.querySelector("header");
const logo = document.querySelector("logo");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  header.classList.toggle("effect", window.scrollY > 0);
  navLinks.forEach((navLink) => {
    if (window.scrollY > 0) {
      navLink.classList.add("no-padding");
    } else {
      navLink.classList.remove("no-padding");
    }
  });
});
//? MENU SCROLL EFFECT - END

//? -----------------------------

//? MENU LINKS - INTERSECTION OBSERVER
const mainProjectsLink = document.querySelector(".main-projects-cta");
const miniProjectsLink = document.querySelector(".mini-projects-cta");
const communicationsLink = document.querySelector(".communication-link-cta");
const sections = document.querySelectorAll(".section");

//? PARAMS
let options = {
  threshold: 0.5,
  rootMargin: "0px",
};

observer = new IntersectionObserver(entries, options);

function entries(sections) {
  sections.forEach((section) => {
    if (section.isIntersecting && section.intersectionRatio > 0) {
      if (section.target.classList.contains("main-projects")) {
        mainProjectsLink.classList.add("current");
      } else if (section.target.classList.contains("mini-projects")) {
        miniProjectsLink.classList.add("current");
      } else if (section.target.classList.contains("communication-wrapper")) {
        communicationsLink.classList.add("current");
      } else {
        return;
      }
    }
    if (!section.isIntersecting) {
      mainProjectsLink.classList.remove("current");
      miniProjectsLink.classList.remove("current");
      communicationsLink.classList.remove("current");
    }
  });
}

sections.forEach((section) => {
  observer.observe(section);
});
//? INTERSECTION OBSERVER - END

setTimeout(() => {
  //? MAIN PROJECTS HOVER EFFECT
  const mainImageWrappers = document.querySelectorAll(".main-project-image");

  mainImageWrappers.forEach((wrapper) => {
    wrapper.addEventListener("mouseover", (e) => {
      e.target.previousElementSibling.classList.add("show-text");
    });
    wrapper.addEventListener("mouseout", (e) => {
      e.target.previousElementSibling.classList.remove("show-text");
    });
  });

  const codeLinks = document.querySelectorAll(".code-link");
  const borderStyleEffect = "5px solid white";
  const borderEffectTransition = "border 200ms linear";

  //? PROJECT CODE LINK HOVER EFFECT - GITHUB
  codeLinks.forEach((link) => {
    link.addEventListener("mouseover", (e) => {
      e.stopPropagation();
      e.target.offsetParent.style.borderBottom = `${borderStyleEffect}`;
      e.target.offsetParent.style.transition = `${borderEffectTransition}`;
    });
    link.addEventListener("mouseleave", (e) => {
      e.target.offsetParent.style.borderBottom = "";
    });
  });
}, 2000);

//? SIDE PANEL AND BACKGROUND FILTER
const usesBtn = document.querySelector(".uses-btn");
const sidePanel = document.querySelector(".side-panel");
const closeArrow = document.querySelector(".close-arrow");
const backgroundFilter = document.querySelector(".background-filter");

usesBtn.addEventListener("click", () => {
  sidePanel.classList.add("show-panel");
  backgroundFilter.style.display = "block";
  document.body.style.overflowY = "hidden";
});

closeArrow.addEventListener("click", () => {
  sidePanel.classList.remove("show-panel");
  backgroundFilter.style.display = "none";
  document.body.style.overflowY = "";
});

backgroundFilter.addEventListener("click", () => {
  sidePanel.classList.remove("show-panel");
  backgroundFilter.style.display = "none";
  document.body.style.overflowY = "";
});
