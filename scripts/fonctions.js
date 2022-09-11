function overly(event) {
    playerId = Number(event.target.dataset.playerid);
    document.getElementById("conover").style.display = "block";
    document.getElementById("backdrop").style.display = "block";
}

function close() {
    document.getElementById("conover").style.display = "none";
    document.getElementById("backdrop").style.display = "none";
    format.firstElementChild.classList.remove("error");
    errcheck.textContent = "";
    format.firstElementChild.lastElementChild.value = null;
}

function done(event) {
    event.preventDefault();
    const name = document.getElementById("plyrname").value.trim();
    if (!name) {
        event.target.firstElementChild.classList.add("error");
        errcheck.textContent = "Enter a valid name !!";
        return;
    }

    document.getElementById("name" + playerId).textContent = name;
    players[playerId - 1].name = name;
    close();
}

// for the Game:
function newGame() {
    if(players[0].name != "" && players[1].name != "") {
        reset();
        document.getElementById("active-player").textContent = players[activeId].name;
        gameArea.style.display = "block";
    }
    else{
        alert("Set custom names for Both!");
        return;
    }
}

function switchkey() {
    if (activeId === 0)
        activeId = 1;
    else
        activeId = 0;
    document.getElementById("active-player").textContent = players[activeId].name;
}

function cocher(event) {
    if(etat)
        return;

    const selected = event.target;
    const scol = Number(selected.dataset.col) - 1;
    const srow = Number(selected.dataset.row) - 1;
    if (gameData[srow][scol] > 0) {
        alert("Select an Empty field !!");
        return;
    }

    selected.textContent = players[activeId].symbol;
    selected.classList.add("disabled");

    gameData[srow][scol] = activeId + 1;
    const winner = checkWinner();
    if(winner!=0){
        endGame(winner);
    }
    round++;
    switchkey();
}

function checkWinner() {
    // rows
    for (let i = 0; i < 3; i++) {
        if(gameData[i][0] > 0 && gameData[i][0] == gameData[i][1] && gameData[i][1] == gameData[i][2])
            return gameData[i][0];
    }
    // columns
    for (let i = 0; i < 3; i++) {
        if(gameData[0][i] > 0 && gameData[0][i] == gameData[1][i] && gameData[1][i] == gameData[2][i])
            return gameData[0][i];
    }
    // Diagonal
    if(gameData[0][0] > 0 && gameData[0][0] == gameData[1][1] && gameData[1][1] == gameData[2][2])
        return gameData[0][0];
        
    else if(gameData[0][2] > 0 && gameData[0][2] == gameData[1][1] && gameData[1][1] == gameData[2][0])
        return gameData[0][2];
    if(round == 9)
        return -1;
    return 0;
}
function endGame(win){
    etat = true;
    gameOver.style.display = "block";
    if(win>0){
        document.getElementById("winner").textContent = players[win-1].name;
    }
    else{
        gameOver.firstElementChild.innerText = "it's a Draw !"
    }
}

function reset(){
    etat = false;
    activeId = 0;
    round = 1;
    gameOver.style.display = "none";
    gameOver.firstElementChild.innerHTML = '<h3>You won, <span id="winner">NAME</span>!</h3>';
    let k = 0;
    for(let i=0; i<3;i++){
        for(let j=0; j<3;j++){
            gameData[i][j]=0;
            morba3[k].textContent = "";
            morba3[k].classList.remove("disabled");
            k++;
        }
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