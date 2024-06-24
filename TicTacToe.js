let boxs =document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newgameBtn=document.querySelector("#newgame");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnX=true;

const winPattern = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[0,4,8]];

boxs.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("clicked");
        if(turnX){
            box.innerText="X";
            turnX=false;
        }
        else{
            box.innerText="O";
            turnX=true;
        }
        box.disabled=true;
        
        checkWinner();
    })
});
const resetGame=()=>{
    turnX=true;
    enableBox();
    msgcontainer.classList.add("hide");
    reset.style.display="inline";
}

const disableBox=()=>{
    for(let box of boxs){
        box.disabled=true;
    }
}
const enableBox=()=>{
    for(let box of boxs){
        box.disabled=false;
        box.innerText="";
    }
}

const showWiner=(winner)=>{
    msg.innerText=`Congratulations winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    reset.style.display="none";
    disableBox();
}
 
const checkWinner=()=>{
    for(let pattern of winPattern){
        let pos1Val= boxs[pattern[0]].innerText;
        let pos2val= boxs[pattern[1]].innerText;
        let pos3val= boxs[pattern[2]].innerText;
        if(pos1Val!=""&&pos2val!=""&&pos3val!=""){
            if(pos1Val==pos2val && pos2val == pos3val){
                console.log("winner",pos1Val);
                showWiner(pos1Val);
            }
        }
        
    }
}

newgameBtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);