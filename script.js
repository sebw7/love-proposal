// Loading Screen
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loading").style.display = "none";
    }, 2500);
});

// Typing Effect
const text = "I Have Something To Tell You ❤️";
const typing = document.getElementById("typing");

let i = 0;

function typeWriter() {
    if (i < text.length) {
        typing.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 80);
    }
}

typeWriter();

// Button
document.getElementById("startBtn").addEventListener("click", () => {
    alert("Our journey is just beginning... ❤️");
});

// Floating Hearts
const hearts = document.querySelector(".hearts");

setInterval(() => {
    const heart = document.createElement("span");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (15 + Math.random() * 25) + "px";

    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);

}, 400);
