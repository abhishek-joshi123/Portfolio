// ====================================================== //

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
const image = document.querySelector('.about-image');


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


