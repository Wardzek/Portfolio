/* Modification cursor */
new kursor({
    type: 2,
    removeDefaultCursor: false
});

/* Ecriture bannière */
const text = "Développeur Web";
const autotext = document.getElementById("autotext");

let index = 0;

const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const addLetter = () => {
  autotext.textContent = text.slice(0, index);
  index++;
};

const removeLetter = () => {
  autotext.textContent = text.slice(0, index);
  index--;
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const play = async () => {
  // title.innerHTML = text.slice(0, index);

  while (index < text.length) {
    addLetter();
    await sleep(randomInt(50, 300));
  }
  let random = randomInt(3, text.length);
  let boucle = 0;
  while (boucle < random) {
    removeLetter();
    boucle++;
    await sleep(randomInt(50, 300));
  }
  play();
};

play();

