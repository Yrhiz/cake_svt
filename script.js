const invImg = document.getElementById("inv-img");
const acceptBtn = document.getElementById("accept-button");
const startScreen = document.getElementById("start-screen");
const music = document.getElementById("music");

const plate = document.getElementById("plate");
const tier1 = document.getElementById("tier1");
const tier2 = document.getElementById("tier2");
const flames = document.getElementById("flames");

// Step 1: Click invitation to open
invImg.addEventListener("click", () => {
  invImg.src = "image/open_inv.png"; // update to open invitation
  acceptBtn.classList.remove("hidden"); // show accept button
});

// Step 2: Click accept button to play
acceptBtn.addEventListener("click", () => {
  music.muted = false;
  music.play();

  startScreen.classList.add("hidden");

  // Show cake layers and flames in sequence
  plate.classList.add("show");
  setTimeout(() => tier1.classList.add("show"), 600);
  setTimeout(() => tier2.classList.add("show"), 1200); // optional
  setTimeout(() => flames.classList.add("fade-in"), 1800);
});
