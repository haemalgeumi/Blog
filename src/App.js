import logo from "./logo.svg";
import "./App.css";
import { Routes,Route } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/detail.js";

function App() {
  return (
<Routes>
  <Route path="/" element ={ <Main/>}/>
  <Route path="/detail/:id" element={<Detail />} />
</Routes>
  )
}



export default App;
