const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const message = document.getElementById("message");
const song = document.getElementById("loveSong");

function moveNoButton() {
  const x = Math.random() * 220 - 110;
  const y = Math.random() * 220 - 110;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

/* Desktop */
noBtn.addEventListener("mouseover", moveNoButton);

/* Mobile (Android / iOS) */
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNoButton();
});

/* YES button */
yesBtn.addEventListener("click", () => {
  message.innerHTML =
    "I knew it.<br>And I’d choose you again…<br>every time 💫";

  song.volume = 0.6;
  song.currentTime = 0;

  song.play().catch(() => {
    console.log("Audio play blocked until interaction");
  });
});
