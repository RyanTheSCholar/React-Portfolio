// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { Outlet } from "react-router-dom";
// import Footer from './components/footer';
import Navtab from './components/navbar';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css'


function App() {
  return (
    <>
      <header>
        <Navtab />
      </header>
      <main >
        <Outlet />
      </main>
      <footer>
        <Footer/>
      </footer>
      
    </>
  )
}

export default App
// className="mx-3"