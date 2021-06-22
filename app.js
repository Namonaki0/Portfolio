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

//? MENU LINKS - INTERSECTION OBSERVER
const mainProjectsLink = document.querySelector(".main-projects-cta");
const miniProjectsLink = document.querySelector(".mini-projects-cta");
const sections = document.querySelectorAll(".section");

let options = {
  threshold: 0.5,
  rootMargin: "0px",
};

observer = new IntersectionObserver(entries, options);

function entries(sections) {
  sections.forEach((section) => {
    // console.log("DONE");
    if (section.isIntersecting && section.intersectionRatio > 0) {
      if (section.target.classList.contains("main-projects")) {
        // console.log("MAIN INTERSECTING");
        mainProjectsLink.classList.add("current");
      } else if (section.target.classList.contains("mini-projects")) {
        // console.log("MINI INTERSECTING");
        // console.log(section);
        miniProjectsLink.classList.add("current");
      } else {
        return;
      }
    }
    if (!section.isIntersecting) {
      mainProjectsLink.classList.remove("current");
      miniProjectsLink.classList.remove("current");
    }
  });
}

sections.forEach((section) => {
  observer.observe(section);
});

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
