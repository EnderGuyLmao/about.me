const music = document.getElementById("BGMusic");
const thumb = document.querySelector(".SliderThumb");
const txt = document.getElementById("SliderText");

let playing = false;
thumb.classList.add("off");
thumb.classList.remove("on");
txt.textContent = "OFF"

thumb.parentElement.addEventListener("click", () => {
    playing = !playing;

    music.muted = !playing;

    if (playing) {
        thumb.classList.add("on");
        thumb.classList.remove("off");
    } else {
        thumb.classList.add("off");
        thumb.classList.remove("on");
    }
    txt.textContent = (playing) ? "ON" : "OFF";


    music.play().catch(() => {
        console.warn("Autoplay blocked until user interacts with the page.")
    })
})