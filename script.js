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

    const music = document.getElementById("bgMusic");
    music.play();

    document.getElementById("home").style.display = "none";

    document.getElementById("story").style.display = "flex";

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


document.getElementById("nextBtn").addEventListener("click",()=>{

document.getElementById("story").style.display="none";

document.getElementById("letter").style.display="flex";

});

document.getElementById("proposalBtn").addEventListener("click",()=>{

document.getElementById("letter").style.display="none";

document.getElementById("proposal").style.display="flex";

});

function accepted(){

document.body.innerHTML=`

<div style="display:flex;justify-content:center;align-items:center;height:100vh;background:#050816;color:white;text-align:center;padding:20px;">

<div>

<h1 style="font-size:70px;">🎉❤️</h1>

<h2>You Made Me The Happiest Person Alive!</h2>

<h3>I Promise To Always Respect You, Care For You & Stay By Your Side. 💖</h3>

</div>

</div>

`;

}

document.getElementById("yesBtn").onclick=accepted;

document.getElementById("yesBtn2").onclick=accepted;
