import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navBar";
import Footer from "./components/footer";
import Catalog from "./components/catalog";
import Home from "./components/home";
import Admin from "./components/admin";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import About from "./components/about";


import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar></Navbar>
      
      
    <Routes>
      <Route path="/home" exact element={<Home/>}></Route>
      <Route path="/admin" exact element={<Admin/>}></Route>
      <Route path="/catalog" exact element={<Catalog />}></Route>
      <Route path="/about" exact element={<About />}></Route>
  

    </Routes>

      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
