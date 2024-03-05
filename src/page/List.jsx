import { useEffect, useState } from "react";
import Person from "../components/Person";
import { useNavigate } from "react-router-dom";

export default function List() {
  const [data, setData] = useState([]);
  const navigateTo = useNavigate();

  const onAdd = () => {
    navigateTo("/add");
  };

  const handleDelete = () => {
    let list = sessionStorage.getItem("list");
    if (!list) {
      list = [];
    } else {
      list = JSON.parse(list);
    }
    setData([...list]);
  };
  useEffect(() => {
    handleDelete();
  }, []);

  return (
    <div className="list">
      <div className="content">
        {data.map((person) => (
          <Person
            name={person.name}
            surname={person.surname}
            phone={person.phone}
            onDelete={handleDelete}
          />
        ))}
      </div>

      <button onClick={onAdd} className="add-button">
        Add
      </button>
    </div>
    /* <div className="list-table">
      <div className="list-first-row">
        <p>First name</p>
        <p>Last name</p>
        <p>Phone number</p>
      </div>
      <div className="list-data">
        {data.map((person) => (
          <Person person={person} onDelete={handleDelete} />
        ))}
      </div>
    </div> */
  );
}
