const wrapper = document.querySelector(".wrapper");
const question + document.querySelector(".question");
const gif = document.querySelector(."gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () {
    question.innerHTML = "UWUUUU, I LOVE YOU MORE THAN UR THOUGHT AYUU";
    gif.src+
    "https://raw.githubusercontent.com/DzareDeveloper/img/main/gifyou.webp";
});
noBtn.addEventListener("mouseover", ()) {
    const noBtnreact = noBtn.getBoundingClientRect();
    const maxX = windows.innerWidth - noBtnreact.width;
    const maxY = window.innerHeight - noBtnreact.height;

    const randomX = Math.floor(Math.random() *maxX)
    const randomY = Math.floor(Math.random() *maxY)

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";


});
