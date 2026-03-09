let clickCount = 0;

const emojis = ["😀", "😂", "🥰", "😎", "🎉", "✨", "🌟", "⭐️", "🌈", "❤️"];

function handleClick() {
  clickCount++;

  startEmojis();
  openGift();
  playSong();
}

function openGift() {
  const gift = document.getElementById("giftBox");

  if (gift) {
    gift.classList.add("open");
  }
}

function playSong() {
  const song = document.getElementById("birthdaySong");

  if (song) {
    song.play();
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
