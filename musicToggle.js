const music = document.getElementById("BGMusic");
const musicIndicator = document.getElementById("MusicStatusText");
playing = false;

musicIndicator.textContent = "Music: Not Playing"
document.addEventListener('click', function unmute() {
    if(playing){
        playing=false
        musicIndicator.textContent = "Music: Not Playing"
    }
    else
    {
        playing=true
        musicIndicator.textContent = "Music: Playing"
    };

    music.muted = !playing;
    music.play();
})