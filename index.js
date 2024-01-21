let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice");
let display =document.querySelector("#msg");
const userScorePara=document.querySelector("#user-Score");
const compScorePara=document.querySelector("#comp-Score");

const genCompChoice=()=>{
    const options=["Snake","Water","Gun"];
    let idx= Math.floor(Math.random()*3);
    let compChoice=options[idx];
    return compChoice;
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userScore+compScore==10){
        display.innerText="Game Over!Refresh and Play Again";
        display.style.backgroundColor="#081b31";
        return;
    }
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        display.innerText=`You win! Your ${userChoice} beats ${compChoice} `;
        display.style.backgroundColor="green";

    }else{
        compScore++;
        compScorePara.innerText=compScore;
        display.innerText=`You Lost!  ${compChoice} beats your ${userChoice}`;
        display.style.backgroundColor="red";
    }
};
const draw=()=>{
    display.innerText="Match Draw! Play Again";
    display.style.backgroundColor="#081b31";
}
const playGame=(userChoice)=>{
    const compChoice=genCompChoice();
    if(userChoice===compChoice){
        draw();
    }else{
    let userWin=true;
     if( userChoice==="Snake"){
        userWin=compChoice==="Water"?true:false;
    }else if(userChoice==="Water"){
        userWin= compChoice==="Gun"?true:false;
    }else{
        userWin= compChoice==="Snake"?true:false;
    }

    showWinner(userWin,userChoice,compChoice);
}
};

choices.forEach((choice)=>{
   choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);
    });
});

