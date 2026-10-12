
const loveButton = document.getElementById("loveButton");
const loveMessage = document.getElementById("loveMessage");
const loveSong = document.getElementById("loveSong");
const musicStatus = document.getElementById("musicStatus");
const heartsContainer = document.querySelector(".hearts-container");

let opened = false;

// Reveal the letter and start the music.
loveButton.addEventListener("click", async function () {
    if (!opened) {
        opened = true;

        loveMessage.classList.remove("hidden");
        loveButton.textContent = "Pause Music ⏸️";

        createHeartBurst();

        try {
            await loveSong.play();
            musicStatus.textContent = "🎵 Playing our love song ❤️";
        } catch (error) {
            musicStatus.textContent =
                "🎵 Tap the button again to play the music.";
        }
    } else {
        if (loveSong.paused) {
            try {
                await loveSong.play();
                loveButton.textContent = "Pause Music ⏸️";
                musicStatus.textContent = "🎵 Playing our love song ❤️";
            } catch (error) {
                musicStatus.textContent =
                    "Unable to play the song. Check the audio file.";
            }
        } else {
            loveSong.pause();
            loveButton.textContent = "Play Music 🎵";
            musicStatus.textContent = "Music paused 💕";
        }
    }
});

// Create a floating heart.
function createHeart() {
    const heart = document.createElement("span");

    heart.className = "floating-heart";

    const heartTypes = ["❤️", "💕", "💖", "💗", "💘"];
    heart.textContent =
        heartTypes[Math.floor(Math.random() * heartTypes.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 18 + 15 + "px";
    heart.style.animationDuration = Math.random() * 4 + 4 + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8500);
}

// Create many hearts when she opens the gift.
function createHeartBurst() {
    for (let i = 0; i < 25; i++) {
        setTimeout(createHeart, i * 100);
    }
}

// Keep hearts floating in the background.
setInterval(createHeart, 500);