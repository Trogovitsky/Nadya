// ===== 101 причина почему я люблю тебя =====
const typingTexts = [
  "❤️❤️❤️❤️❤️",
  "❤️❤️❤️❤️❤️❤️",
  "❤️❤️❤️❤️❤️",
  "❤️Люблю тебя очень❤️",
   "❤️❤️❤️❤️❤️",
  "❤️❤️❤️❤️❤️❤️",
  "❤️❤️❤️❤️❤️",
  "❤️Очень сильно❤️",
    "❤️❤️❤️❤️❤️",
  "❤️❤️❤️❤️❤️❤️",
  "❤️❤️❤️❤️❤️",
  "❤️❤️❤️❤️❤️❤️.",
    "❤️❤️❤️❤️❤️",
  "❤️❤️❤️❤️❤️❤️",
  "❤️❤️❤️❤️❤️",
  "❤️❤️❤️❤️❤️❤️.",
    "❤️Дальше тебе ещё сердечки❤️",
  "❤️❤️❤️❤️❤️❤️",
  "❤️❤️❤️❤️❤️",
  "❤️❤️❤️❤️❤️❤️.",
    "❤️❤️❤️❤️❤️",
  "❤️❤️❤️❤️❤️❤️",
  "❤️❤️❤️❤️❤️",
  "❤️❤️❤️❤️❤️❤️.",
    "❤️❤️❤️❤️❤️",
  "❤️❤️❤️❤️❤️❤️",
  "❤️❤️❤️❤️❤️",
  "❤️❤️❤️❤️❤️❤️.",
    "❤️❤️❤️❤️❤️",
  "❤️❤️❤️❤️❤️❤️",
  "❤️❤️❤️❤️❤️",
  "❤️❤️❤️❤️❤️❤️.",
    "❤️❤️❤️❤️❤️",
  "❤️❤️❤️❤️❤️❤️",
  "❤️❤️❤️❤️❤️",
  "❤️❤️❤️❤️❤️❤️.",
    "❤️❤️❤️❤️❤️",
  "❤️❤️❤️❤️❤️❤️",
  "❤️❤️❤️❤️❤️",
  "❤️❤️❤️❤️❤️❤️.",
];

// ===== Печатающийся эффект сообщений =====
const messagesContainer = document.getElementById("messages");
let msgIndex = 0;

function showNextMessage() {
  if (msgIndex < typingTexts.length) {
    const newMsg = document.createElement("div");
    newMsg.classList.add("message");
    messagesContainer.appendChild(newMsg);

    let charIndex = 0;
    function typeChar() {
      if (charIndex < typingTexts[msgIndex].length) {
        newMsg.textContent += typingTexts[msgIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeChar, 40); // скорость печати
      } else {
        msgIndex++;
        setTimeout(showNextMessage, 1200); // задержка перед следующим сообщением
      }
    }
    typeChar();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  showNextMessage();
});
