
// ====================================================== //

import {skills} from './Skills.js'
import {projects} from './Projects.js'

// ====================================================== //

const allSkillsDiv = document.querySelector(".all-skills-div");

skills.forEach((skill, index) => { 
  const skillDiv = document.createElement("div");
  skillDiv.classList.add("Single-Skill");

  const skillImage = document.createElement("img");
  skillImage.src = skill.imageSrc;
  skillImage.alt = "failed";

  if (index < skills.length / 2) {
    skillImage.classList.add("skill-image", "LeftSide");
  } else {
    skillImage.classList.add("skill-image", "RightSide");
  }

  const percentageMainDiv = document.createElement("div");
  percentageMainDiv.classList.add("percentage-main-div");

  const percentageSecondDiv = document.createElement("div");
  percentageSecondDiv.classList.add("percentage-second-div");

  const skillName = document.createElement("p");
  skillName.classList.add("Skill-name");
  skillName.textContent = skill.name;

  const percentage = document.createElement("p");
  percentage.classList.add("percentage");
  percentage.textContent = skill.percentage;

  percentageSecondDiv.appendChild(skillName);
  percentageSecondDiv.appendChild(percentage);
  percentageMainDiv.appendChild(percentageSecondDiv);
  skillDiv.appendChild(skillImage);
  skillDiv.appendChild(percentageMainDiv);
  allSkillsDiv.appendChild(skillDiv);
});


// ====================================================== //

const allProjectsDiv = document.querySelector(".all-projects-div");

projects.forEach((project) => {
  const projectDiv = document.createElement("div");
  projectDiv.classList.add("project");

  const projectLink = document.createElement("a");
  projectLink.href = project.link;
  projectLink.target = "_blank";

  const projectImagesDivs = document.createElement("div");
  projectImagesDivs.classList.add("Project-images-divs");

  const projectImageLaptop = document.createElement("img");
  projectImageLaptop.classList.add("project-image-laptop");
  projectImageLaptop.src = project.images.laptop;
  projectImageLaptop.alt = "failed";

  const projectImagePhone = document.createElement("img");
  projectImagePhone.classList.add("project-image-phone");
  projectImagePhone.src = project.images.phone;
  projectImagePhone.alt = "failed";

  projectImagesDivs.appendChild(projectImageLaptop);
  projectImagesDivs.appendChild(projectImagePhone);

  projectLink.appendChild(projectImagesDivs);

  const projectDetailDiv = document.createElement("div");
  projectDetailDiv.classList.add("project-detail-div");

  const projectTitle = document.createElement("h4");
  projectTitle.classList.add("Project-headings");
  projectTitle.innerHTML = `<span>Case Study ${projects.indexOf(project) + 1} of ${projects.length}</span> : ${project.title}`;

  const projectSummary = document.createElement("p");
  projectSummary.classList.add("project-summary");
  projectSummary.textContent = project.description;

  const projectTechnologies = document.createElement("p");
  projectTechnologies.classList.add("project-summary");
  projectTechnologies.textContent = `Technologies Used are ${project.technologies}`;

  projectDetailDiv.appendChild(projectTitle);
  projectDetailDiv.appendChild(projectSummary);
  projectDetailDiv.appendChild(projectTechnologies);

  projectDiv.appendChild(projectLink);
  projectDiv.appendChild(projectDetailDiv);

  allProjectsDiv.appendChild(projectDiv);
});


// ====================================================== //

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
// const image = document.querySelector('.about-image');



menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.addEventListener('resize', () => {
    if (window.innerWidth >= 1000) {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    }
});

// ====================================================== //

const typed = new Typed('.multiple-text', {
    strings: ["Hi, The name's  Abhishek joshi", 'Full Stack Developer', 'Problem Solver', 'ML Enthusiast'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });
  
  
  // ====================================================== //
  
  //   ScrollReveal({ 
//     reset: true ,
//     distance: '500px',
//     duration: 1500,
//     delay: 200
//   });

//   ScrollReveal().reveal('.about-image', { origin: 'left' });

const animatedElement = document.querySelector('.about-image');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animatedElement.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

observer.observe(animatedElement);


const LitteSpan = document.querySelector('.little-span');

const observer2 = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      LitteSpan.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

observer2.observe(LitteSpan);

const Skills = document.querySelector('.skill-main-div');

const observer3 = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      Skills.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

observer3.observe(Skills);

const ProjectImage = document.querySelector('.Project-images-divs');

const observer4 = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      ProjectImage.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

observer4.observe(ProjectImage);

// ====================================================== //

function downloadPDF() {
  const pdfPath = 'Abhishek_Joshi.pdf';
  
  const link = document.createElement('a');
  link.href = pdfPath;
  link.download = 'your_file_name.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}


