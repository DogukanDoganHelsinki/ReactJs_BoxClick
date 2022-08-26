import React from "react";
import "./App.css";
import Box from "./Box";
import boxes from "./boxes";

function App() {
  const [squares, setSquares] = React.useState(boxes);

  /* function toggle(id) {
    setSquares((prevSquares) => {
      const newSquares = [];
      for (let i = 0; i < prevSquares.length; i++) {
        const currentSquare = prevSquares[i];
        if (currentSquare.id === id) {
          const updatedSquare = {
            ...currentSquare,
            on: !currentSquare.on,
          };
          newSquares.push(updatedSquare);
        } else {
          newSquares.push(currentSquare);
        }
      }
      return newSquares;
    });
  } */

  function toggle(id) {
    setSquares((prevSquare) => {
      return prevSquare.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  }

  const squareElements = squares.map((square) => (
    <Box key={square.id} id={square.id} on={square.on} toggle={toggle} />
  ));

  return <div className="App">{squareElements}</div>;
}

export default App;
