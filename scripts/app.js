const edit1 = document.getElementById("edit1");
const edit2 = document.getElementById("edit2");
const cancel = document.getElementById("close");
const format= document.querySelector("form");

const errcheck = document.getElementById("errors");
const stratBtn = document.getElementById("start");
const gameArea = document.getElementById("actived");
const morba3 = document.querySelectorAll("#tabla li");
// const morba3 = document.getElementById("tabla");
const gameOver = document.getElementById("game-over");

let playerId = 0;
let activeId = 0;
let round = 1;
let etat = false;

const gameData=[
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

const players=[
    {
        name :"",
        symbol:"X"
    },
    {
        name :"",
        symbol:"O"
    },
]

edit1.addEventListener("click",overly);
edit2.addEventListener("click",overly);
cancel.addEventListener("click", close)
format.addEventListener("submit",done);
stratBtn.addEventListener("click",newGame);

for(const item of morba3){
    item.addEventListener("click",cocher);
}

// morba3.addEventListener("click",cocher);