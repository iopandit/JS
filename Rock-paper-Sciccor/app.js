let userscore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

const getCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randInd = Math.floor(Math.random() * 3);
    // console.log("ingetcompChoice");
    //console.log(`Computer chooses ${options[randInd]}`);
    return options[randInd];
};

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
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log(`Your choise ${userChoice} is clicked`);
        playGame(userChoice);
    });
});