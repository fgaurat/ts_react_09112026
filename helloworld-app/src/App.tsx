import "./App.css";
import { Bonjour } from "./Bonjour";
import Counter from "./Counter/Counter";
import ParentCounter from "./ParentCounter/ParentCounter";
import ShowList from "./ShowList/ShowList";
import TheButton from "./TheButton/TheButton";

function App() {
  return (
    <>
      <h1>Hello</h1>

      <p>Le truc</p>
      <Bonjour name="GAURAT" firstName="Fred" />
      <hr />
      <ShowList />
      <hr />
      <TheButton />
      <hr />
      <Counter />
      <hr />
      <ParentCounter />
    </>
  );
}

export default App;
