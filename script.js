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

    document.getElementById("story").classList.add("fadeIn");

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

document.getElementById("letter").classList.add("fadeIn");    

});

document.getElementById("proposalBtn").addEventListener("click",()=>{

document.getElementById("letter").style.display="none";

document.getElementById("proposal").style.display="flex";

  document.getElementById("proposal").classList.add("fadeIn");  

});

function accepted(){

    celebrate();

    launchConfetti();
    
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

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function celebrate(){

    for(let i=0;i<120;i++){

        let x=Math.random()*canvas.width;
        let y=Math.random()*canvas.height;

        ctx.beginPath();
        ctx.arc(x,y,4,0,Math.PI*2);
        ctx.fillStyle=`hsl(${Math.random()*360},100%,60%)`;
        ctx.fill();

    }

    setTimeout(()=>{
        ctx.clearRect(0,0,canvas.width,canvas.height);
    },1200);

}

const sky = document.getElementById("shooting-stars");

setInterval(()=>{

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*window.innerWidth+"px";

    star.style.top=Math.random()*250+"px";

    sky.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },3000);

},1800);

// Falling Rose Petals

const petals=document.querySelector(".petals");

setInterval(()=>{

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML="🌹";

petal.style.left=Math.random()*100+"vw";

petal.style.animationDuration=(5+Math.random()*4)+"s";

petals.appendChild(petal);

setTimeout(()=>{

petal.remove();

},9000);

},700);

// ===== Confetti =====

const confettiCanvas = document.getElementById("confetti");
const confettiCtx = confettiCanvas.getContext("2d");

confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;

let confettis = [];

function launchConfetti(){

    confettis = [];

    for(let i=0;i<180;i++){

        confettis.push({

            x:Math.random()*confettiCanvas.width,

            y:-20,

            size:5+Math.random()*8,

            speed:2+Math.random()*5,

            color:`hsl(${Math.random()*360},100%,60%)`

        });

    }

    animateConfetti();

}

function animateConfetti(){

    confettiCtx.clearRect(0,0,confettiCanvas.width,confettiCanvas.height);

    confettis.forEach(c=>{

        confettiCtx.fillStyle=c.color;

        confettiCtx.fillRect(c.x,c.y,c.size,c.size);

        c.y+=c.speed;

    });

    if(confettis.some(c=>c.y<confettiCanvas.height)){

        requestAnimationFrame(animateConfetti);

    }else{

        confettiCtx.clearRect(0,0,confettiCanvas.width,confettiCanvas.height);

    }

}
