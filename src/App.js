import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import MainLayout from './layouts/MainLayout';
import React, { useState } from "react";



export const LoggedInContext = React.createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => { },
});




function App() {


  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loggedInValueAndSetterToProvide = [isLoggedIn, setIsLoggedIn];



  return (
    <LoggedInContext.Provider value={loggedInValueAndSetterToProvide}>
      <div>

        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path='*' element={<p>Invalid URL</p>} />
          </Route>

        </Routes>
      </div>
    </LoggedInContext.Provider>
  )

}
export default App;
