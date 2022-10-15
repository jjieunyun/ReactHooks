import "./App.css";
import UseInputComponent from "./components/UseInputComponent";
import UseTabComponent from "./components/UseTabComponent";
import UseTitle from "./components/UseTitle";
import UseClick from "./components/UseClick";
import UseConfirm from "./components/UseConfirm";
import UsePreventLeave from "./components/UsePreventLeave";
import UseBeforeLeave from "./components/UseBeforeLeave";
import UseFadeIn from "./components/UseFadeIn";
import UseNetwork from "./components/UseNetwork";
import UseScroll from "./components/UseScroll";
import UseFullscreen from "./components/UseFullscreen";
import UseNotification from "./Hooks/useNotification";
import UseAxios from "./components/UseAxios";


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
      <hr/>
      <UsePreventLeave/>
      <hr/>
      <UseBeforeLeave/>
      <hr/>
      <UseFadeIn/>
      <hr/>
      <UseNetwork/>
        <hr/>
        <UseScroll/>
        <hr/>
        <UseFullscreen/>
      <hr/>
      <UseNotification/>
      <hr/>
      <UseAxios/>
    </div>
  );
}

export default App;
