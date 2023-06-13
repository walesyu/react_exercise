import {useState} from "react";
import './ticTacToe.css';
import {Button, Grid} from "@mui/material";
import * as React from "react";

function TicTacToe() {
  const [currentMark, setMark] = useState("O");
  const [grids, setGrids] = useState(Array.from({length: 9}, (v, i) => ""));
  const [winner, setWinner] = useState(null)

  const markValue = (index) => {
    if (winner) {
      return false
    }
    if (grids[index] !== "") {
      return false;
    }
    if (currentMark === "O") {
      setMark("X")
    } else {
      setMark("O")
    }
    let tempList = grids
    tempList[index] = currentMark
    setGrids(tempList)
    checkWinner();
  }
  const resetGame = () => {
    setGrids(Array.from({length: 9}, (v, i) => ""))
    setWinner(null)
    setMark("O")
  }

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (grids[a] && grids[a] === grids[b] && grids[a] === grids[c]) {
        setWinner(grids[a] + " 贏了");
        return false;
      }
    }
    return null;
  }

  return <>
    <Grid container>
      <Grid item xs={12} style={{'textAlign': 'center'}}>
        <ul className={'boardContainer'}>
          {
            grids.map((value, index) =>
                <li key={index} className={'field'}
                    style={{color: value === "X" ? 'blue' : "red"}}
                    onClick={() => markValue(index)}>{value}</li>
            )
          }
        </ul>
        <div className={'result'}>{winner}</div>
        <Button variant="outlined" onClick={resetGame}>重來</Button>
      </Grid>
    </Grid>
  </>
}

export default TicTacToe;
