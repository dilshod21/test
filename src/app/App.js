import './App.css';
import {Context} from "../context/context";
import {useContext} from "react";

function App() {

  const value = useContext(Context);
  const { state, dispatch } = value;

  const onLog = () => {
    dispatch({type: 'ON_LOG', payload: 'ON_LOG is working!'});
  };
  return (
    <div className="body">
      <button className="btn btn-primary" onClick={onLog}>click for "ON_LOG" function</button>

    </div>
  );
}

export default App;
