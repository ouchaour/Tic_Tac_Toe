const edit1 = document.getElementById("edit1");
const edit2 = document.getElementById("edit2");

function overly(){
    document.getElementById("conover").style.display = "block";
    document.getElementById("backdrop").style.display = "block";
}
function close(){
    document.getElementById("close").style.display = "none";
}
function confirm(){
    
    document.getElementById("done").style.display = "none";
}

edit1.addEventListener("click",overly);
edit2.addEventListener("click",overly);



