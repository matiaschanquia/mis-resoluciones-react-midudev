import { useRef, useState } from "react"
import Card from "./Card";
import { useEffect } from "react";

const crucesWin = [
  [
    [1, 1, 1],
    [0, 0, 0],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
    [1, 1, 1],
  ],
  [
    [1, 0, 0],
    [1, 0, 0],
    [1, 0, 0],
  ],
  [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
  ],
  [
    [0, 0, 1],
    [0, 0, 1],
    [0, 0, 1],
  ],
  [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ],
  [
    [0, 0, 1],
    [0, 1, 0],
    [1, 0, 0],
  ],
]

function App() {
  const [game, setGame] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const [choice, setChoice] = useState(true);
  const [win, setWin] = useState({finish: false, winner: ""})

  useEffect(() => {
    for(let a = 0; a < crucesWin.length; a++) {
      let aciertosRed = 0;
      let aciertosWhite = 0;
      let llenos = 0
      for(let b = 0; b < crucesWin[a].length; b++) {
        for(let c = 0; c < crucesWin[a][b].length; c++) {
          if(crucesWin[a][b][c] === 1) {
            if(game[b][c] === "red") {
              aciertosRed++;
              if(aciertosRed === 3) {
                setWin({finish: true, winner: game[b][c]});
              }
            }
            if(game[b][c] === "white") {
              aciertosWhite++;
              if(aciertosWhite === 3) {
                setWin({finish: true, winner: game[b][c]});
              }
            }
          }
          if(game[b][c] !== 0) {
            console.log("entro aca!!!");
            llenos++;
            if(llenos === 9) {
              setWin({finish: true, winner: ""});
            }
          }
        }
      }
      aciertosRed = 0;
      aciertosWhite = 0;
      llenos = 0;
    }

  }, [game])

  const actualizarState = (index1, index2) => {
    const gameCopy = game;
    if(gameCopy[index1][index2] !== 0) {
      return;
    }
    gameCopy[index1][index2] = choice ? "red" : "white";
    
    setGame([...gameCopy]);
    setChoice(!choice);
  };

  const resetGame = () => {
    setGame([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
    setWin({finish: false, winner: ""})
    setChoice(true);
  }

  return (
    <div className="container-app">
      <div className="content-app">
        <h1 className="titulo">Tic tac toe</h1>
        <button className="btn-reset" onClick={resetGame}>Reset del juego</button>
        <div className="container-game">
          {
            game.map((item1,index1) => (
              item1.map((item2, index2) => (
                <Card state={item2} index1={index1} index2={index2} key={"" + index1 + index2} actualizarState={actualizarState}/>
              ))
            ))
          }
        </div>
        <div className="btns-choice">
          <button className={`btn-choice ${choice ? "active" : ""}`}>❌</button>
          <button className={`btn-choice ${!choice ? "active" : ""}`}>⚪</button>
        </div>
      </div>
      {
        win.finish && (
          <div className="modal">
            <div className="content-modal">
              <h2>
                {
                  win.winner === "" ? "Empate" : "Ganó"
                }
              </h2>
              {
                win.winner === "" ? <h3>.</h3> : win.winner === "red" ? <div className="container-win">❌</div> : <div className="container-win">⚪</div>
              }
              <button className="btn-reset" onClick={resetGame}>Empezar de nuevo</button>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default App
