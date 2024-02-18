let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const resetpara = document.querySelector("#reset");


const audio1 = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
const audio2 = new Audio("https://assets.mixkit.co/active_storage/sfx/1110/1110.wav");
resetpara.addEventListener("click", () => {
    audio2.play();
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
    msg.innerText = "Select your move";
    msg.style.backgroundColor = "#081b31";
});

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

}
const drawGame = () => {

    msg.innerText = "Its a Draw!";
    msg.style.backgroundColor = "#081b31";
}
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;

        msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;

        msg.innerText = `You Loose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) => {

    const compChoice = genComputerChoice();


    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        audio1.play();
        const userChoice = choice.getAttribute("id");

        playGame(userChoice)
    })
})