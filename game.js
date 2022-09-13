//* =====================================
//*  GUESS MY NUMBER
//*  Game Logic
//*======================================

//? 1-100 arasında rastgele sayı tut
let randomNumber = Math.floor(Math.random() * 100 + 1);
console.log(randomNumber);

let score = 10;
let topScore = localStorage.getItem("topScore") || 0;
document.querySelector(".top-score").textContent = topScore;
//? CheckBtn basıldığında kontrol et
document.querySelector(".check-btn").addEventListener("click", () => {
  const guessInput = Number(document.querySelector(".guess-input").value);
  const msg = document.querySelector(".msg");
  const body = document.querySelector("body");

  //? input girilmediyse uyarı ver
  if (!guessInput) {
    document.querySelector(".msg").innerText = "Please enter a number";
  } else if (randomNumber === guessInput) {
    document.querySelector(
      ".msg"
    ).innerHTML = `Congrats, you win <i class="fa-solid fa-face-grin-hearts fa-3x"></i>`;
    body.className = "bg-success";
    if (score >= topScore) {
      //   topScore = score;
      localStorage.setItem("topScore", score);
      document.querySelector(".top-score").textContent = topScore;
    }
    document.querySelector(".secret-number").textContent = randomNumber;
  } else {
    score -= 1;

    if (score > 0) {
      guessInput > randomNumber
        ? (msg.innerHTML = `<i class="fa-solid fa-arrow-trend-down fa-3x"></i> DECREASE `)
        : (msg.innerHTML = `<i class="fa-solid fa-arrow-trend-up fa-3x"></i> INCREASE `);
    } else {
      msg.innerHTML = "You lost ";
      document.querySelector(".check-btn").disabled = true;
      body.className = "bg-danger";
      document.querySelector(".secret-number").textContent = randomNumber;
    }
    document.querySelector(".score").textContent = score;
  }

  document.querySelector(".again-btn").addEventListener("click", () => {
    score = 10;
    document.querySelector(".score").textContent = score;
    randomNumber = Math.floor(Math.random() * 100 + 1);
    document.querySelector(".secret-number").textContent = "?";
    console.log(randomNumber);
    document.querySelector(".check-btn").disabled = false;
    document.querySelector("body").classList.remove("bg-success", "bg-danger");
    document.querySelector(".guess-input").value = "";
    document.querySelector(".msg").innerText = "Starting ...";
  });
});

// myObj = {a:1, b:2, c:3}
// localStorage.setItem("OBJ", JSON.stringify(myObj)) //local storage a object atma
