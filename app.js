let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg");
let turnO = true;//playerX , playerO
let music = new Audio("win2.mp3");
let audioTurn = new Audio("click.mp3");
let gameover = new Audio("gameover.mp3");

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame =()=>
{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
       music.pause();
    // music.currentTime = 5;

};
boxes.forEach((box)=>
{
    box.addEventListener("click" ,()=>
    {
        // console.log("box was clicked");
        // box.innerText = "ab";
        if(turnO)
        {
            box.innerText = "O";
            audioTurn.play();
            turnO= false;
        }
        else{
            box.innerText="X";
            audioTurn.play();
            turnO = true;
        }
        box.disabled=true;
        checkWinner(); 
    });
}); 
const disableBoxes = ()=>
{
    for(let box of boxes)
    {
        box.disabled= true;
    }
}
const enableBoxes = ()=>
{
    for(let box of boxes)
    {
        box.disabled= false;
        box.innerText = "";
    }
}
const showWinner = (winner) =>
{
    msg.innerText= `Congratulation , Winner is ${winner}`;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px";
    music.play();
    msgContainer.classList.remove("hide");
    disableBoxes();
 
}
const checkWinner =()=>
{
    for(let pattern of winPatterns)
    {
        // console.log(pattern[0],pattern[1],pattern[2]);
         let pos1Val = boxes[pattern[0]].innerText;
         let pos2Val  = boxes[pattern[1]].innerText;
          let pos3Val = boxes[pattern[2]].innerText;
          
          if(pos1Val!="" && pos2Val!="" && pos3Val!="")
          {
            if(pos1Val==pos2Val && pos2Val==pos3Val)
            {
                // console.log("winner" , pos1Val);
                
                showWinner(pos1Val);

            }
          }
    }
}
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
