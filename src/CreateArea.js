import React, { useState } from "react";
import "./styles1.css";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);

    event.preventDefault();
  }
  return (
    <div className="formstyle">
      <form>
        <input
          name="title"
          onChange={handleChange}
          valu={note.title}
          placeholder="Title"
        />
        <textarea cols="20"
          name="content"
          onChange={handleChange}
          valu={note.content}
          placeholder="Take a note.."
          rows="8"
        />
        <button className="adddata" onClick={submitNote}>
          Add
        </button>
      </form>
    </div>
  );
}
export default CreateArea;
