const COlS = 10;
const ROWS = 10;
let PLAYED = 0;
let arr = [];
let isGameOver = false;

function drawGameBoard() {

    let html = '';
    for (let i = 0; i < ROWS; i++) {
        arr[i] = [];
        for (let j = 0; j < COlS; j++) {
            arr[i][j] = "*";
            html += '<div class="cell" id="cell-' + i + j + '" onclick="play(this,' + i + ',' + j + ')"></div>'
        }
    }

    document.getElementById("game-board").innerHTML = html;
}

function play(cell, x, y) {
    if (isGameOver) {
        return;
    }

    if (!cell.innerHTML) {
        switch (PLAYED) {
            case 1:
                cell.innerHTML = "X";
                PLAYED = 2;
                arr[x][y] = "X";
                break;
            case 2:
                cell.innerHTML = "O";
                PLAYED = 1;
                arr[x][y] = "O";
                break;
            default:
                cell.innerHTML = "X";
                PLAYED = 2;
                arr[x][y] = "X";
                break;
        }
    }
    checkWin(cell, x, y);
}

function checkWin(cell, x, y) {

    //check ngang
    var i = 1;
    var count = 1;
    while ((y + i) < COlS && arr[x][y + i] === cell.innerHTML) {
        i++;
        count++;
    }

    var j = 1;
    while (y - j >= 0 && arr[x][y - j] === cell.innerHTML) {
        j++;
        count++;
    }

    gameOver(count);

    // check doc
    var i = 1;
    var count  =1;
    while ((x + i) < ROWS && arr[x + i][y] === cell.innerHTML) {
        i++;
        count++;
    }

    var j = 1;
    while (x - j >= 0 && arr[x - j][y] === cell.innerHTML) {
        j++;
        count++;
    }

    gameOver(count);

    // check duong cheo trai

    var i = 1;
    var j = 1;
    var count = 1;
    while ((y + j < COlS) && (x + i < ROWS) && (arr[x + i][y + j] === cell.innerHTML)) {
        i++;
        j++;
        count++;
    }
    gameOver(count);

    var i = 1;
    var j = 1;

    while ((y - j >= 0) && (x - i >= 0) && (arr[x - i][y - j] === cell.innerHTML)) {
        i++;
        j++;
        count++;
    }
    gameOver(count);

    return true;
}

function gameOver(count) {
    if (count === 5) {
        alert("Game over");
        isGameOver = true;
    }
}

drawGameBoard();
