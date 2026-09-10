const card = document.getElementById("card");
const music = document.getElementById("music");
card.addEventListener("click", function () {
    this.classList.toggle("open");
    if (this.classList.contains("open")) {
        music.play();
    } 
    else {
        music.pause();
        music.currentTime = 0;
    }
});