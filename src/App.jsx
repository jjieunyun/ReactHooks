import "./App.css";
import UseInputComponent from "./components/UseInputComponent";
import UseTabComponent from "./components/UseTabComponent";
import UseTitle from "./components/UseTitle";
import UseClick from "./components/UseClick";
import UseConfirm from "./components/UseConfirm";

function App() {
  return (
    <div className="App">
      <UseInputComponent />
      <hr />
      <UseTabComponent />
      <hr />
      <UseTitle />
      <hr />
      <UseClick/>
      <hr/>
      <UseConfirm/>
    </div>
  );
}

export default App;
