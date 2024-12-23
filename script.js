const playButton = document.getElementById('play-button');
const carolAudio = document.getElementById('carol');
const donateButton = document.getElementById('donate-button');
const passButton = document.getElementById('pass-button');
const qrModal = document.getElementById('qr-modal');
const closeModal = document.getElementById('close-modal');

playButton.addEventListener('click', () => {
    if (carolAudio.paused) {
        carolAudio.play();
        playButton.textContent = '⏸️ Pause Carol';
    } else {
        carolAudio.pause();
        playButton.textContent = '🎶 Play Carol';
    }
});


// Show the GCash QR Code modal
donateButton.addEventListener('click', () => {
    qrModal.style.display = 'block';
});

// Close the modal
closeModal.addEventListener('click', () => {
    qrModal.style.display = 'none';
});

// Close the modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === qrModal) {
        qrModal.style.display = 'none';
    }
});

// Handle "Pass" button
passButton.addEventListener('click', () => {
    window.alert("tah uki!!!!");
});



//snowflakes
document.addEventListener("DOMContentLoaded", function () {
    const snowContainer = document.querySelector(".snow-container");

    const particlesPerThousandPixels = 0.1;
    const fallSpeed = 1.25;
    const pauseWhenNotActive = true;
    const maxSnowflakes = 200;
    const snowflakes = [];

    let snowflakeInterval;
    let isTabActive = true;

    function resetSnowflake(snowflake) {
        const size = Math.random() * 5 + 1;
        const viewportWidth = window.innerWidth - size; // Adjust for snowflake size
        const viewportHeight = window.innerHeight;

        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.left = `${Math.random() * viewportWidth}px`; // Constrain within viewport width
        snowflake.style.top = `-${size}px`;

        const animationDuration = (Math.random() * 3 + 2) / fallSpeed;
        snowflake.style.animationDuration = `${animationDuration}s`;
        snowflake.style.animationTimingFunction = "linear";
        snowflake.style.animationName =
            Math.random() < 0.5 ? "fall" : "diagonal-fall";

        setTimeout(() => {
            if (parseInt(snowflake.style.top, 10) < viewportHeight) {
                resetSnowflake(snowflake);
            } else {
                snowflake.remove(); // Remove when it goes off the bottom edge
            }
        }, animationDuration * 1000);
    }

    function createSnowflake() {
        if (snowflakes.length < maxSnowflakes) {
            const snowflake = document.createElement("div");
            snowflake.classList.add("snowflake");
            snowflakes.push(snowflake);
            snowContainer.appendChild(snowflake);
            resetSnowflake(snowflake);
        }
    }

    function generateSnowflakes() {
        const numberOfParticles =
            Math.ceil((window.innerWidth * window.innerHeight) / 1000) *
            particlesPerThousandPixels;
        const interval = 5000 / numberOfParticles;

        clearInterval(snowflakeInterval);
        snowflakeInterval = setInterval(() => {
            if (isTabActive && snowflakes.length < maxSnowflakes) {
                requestAnimationFrame(createSnowflake);
            }
        }, interval);
    }

    function handleVisibilityChange() {
        if (!pauseWhenNotActive) return;

        isTabActive = !document.hidden;
        if (isTabActive) {
            generateSnowflakes();
        } else {
            clearInterval(snowflakeInterval);
        }
    }

    generateSnowflakes();

    window.addEventListener("resize", () => {
        clearInterval(snowflakeInterval);
        setTimeout(generateSnowflakes, 1000);
    });

    document.addEventListener("visibilitychange", handleVisibilityChange);
});



document.addEventListener('DOMContentLoaded', () => {
    // Set the date for Christmas
    const christmasDate = new Date(new Date().getFullYear(), 11, 25, 0, 0, 0);

    // Update the countdown every second
    const countdownInterval = setInterval(() => {
        const now = new Date();
        const timeRemaining = christmasDate - now;

        // If Christmas has passed, update to the next year
        if (timeRemaining < 0) {
            christmasDate.setFullYear(christmasDate.getFullYear() + 1);
        }

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Update the countdown display
        document.getElementById('time-remaining').textContent = 
            `${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds`;

    }, 1000);
});
