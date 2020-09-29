import React, { useState } from "react";
import firebase from "./firebase";

const AddNote = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addNote = () => {
    firebase
      .firestore()
      .collection("members")
      .add({
        title,
        body
      });

    setTitle("");
    setBody("");
  };

  return (
    <div>
      <input value={title} onChange={e => setTitle(e.target.value)} />
      <input value={body} onChange={e => setBody(e.target.value)} />
      <button onClick={addNote}>Add Note</button>
    </div>
  );
};

export default AddNote;
