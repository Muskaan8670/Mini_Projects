const startBtn = document.getElementById("startBtn");
const startScreen = document.getElementById("startScreen");

openEnvelope();
function openEnvelope(){
let envelop = document.querySelector('.envelop');
let stamp = document.querySelector('.stamp');
let msg = document.querySelector('.message');
let replay = document.querySelector('.replay');

console.log('worked');
envelop.style.opacity = '1';
envelop.addEventListener('click',function(){
    envelop.style.height = "500px";
    envelop.style.top = "15%";
    envelop.style.clipPath =
    "polygon(50% 0%, 100% 20%, 100% 100%, 0 100%, 0 20%)";
    
    stamp.style.transform = 'translate(-25%, -45%)';

    msg.style.opacity = '1';
    typeMessage();
    launchConfetti();
})

// Typewriter effect
function typeMessage() {
  const text =
    "May your day be filled with smiles, laughter, and everything you love. " + "Sending you love, joy, and good vibes today and always. " + "Wishing you a happiest birthday 🩷"

  const target = document.getElementById("typedText");
  target.innerHTML = "";
  let i = 0;

  const interval = setInterval(() => {
    target.innerHTML += text.charAt(i);
    i++;

    if (i === text.length) {
      clearInterval(interval);
      replay.style.opacity = '1';
    }
  }, 40);
}

function launchConfetti() {
  const emojis = ["🎉", "🎂", "🎈", "🥳"];
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = 2 + Math.random() * 2 + "s";
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 4000);
  }
}
}









