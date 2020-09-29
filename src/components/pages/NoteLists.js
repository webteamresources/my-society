import React, { useState, useEffect } from "react";
import firebase from "./firebase";


function useLists() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("members")
      .onSnapshot(snapshot => {
        const lists = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setLists(lists);
      });
  }, []);

  return lists;
}

const NoteLists = () => {
  const lists = useLists();

  const handleOnDelete = id => {
    firebase
      .firestore()
      .collection("members")
      .doc(id)
      .delete();
  };

  return (
    <div>
      {lists.map(list => {
        return (
          <div>
            <p>{list.title}</p>
            <p>{list.body}</p>
            <button onClick={() => handleOnDelete(list.id)} ></button>
          </div>
        );
      })}
    </div>
  );
};

export default NoteLists;
