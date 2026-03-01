let clickCount = 0;
let isFirstImage = true; // Для отслеживания текущей картинки

const emojis = ["😀", "😂", "🥰", "😎", "🎉", "✨", "🌟", "⭐", "🌈", "❤️"];

function handleClick() {
  clickCount++;

  // При каждом нажатии запускаем новую порцию смайликов
  startEmojis();

  // Меняем картинку только один раз (при первом клике)
  if (clickCount === 1) {
    changeGiftImage();
  }
}

function changeGiftImage() {
  const giftImage = document.getElementById("giftImage");

  // Проверяем, существует ли элемент с таким id
  if (giftImage) {
    if (isFirstImage) {
      giftImage.src = "gift2.svg"; // Меняем на вторую картинку
      isFirstImage = false;
    }
  } else {
    console.log('Элемент с id "giftImage" не найден');
  }
}

function startEmojis() {
  // Проверяем, существует ли контейнер
  const container = document.getElementById("container");
  if (!container) {
    console.log('Элемент с id "container" не найден');
    return;
  }

  // Создаем 20 смайликов при каждом нажатии
  for (let i = 0; i < 20; i++) {
    setTimeout(createFallingEmoji, i * 50);
  }
}

function createFallingEmoji() {
  const container = document.getElementById("container");
  if (!container) return;

  const emoji = document.createElement("div");
  emoji.className = "emoji";

  // Случайный смайлик
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];

  // Случайная позиция по горизонтали
  emoji.style.left = Math.random() * window.innerWidth + "px";
  emoji.style.top = "-50px";

  // Случайная скорость падения (медленнее)
  emoji.style.animationDuration = 4 + Math.random() * 4 + "s";

  // Меньший размер (от 16px до 30px)
  const size = 16 + Math.random() * 14;
  emoji.style.fontSize = size + "px";

  container.appendChild(emoji);

  // Удаляем через 8 секунд
  setTimeout(() => {
    if (emoji.parentNode) {
      emoji.remove();
    }
  }, 8000);
}
