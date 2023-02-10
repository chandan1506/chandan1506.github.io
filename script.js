let resume = document
  .querySelector("#resume-button-1")
  .addEventListener("click", openDrive);

function openDrive() {
  window.open(
    (href =
      "./Chandan_Kumar_resume.pdf")
  );
}


let hamburger = document.querySelector(".hamburger")
hamburger.onclick = ()=>{
 let navlist = document.querySelector(".nav-list")
 navlist.classList.toggle("active")

}

var typed = new Typed(".typing", {
  strings: ["Full Stack Developer", "Daydreamer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});
