let menul = document.querySelector(".menu");
let menuTextl = document.querySelector(".menu p");
let socialListsl = document.querySelector(".social-lists");
let lists = document.querySelectorAll(".social-lists li");

menul.addEventListener("click", () => {
  socialListsl.classList.toggle("hide");
  menul.classList.toggle("rotate");
});

lists.forEach((listt) => {
  listt.addEventListener("click", () => {
    menuTextl.innerHTML = listt.innerHTML;
    socialListsl.classList.add("hide");
    menul.classList.toggle("rotate");
  });
});