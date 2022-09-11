function overly(){
    document.getElementById("conover").style.display = "block";
    document.getElementById("backdrop").style.display = "block";
}
function close(){
    document.getElementById("conover").style.display = "none";
    document.getElementById("backdrop").style.display = "none";
    format.firstElementChild.classList.remove("error");
    errcheck.textContent = "";
}

function done(event){
    event.preventDefault();
    const name = document.getElementById("plyrname").value.trim();
    // alert(name);
    if(!name){
        event.target.firstElementChild.classList.add("error");
        errcheck.textContent = "Enter a valid name !!"; 
        return;
    }
}

// function isAlpha(ch){
//     let i=0;
//     let c=0;
//     while(i<ch.length){
//         if ((ch[i] >= "a" && ch[i] <= "z") || (ch[i] >= "A" && ch[i] <= "Z"))
//             c++;
//             i++;
//         }
//         return c==0 ? false : true;
// }