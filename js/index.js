const hambtn = document.querySelector("#hambtn");
const navContent = document.querySelector(".nav--content");

hambtn.addEventListener("click", function () {
    navContent.classList.toggle("expanded");
});
