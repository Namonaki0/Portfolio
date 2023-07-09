let firebaseConfig = {
  apiKey: "AIzaSyA8660nDNjjbGnxuIe5v7KbbvZVgCTLpDw",
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

projectsRef.on("value", function (snapshot) {
  const projects = [];
  let data = snapshot.val();
  for (let project in data) {
    projects.push(data[project]);
  }
  getProjectInfo(projects);
}),
  function (error) {
    console.error("Error: " + error.code);
  };

const mainProjects = document.querySelector("#main-projects");

async function getProjectInfo(projects) {
  const tech = [];

  projects.map((p) => {
    if (p.hasOwnProperty("technologies")) {
      tech.push(Object.values(p.technologies));
    }
  });
  console.log(tech);

  const projectInfo = projects.map((p) => p);

  projectInfo.forEach((project) => {
    if (project.type === "main") {
      mainProjects.innerHTML += `
              <div class="project main-project-react">
                  <div class="image-wrapper" id="main-project-image">
                    <a
                      class="main-project-cta"
                      href="https://www.andreferreiradev-movielibrary.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span class="main-project-span">EXPLORE</span>
                      <img
                        src="${project.image}"
                        alt="movie library still picture"
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
                      <i class="fab fa-${project.tech}" title="ReactJS"></i>
                      
                    </div>
                    <a
                      class="code-link"
                      href="${project.url}"
                      target="_blank"
                      rel="noreferrer"
                      title="code"
                      ><i class="fa-solid fa-code"></i
                    ></a>
                  </div>
              </div>
          `;
    }
  });
}

// var ldld = new ldLoader({ root: "#example" });
// /* 4. active this loader */
// ldld.on();
