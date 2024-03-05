import React from "react";
import { useNavigate } from "react-router-dom";

const Delete = ({ name, surname, phone, onDelete }) => {
  const navigateTo = useNavigate();

  const handleDelete = () => {
    let list = sessionStorage.getItem("list");
    if (!list) {
      return;
    }

    list = JSON.parse(list);

    const indexToDelete = list.findIndex(
      (props) =>
        props.name === name &&
        props.surname === surname &&
        props.phone === phone
    );

    if (indexToDelete !== -1) {
      list.splice(indexToDelete, 1);
      sessionStorage.setItem("list", JSON.stringify(list));
      navigateTo("/");
    }
    onDelete();
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default Delete;
