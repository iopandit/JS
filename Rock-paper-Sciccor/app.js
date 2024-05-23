let userscore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

let userScoreField = document.querySelector("#user-score");
let compScoreField = document.querySelector("#comp-score");

const getCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randInd = Math.floor(Math.random() * 3);
    // console.log("ingetcompChoice");
    //console.log(`Computer chooses ${options[randInd]}`);
    return options[randInd];
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userscore++;
        userScoreField.innerText = userscore;
        msg.innerText = `You Win !! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "Green";
    } else {
        compScore++;
        compScoreField.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }

}

const gameDraw = () => {
    msg.innerText = "Game was Draw,Play Again";
    msg.style.backgroundColor = "rgb(16 118 236)";
};
const playGame = (userChoice) => {
    console.log("userchoise", userChoice);
    const compChoice = getCompChoice();
    console.log("Compchoise", compChoice);

    if (userChoice === compChoice) {
        gameDraw();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userWin === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log(`Your choise ${userChoice} is clicked`);
        playGame(userChoice);
    });
});