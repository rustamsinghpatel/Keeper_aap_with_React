import React from "react";
import "./styles1.css";
function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <h1>{props.content}</h1>
      <button className="delbtn" onClick={handleClick}>Delete</button>
    </div>
  );
}
export default Note;
