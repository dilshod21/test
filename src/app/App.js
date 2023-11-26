import './App.css';
import {Context} from "../context/context";
import {useContext} from "react";

function App() {

  const value = useContext(Context);

  console.log(value);
  return (
    <div className="body">

    </div>
  );
}

export default App;
