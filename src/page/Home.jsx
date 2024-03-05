import "./styles.css";
import List from "./List";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigateTo = useNavigate();
  const toList = () => {
    navigateTo("/list");
  };
  const toAdd = () => {
    navigateTo("/add");
  };
  return (
    <nav className="navigation-menu">
      <button onClick={toList}> Go to list</button>
      <button onClick={toAdd}>Go to add form</button>
    </nav>
  );
}
