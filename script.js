       //resume-button//

let resume1 = document
  .querySelector("#resume-button-1")
  .addEventListener("click", openDrive);

function openDrive() {
  window.open(
    (href =
      "./Chandan_Kumar_resume.pdf")
  );
}
 

let resume2 = document
  .querySelector("#resume-button-2")
  .addEventListener("click", openDrive);

function openDrive() {
  window.open(
    (href =
      "./Chandan_Kumar_resume.pdf")
  );
}
          //hamburger//

let hamburger = document.querySelector(".hamburger")
hamburger.onclick = ()=>{
 let navlist = document.querySelector(".nav-list")
 navlist.classList.toggle("active")

}
 
    // typing animation//

var typed = new Typed(".typing", {
  strings: ["Full Stack Web Developer", "Daydreamer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});


               // scroll reveal animation//

  const sr = ScrollReveal({
    origin:'top',
    distance:'120px',
    duration:2000,
    reset:true
  })             

     // scroll HOME//
    sr.reveal('#home',{})
    sr.reveal('#main-cont p',{delay:200})
    sr.reveal('#main-cont h1',{delay:300})
    sr.reveal('.container',{delay:400})
    sr.reveal('#resume-button-2',{interval:500})

   // scroll ABOUT//
    sr.reveal('#about img',{delay:200})
    sr.reveal('#user-detail-intro',{delay:600})

    // scroll SKILLS//
    sr.reveal('.skill-box',{delay:200})

     // scroll PROJECTS//
    sr.reveal('.project-card',{})
    sr.reveal('.small_div',{delay:100})
    sr.reveal('.project-title',{delay:200})
    sr.reveal('.project-description',{delay:200})
    sr.reveal('.project-tech-stack',{delay:200})
    sr.reveal('.repo-links',{delay:200})

      // scroll GITHUB//
    sr.reveal('#github-streak-stats',{delay:200})
    sr.reveal('#github-top-langs',{delay:400})
    sr.reveal('#github-stats-card',{delay:600})

    sr.reveal('.calendar',{delay:600})

       // scroll CONTACT//
    sr.reveal('.column-left',{})   
    sr.reveal('.row',{delay:100})
    sr.reveal('.info',{delay:200})   

    sr.reveal('.column-right',{})
    sr.reveal('.fields',{delay:100})  
    sr.reveal('.field',{delay:200})  
    sr.reveal('.button-area',{delay:300})   
    
    // scrool footer
    sr.reveal('#footer',{delay:200})  