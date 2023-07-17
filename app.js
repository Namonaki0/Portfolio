import { uses, experience } from "/extra/uses.js";

//? MENU SCROLL EFFECT
const header = document.querySelector("header");
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
const communicationsLink = document.querySelector(".communication-link-cta");
const sections = document.querySelectorAll(".section");

let options = {
  threshold: 0.5,
  rootMargin: "0px",
};

let observer = new IntersectionObserver(entries, options);

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

setTimeout(() => {
  //? MAIN PROJECTS HOVER EFFECT
  const mainProjectImages = document.querySelectorAll(".main-project-image");

  mainProjectImages.forEach((wrapper) => {
    wrapper.addEventListener("mouseover", (e) => {
      e.target.previousElementSibling.classList.add("show-text");
      e.target.style.opacity = "0.3";
    });
    wrapper.addEventListener("mouseout", (e) => {
      e.target.previousElementSibling.classList.remove("show-text");
      e.target.style.opacity = "1";
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
const sidePanelInfo = document.querySelector(".side-panel-info");
const closeArrow = document.querySelector(".close-arrow");
const backgroundFilter = document.querySelector(".background-filter");

closeArrow.addEventListener("click", (e) => {
  sidePanel.classList.remove("show-panel");
  backgroundFilter.style.display = "none";
  document.body.style.overflowY = "";
});

backgroundFilter.addEventListener("click", () => {
  sidePanel.classList.remove("show-panel");
  backgroundFilter.style.display = "none";
  document.body.style.overflowY = "";
});

//? PRE-FOOTER EXTRA INFO
// const footerCta = document.querySelectorAll(".pre-footer-cta");

// footerCta.forEach((cta) => {
//   cta.addEventListener("click", (e) => {
//     sidePanel.classList.add("show-panel");
//     backgroundFilter.style.display = "block";
//     document.body.style.overflowY = "hidden";
//     const dataset = e.target.dataset.extra;

//     if (dataset === undefined) {
//       sidePanel.classList.remove("show-panel");
//       backgroundFilter.style.display = "none";
//       document.body.style.overflowY = "";
//     }

//     switch (dataset) {
//       case "uses":
//         sidePanelInfo.innerHTML = uses;
//         break;
//       case "experience":
//         sidePanelInfo.innerHTML = experience;
//         break;
//       default:
//         sidePanelInfo.innerHTML = "";
//         break;
//     }
//   });
// });

//? CONTACT FORM
// const contactForm = document.querySelector("#contact-form");
// const formSubmittedMessage = document.querySelector(".form-submitted-message");

// contactForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   formSubmittedMessage.style.opacity = 1;
//   formSubmittedMessage.classList.add("form-submission-success");
//   setTimeout(() => {
//     formSubmittedMessage.style.opacity = 0;
//     contactForm.reset();
//   }, 2000);
//   setTimeout(() => {
//     formSubmittedMessage.classList.remove("form-submission-success");
//   }, 3000);
// });
