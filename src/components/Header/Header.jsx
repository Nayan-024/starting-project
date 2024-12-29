import reactimg from "../../assets/react-core-concepts.png";
import "./Header.css";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  return (
    <div>
      <header>
        <img src={reactimg} alt="Stylized atom" />
        <h1>First React Project</h1>
        <p>
          {reactDescriptions[genRandomInt(2)]} React concepts you will need for
          almost any app you are going to build!
        </p>
      </header>
    </div>
  );
}