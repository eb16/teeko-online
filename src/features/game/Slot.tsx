import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  movePiece,
  selectActiveCell,
  Selection,
  Location,
  isValidMovement
} from "./gameSlice";
import { useDrag, useDrop } from "react-dnd";

interface Props {
  cell: number;
  location: Location;
}

export function Slot({ cell, location }: Props) {
  const dispatch = useDispatch();
  const { x, y } = location;
  const activeCell = useSelector(selectActiveCell);

  const [{ canDrop }, drop] = useDrop({
    accept: Selection.PLAYER1.toString(),
    drop: () => dispatch(movePiece({ to: { x, y } })),
    canDrop: () => !!activeCell && isValidMovement(activeCell!, { x, y }),
    collect: monitor => ({
      canDrop: !!monitor.canDrop()
    })
  });

  return (
    <button
      ref={drop}
      style={{
        padding: 20,
        margin: 5,
        border: "1px solid black",
        background: canDrop ? "#f9ffab" : "white",
        borderRadius: "50%"
      }}
    />
  );
}
