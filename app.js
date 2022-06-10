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

//? -----------------------------

//? MAIN PROJECTS HOVER EFFECT
const mainImageWrappers = document.querySelectorAll("#main-project-image");

for (let wrapper of mainImageWrappers) {
  wrapper.addEventListener("mouseover", (e) => {
    const wrapperPath = e.path[1].childNodes[1];
    wrapperPath.classList.add("show-text");
  });
  wrapper.addEventListener("mouseout", (e) => {
    const wrapperPath = e.path[1].childNodes[1];
    wrapperPath.classList.remove("show-text");
  });
}
//? MAIN PROJECTS HOVER EFFECT - END

//? -----------------------------

//? PROJECT CODE LINK HOVER EFFECT - GITHUB
const projectDescription = document.querySelector(".project-description");

window.addEventListener("mouseover", (e) => {
  const closest = e.target.closest(".fa-code");
  if (closest) {
    e.target.offsetParent.parentNode.style.borderBottom = "5px solid white";
    e.target.offsetParent.parentNode.style.transition = "all 200ms linear";
  }

  setTimeout(() => {
    e.target.offsetParent.parentNode.style.borderBottom = "";
  }, 500);

  return;
});
//? PROJECT CODE LINK HOVER EFFECT - END

//? -----------------------------
