import reactLogo from "./assets/react.svg";
import Gifs from "./Gifs"; 
import "./App.css"; 

function App() { 
  return ( 
  <> 
    <div> 
      <a href="https://react.dev" target="_blank"> 
        <img src={reactLogo} className="logo react" alt="React logo" /> 
      </a> 
    </div> 
    <h1>React API tutorial using Fetch</h1> 
    <div className="card"><Gifs /></div>
  </> 
  ); 
} 

export default App;