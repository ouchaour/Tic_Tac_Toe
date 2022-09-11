const edit1 = document.getElementById("edit1");
const edit2 = document.getElementById("edit2");
const confirm = document.getElementById("done");

function overly(){
    document.getElementById("conover").style.display = "block";
    document.getElementById("backdrop").style.display = "block";
}
function close(){
    document.getElementById("close").style.display = "none";
}
function done(){
    let dd = document.getElementById("plyrname").value;
    
    alert(dd);
}

function isAlpha(ch){
    let i=0;
    let c=0;
    while(i<ch.length){
        if ((ch[i] >= "a" && ch[i] <= "z") || (ch[i] >= "A" && ch[i] <= "Z"))
            c++;
        i++;
    }
    return c==0 ? false : true;
}

edit1.addEventListener("click",overly);
edit2.addEventListener("click",overly);
confirm.addEventListener("click",done);



