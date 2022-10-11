import "./App.css";
import UseInputComponent from "./components/UseInputComponent";
import UseTabComponent from "./components/UseTabComponent";
import UseTitle from "./components/UseTitle";

function App() {
  return (
    <div className="App">
      <UseInputComponent />
      <hr />
      <UseTabComponent />
      <hr />
      <UseTitle />
      <hr />
    </div>
  );
}

export default App;
