       ///resume-button///

let resume1 = document
  .getElementById("resume-link-1")
   .addEventListener("click",opendrive);

  let resume2 = document
  .getElementById("resume-link-2")
  .addEventListener("click",opendrive);


function opendrive(){
  window.open(
    (href =
      "https://drive.google.com/file/d/1kSFdwpcVkbW_e8m0WiBSx4FtGP0uW84C/view?usp=sharing")
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
    sr.reveal('#main-cont p',{delay:300})
    sr.reveal('#main-cont h1',{delay:400})
    sr.reveal('.container',{delay:500})
    sr.reveal('#resume-button-2',{interval:600})

   // scroll ABOUT//
    sr.reveal('#about img',{delay:200})
    sr.reveal('#user-detail-intro',{delay:600})

    // scroll SKILLS//
    sr.reveal('.skill-box',{delay:200})

     // scroll PROJECTS//
    sr.reveal('.project',{})
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


     // Get the button
let mybutton = document.getElementById("myBtn");

   // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}