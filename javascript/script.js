let clickCount = 0;

const emojis = ["😀", "😂", "🥰", "😎", "🎉", "✨", "🌟", "⭐️", "🌈", "❤️"];

function handleClick() {
  clickCount++;

  startEmojis();
  openGift();
  playSong();
  startFireworks();
}

function openGift() {
  const gift = document.getElementById("giftBox");

  if (gift) {
    gift.classList.add("open");
  }
}

function startEmojis() {
  const container = document.getElementById("container");

  for (let i = 0; i < 20; i++) {
    setTimeout(createFallingEmoji, i * 50);
  }
}

function createFallingEmoji() {
  const container = document.getElementById("container");

  const emoji = document.createElement("div");

  emoji.className = "emoji";

  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];

  emoji.style.left = Math.random() * window.innerWidth + "px";

  emoji.style.top = "-50px";

  emoji.style.animationDuration = 4 + Math.random() * 4 + "s";

  emoji.style.fontSize = 16 + Math.random() * 14 + "px";

  container.appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, 8000);
}

function flipPhoto() {
  const card = document.getElementById("photoCard");

  if (card) {
    card.classList.toggle("flipped");
  }
}
function playSong() {
  const song = document.getElementById("birthdaySong");
  if (song) {
    song
      .play()
      .catch((e) =>
        console.log("Audio blocked on mobile, user interaction needed"),
      );
  }
}
function startFireworks() {
  const container = document.getElementById("fireworks");

  const colors = ["red", "yellow", "blue", "orange", "purple", "gold"];

  for (let i = 0; i < 40; i++) {
    const particle = document.createElement("div");

    particle.className = "firework";

    particle.style.background =
      colors[Math.floor(Math.random() * colors.length)];

    const x = (Math.random() - 0.5) * 200;
    const y = (Math.random() - 0.5) * 200;

    particle.style.setProperty("--x", x + "px");
    particle.style.setProperty("--y", y + "px");

    container.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 1000);
  }
}
