import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Contact from "./components/Contact";
import About from "./components/About";



function App() {
  return(
  <>
  <Main />
  
  <About/>
  <Contact/>
  </>
  )
}

export default App;
