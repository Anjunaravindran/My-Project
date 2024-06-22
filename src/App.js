import logo from './logo.svg';
import React from 'react';
import './App.css';
import Form from './Form';
import Registernow from './pages/Registernow';
import Forgotpassword from './pages/Forgotpassword';
import { Routes , BrowserRouter ,Route } from 'react-router-dom';
import Display from './Display';
import Carousel1 from './Components/Carousel1';
import Carousel2 from './Components/Carousel2';
import Carousel3 from './Components/Carousel3';
import Carousel4 from './Components/Carousel4';
import Carousel5 from "./Components/Carousel5";
import Carousel6 from "./Components/Carousel6";
import Carousel7 from "./Components/Carousel7";
import Carousel8 from "./Components/Carousel8";
import Carousel9 from "./Components/Carousel9";
import Carousel10 from "./Components/Carousel10";
import Carousel11 from "./Components/Carousel11";
import Carousel12 from "./Components/Carousel12";
import Carousel13 from "./Components/Carousel13";
import Carousel14 from "./Components/Carousel14";
import Carousel15 from "./Components/Carousel15";
import Carousel16 from "./Components/Carousel16";
import Movies from './Movies';
import Home from './Home';
import Login from './Login';
import { Navbar } from './Comp/Navbar';
import { HomeC ,About,Contact,Services } from './Comp/Pages';




function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="registernow" element={<Registernow/>}/>
        <Route path="forgotpassword" element={<Forgotpassword/>}/>
        <Route path="movies" element={<Movies/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="form" element={<Form/>}/>
        <Route path="carousel1" element={<Carousel1 />} />
        <Route path="carousel2" element={<Carousel2 />} />
        <Route path="carousel3" element={<Carousel3 />} />
        <Route path="carousel4" element={<Carousel4 />} />
        <Route path="carousel5" element={<Carousel5 />} />
        <Route path="carousel6" element={<Carousel6 />} />
        <Route path="carousel7" element={<Carousel7 />} />
        <Route path="carousel8" element={<Carousel8 />} />
        <Route path="carousel9" element={<Carousel9 />} />
        <Route path="carousel10" element={<Carousel10 />} />
        <Route path="carousel11" element={<Carousel11 />} />
        <Route path="carousel12" element={<Carousel12 />} />
        <Route path="carousel13" element={<Carousel13 />} />
        <Route path="carousel14" element={<Carousel14 />} />
        <Route path="carousel15" element={<Carousel15 />} />
        <Route path="carousel16" element={<Carousel16 />} />
        <Route path="navbar" element={<Navbar/>}/>
        <Route path="homec" element={<HomeC/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="services" element={<Services/>}/>
      </Routes>
      </BrowserRouter>
    </div>

);
}

export default App;
