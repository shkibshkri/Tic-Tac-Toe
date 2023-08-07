var playerSymbol = "X";
let i = 0;
let gameEnded = false;
let previousPos = 0;

function cellClick(cell)
{
    if (i < 6)
    {
        if(cell.innerHTML == "" && !gameEnded && cell.id != previousPos)
        {
            cell.innerHTML = playerSwap(playerSymbol);
            i += 1;
        }
    } else if (cell.innerHTML != "" && !gameEnded)
    {
        playerSwap(playerSymbol);
        let thisCell = cell;
        cellChange(thisCell);
    }
}

function playerSwap(plySymbol)
{
    let symbol = (plySymbol === "X") ? plySymbol = "O" : plySymbol = "X";
    playerSymbol = symbol;
    return symbol;
}

function cellChange(thisCell)
{
    let temp = thisCell.innerHTML;

    if(playerSymbol == "X" && temp == "X" || playerSymbol == "O" && temp == "O")
    {
        thisCell.innerHTML = "";
        previousPos = thisCell.id; 
        playerSwap(playerSymbol);
        i -= 1;
    } else
    {
        alert("It's not your turn!");
        playerSwap(playerSymbol);
    }
}

function winCheck()
{
    const winPosition = [ [1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7] ];
    
    for(let i = 0; i < 3; i++)
    {
       if((document.getElementById(winPosition[i][0]).innerHTML == "X" &&
           document.getElementById(winPosition[i][1]).innerHTML == "X" &&
           document.getElementById(winPosition[i][2]).innerHTML == "X")||
          (document.getElementById(winPosition[0][i]).innerHTML == "X" &&
           document.getElementById(winPosition[1][i]).innerHTML == "X" &&
           document.getElementById(winPosition[2][i]).innerHTML == "X"))
       {
            firecracker("X");
            gameEnded = true;
       } 

       if((document.getElementById(winPosition[i][0]).innerHTML == "O" &&
           document.getElementById(winPosition[i][1]).innerHTML == "O" &&
           document.getElementById(winPosition[i][2]).innerHTML == "O")||
          (document.getElementById(winPosition[0][i]).innerHTML == "O" &&
           document.getElementById(winPosition[1][i]).innerHTML == "O" &&
           document.getElementById(winPosition[2][i]).innerHTML == "O"))
       {
            firecracker("O");
            gameEnded = true;
       } 
    }
    
    if((document.getElementById(winPosition[0][0]).innerHTML == "X" &&
        document.getElementById(winPosition[1][1]).innerHTML == "X" &&
        document.getElementById(winPosition[2][2]).innerHTML == "X" )||
       (document.getElementById(winPosition[0][2]).innerHTML == "X" &&
        document.getElementById(winPosition[1][1]).innerHTML == "X" &&
        document.getElementById(winPosition[2][0]).innerHTML == "X"))
    {
        firecracker("X");
        gameEnded = true;
    }
    
    if((document.getElementById(winPosition[0][0]).innerHTML == "O" &&
        document.getElementById(winPosition[1][1]).innerHTML == "O" &&
        document.getElementById(winPosition[2][2]).innerHTML == "O" )||
       (document.getElementById(winPosition[0][2]).innerHTML == "O" &&
        document.getElementById(winPosition[1][1]).innerHTML == "O" &&
        document.getElementById(winPosition[2][0]).innerHTML == "O"))
    {
        firecracker("O");
        gameEnded = true;
    }
}

function resetGame()
{
    for(let i = 1; i < 10 ; i++)
    {
        document.getElementById(i.toString()).innerHTML = "";
    }
    location.reload();
}

function firecracker(winPlayer)
{
    Swal.fire({
            title: `Player '${winPlayer}' win!`,
            width: 400,
            padding: "2em",
            confirmButtonColor: "gray",
            color: "black",
            backdrop: `
                rgba(0,0,0,0.4)
                url("https://i.pinimg.com/originals/2b/a5/00/2ba5009a81a355bf5c398adaf3a1d367.gif")
                center top
                repeat-x
            `
    })
}