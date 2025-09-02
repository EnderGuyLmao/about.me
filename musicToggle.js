const music = document.getElementById("BGMusic");
const musicIndicator = document.getElementById("MusicStatusText");

let playing = false;

musicIndicator.textContent = "Music: Not Playing";

document.addEventListener("click", () => {
    playing = !playing;

    musicIndicator.textContent = playing ? "Music: Playing" : "Music: Not Playing";
    music.muted = !playing;

    music.play().catch(() => {
        console.warn("Autoplay blocked until user interacts with the page.")
    })
})