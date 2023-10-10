
import "./App.css";
import Cards from "./components/Cards"
import {Routes,Route } from "react-router-dom";
import Pricing from './components/Pricing'

function App() {
  return (
    <>
  
    <Routes>
      <Route path="/" Component={Cards} />
      <Route path="Pricing" Component={Pricing} />
        
      
    </Routes>
    
  </>
  );
}

export default App;
