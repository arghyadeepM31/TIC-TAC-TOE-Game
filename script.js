let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let header = document.querySelector(".header");
let newBtn = document.querySelector("#new_game");
let msg = document.querySelector("#message")

let turnX = true;
let counter = 0;

let winning_pattern = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,5,6]];

// WE CAN USE FOR OF LOOP ALSO
boxes.forEach((box)=>{
    box.addEventListener("click" , ()=>{
        if(turnX)
        {
            box.classList.add("X-color");
            box.classList.remove("Y-color");
            box.innerText = "X";
            turnX = false;
        }
        else
        {
            box.classList.add("Y-color");
            box.classList.remove("X-color");
            box.innerText = "O";
            turnX = true;
        }
        box.disabled = true;
        counter++;
        checkWinner();
    })
})

function disableButton()
{
    for(box of boxes)
    {
        box.disabled = true;
    }
}

function enableButton()
{
    for(box of boxes)
    {
        box.disabled = false;
        box.innerText = "";
    }
}

function resetGame()
{
    turnX = true;
    counter = 0;
    header.classList.add("hide");
    resetBtn.classList.remove("hide");
    enableButton();
}

function displayWinner(winner)
{
    msg.innerText = `Congratulations! Winnner is ${winner}`;
    header.classList.remove("hide");
    resetBtn.classList.add("hide");
    disableButton();
}

function displayDraw()
{
    msg.innerText = "Draw , Start New Game";
    header.classList.remove("hide");
    resetBtn.classList.add("hide");
    disableButton();
}

function checkWinner()
{
    for(pattern of winning_pattern)
    {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if(val1 != "" && val2 != "" && val3 != "")
        {
            if((val1 == val2) && (val2 == val3))
            {
                displayWinner(val1);
            }
            else if(counter == 9)
            {
                displayDraw();
            }
        } 
    }
}

resetBtn.addEventListener("click" , resetGame);
newBtn.addEventListener("click" , resetGame);