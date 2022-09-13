//* =====================================
//*  GUESS MY NUMBER
//*  Game Logic
//*======================================

//? 1-100 arasında rastgele sayı tut
const randomNumber = Math.floor(Math.random() * 100 + 1);
console.log(randomNumber);

let score = 10;
let topScore = 0;

//? CheckBtn basıldığında kontrol et
document.querySelector(".check-btn").addEventListener("click", () => {
  const guessInput = Number(document.querySelector(".guess-input").value);
  const msg = document.querySelector(".msg");

  //? input girilmediyse uyarı ver
  if (!guessInput) {
    document.querySelector(".msg").innerText = "Please enter a number";
  } else if (randomNumber === guessInput) {
    document.querySelector(
      ".msg"
    ).innerHTML = `Congrats, you win <i class="fa-solid fa-face-grin-hearts fa-3x"></i>`;
    document.querySelector("body").style.background = "green";
    if (score > topScore) {
      topScore = score;
      document.querySelector(".top-score").textContent = topScore;
      document.querySelector(".secret-number").textContent = randomNumber;
    }
  } else {
    score -= 1;

    if (score > 0) {
      guessInput > randomNumber
        ? (msg.innerHTML = `<i class="fa-solid fa-arrow-trend-down fa-3x"></i> DECREASE `)
        : (msg.innerHTML = `<i class="fa-solid fa-arrow-trend-up fa-3x"></i> INCREASE `);
    } else {
      msg.innerHTML = "You lost ";
      document.querySelector(".check-btn").disabled = true;
      document.querySelector("body").style.background = "red";
    }
    document.querySelector(".score").textContent = score;
  }
});

//?random == input.value
//?tebrikler bildiniz
//?background = green
//?score > top score ; topScore = score
//?secretNumber =  görünür
