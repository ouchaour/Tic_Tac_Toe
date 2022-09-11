const edit1 = document.getElementById("edit1");
const edit2 = document.getElementById("edit2");
const cancel = document.getElementById("close");
const format= document.querySelector("form");
const errcheck = document.getElementById("errors");
let playerId = 0;

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

