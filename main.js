const pianoKeys = document.querySelectorAll('.piano-key .key'),
audioTune = new Audio("./tunes/80.wav"),
volumeSlider = document.querySelector(".volume-slider input"),
keysCheckbox = document.querySelector(".key-checkbox input")


window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const ClickedKey = document.querySelector(`[data-key="${e.keyCode}"]`)
    if (!ClickedKey) return;
    ClickedKey.classList.add("active")
    if(!audio) return;
    audio.currentTime = 0;
    audio.play()
    setTimeout(() => {
        ClickedKey.classList.remove("active")
    }, 100)
   
});

const played = (key) => {
    audioTune.src = `./tunes/${key}.wav`
    audioTune.currentTime = 0;
    audioTune.play()
}

const handleVolume = (e) => {
    audioTune.volume = e.target.value;
}

const showKeys = (e) => {
    pianoKeys.forEach(key => key.classList.toggle("hide"))
}

pianoKeys.forEach(key => {
    key.addEventListener('click', () => played(key.dataset.key))
})

volumeSlider.addEventListener('input', handleVolume);
keysCheckbox.addEventListener('click', showKeys)