let userscore = 0;
let compscore = 0;

const choices =  document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userPara = document.querySelector("#user-score");
const compPara = document.querySelector("#comp-score");

const gencompChoice = () =>{
    const options = ["rock","paper","scissor"];
   const randIdx = Math.floor (Math.random() *3);
   return options[randIdx];
}
const drawGame = () =>{
    
    msg.innerText = "game draw .play again";
    msg.style.backgroundColor = "#081b31";
};

const showWinner =(userWin ,userChoice , compChoice) =>{
    if (userWin){
        userscore++;
        userPara.innerText = userscore;

        msg.innerText = `you win. your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
        compPara.innerText = compscore;
    
        msg.innerText = `you loss. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
 
const playGame = (userChoice) =>{
    console.log("user choice", userChoice);
    const compChoice = gencompChoice();
    console.log("comp choice =",compChoice);


if (userChoice === compChoice){
        drawGame();
}  else {
   let userWin = true;
   if(userChoice ==="rock"){
        userWin = compChoice === "paper" ? false: true;
    } else if(userChoice === "paper"){
            userWin = compChoice ==="scissor" ? false: true;
    } else {
        userWin = compChoice ==="rock" ? false: true;

    }
      showWinner(userWin ,userChoice ,compChoice);
    }
};

choices.forEach((choice) =>{
 choice.addEventListener("click",() =>{
    const userChoice = choice.getAttribute("id");
     playGame(userChoice);
 });


});