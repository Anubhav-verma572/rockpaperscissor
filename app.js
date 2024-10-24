let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector("#msg");
const userscorepara= document.querySelector("#user-score")
const compscorepara= document.querySelector("#comp-score")


const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    // rock paper scissor
    const randomIndx = Math.floor(Math.random() * 3);
    return options[randomIndx];
};

const drawGame = () => {
    // console.log("game is draw");
    msg.innerText="Its A Draw!";
};


const showWinner = (userWin) => {
    if (userWin) {
        userscore++;
        userscorepara.innerText = userscore;
        // console.log("YOU WIN");
        msg.innerText="You Win!";
        msg.style.backgroundcolor = "green";
    }
    else {
        compscore++;
        compscorepara.innerText = compscore;
        // console.log("YOU LOSE");
        msg.innerText="You Lose!";
        msg.style.backgroundcolor = "red";
    }
};

const playGame = (userChoice) => {
    // console.log("user choice = ", userChoice);

    //generate computer choice
    const compChoice = gencompchoice();
    // console.log("comp choice = ", compChoice);

    if (userChoice == compChoice) {
        //draw function
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice == "rock") {
            userWin = compChoice == "paper" ? false : true;
        }
        else if(userChoice == "paper")
        {
            userWin = compChoice == "scissors" ? false : true;
        }
        else
        {
            userWin = compChoice == "rock" ? false : true;
        }

        showWinner(userWin);
    }

};

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice is clicked",userChoice);
        playGame(userChoice);

    });
});