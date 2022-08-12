import logo from "./logo.svg";
import "./App.css";
import DemoFunctionCom from "./Components/DemoComponent/DemoFunctionCom";
import DemoClassCom from "./Components/DemoComponent/DemoClassCom";
import BaiTapLayout from "./Components/BaiTapLayout/BaiTapLayout";
import Databinding from "./Databinding/Databinding";

function App() {
  return (
    <div className="App">
      {/* <h1>Hello cybersoft</h1>
      <DemoFunctionCom />
      <div className="w-25">
        <DemoClassCom />
      </div> */}
      {/* <BaiTapLayout /> */}
      <Databinding />
    </div>
  );
}

export default App;
