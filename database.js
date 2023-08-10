import { API_KEY as key } from "/keys.js";

let firebaseConfig = {
  apiKey: key,
  authDomain: "portfolio-v1-dba00.firebaseapp.com",
  databaseURL:
    "https://portfolio-v1-dba00-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "portfolio-v1-dba00",
  storageBucket: "portfolio-v1-dba00.appspot.com",
  messagingSenderId: "891718078472",
  appId: "1:891718078472:web:073116f02d3a76270841bd",
  measurementId: "G-WYDY0VQEMZ",
};
firebase.initializeApp(firebaseConfig);

let projectsRef = firebase.database().ref("projects");

const mainProjects = document.querySelector("#main-projects");
const loadingAnimation = document.querySelector(".loading-animation");

loadingAnimation.innerHTML += `
     <iconify-icon
        icon="svg-spinners:blocks-wave"
        width="100"
        class="projects-loading"
      >
`;

projectsRef.on("value", (snapshot) => {
  const projects = [];
  let data = snapshot.val();

  for (let project in data) {
    projects.push(data[project]);
  }
  getProjectInfo(projects);
}),
  (err) => {
    console.error("Error: " + err.code);
  };

function getProjectInfo(projects) {
  for (const project of Object.values(projects)) {
    if (project.name && project.type) {
      let techIcons = "";

      for (let i = 0; i < project.technologies?.length; i++) {
        techIcons += `                        
          <iconify-icon
            icon="${project.technologies[i]}"
            width="40"
            height="40"
            class="${project.technologies[i]}-icon"
          ></iconify-icon>
        `;
      }

      if (project.type === "main") {
        loadingAnimation.style.display = "none";
        mainProjects.style.opacity = 1;
        mainProjects.innerHTML += `
              <div class="project main-project">
                  <div class="image-wrapper main-project-image">
                    <a
                      class="main-project-cta"
                      href="${project.url}"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span class="main-project-span">EXPLORE</span>
                      <img
                        src="${project.image}"
                        alt="project image"
                        class="project-image"
                      />
                    </a>
                  </div>
        
                  <div class="project-description">
                    <h2 class="main-project-title">${project.name}</h2>
                    <p>${project.description}</p>
                    <span>
                      ${project.highlights}
                    </span>
                    <div class="project-technologies">
                      ${techIcons}
                    </div>
                    <a
                      class="code-link"
                      href="${project.code}"
                      target="_blank"
                      rel="noreferrer"
                      title="code"
                      ><i class="fa-solid fa-code"></i
                    ></a>
                  </div>
              </div>
          `;
      }
    }
  }
}

setTimeout(() => {
  const mainProject = document.querySelectorAll(".main-project");
  const projectImage = document.querySelectorAll(".project-image");

  mainProject.forEach((p) => (p.style.opacity = 1));
  projectImage.forEach((p) => (p.style.opacity = 1));
}, 2000);
