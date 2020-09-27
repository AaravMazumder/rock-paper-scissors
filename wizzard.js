//starting Javascript
console.log("hi");
var userScore = 0;
var computerScore = 0;
//caching of dome
const userScore_span=document.querySelector("user-score");
const computerScore_span=document.querySelector("computer-score");

const scoreBoard_div=document.querySelector("score-board");
const result_div=document.querySelector("result");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");
const rock_div=document.getElementById("r");
//giveing function
function game (a){
    console.log("Itworks" + a)
}

function main(){
    rock_div.addEventListener('click',function(){
        game('r')
    });

    paper_div.addEventListener('click',function(){
        game('p')
    });

    scissor_div.addEventListener('click',function(){
        game('s')
    });


}

main();