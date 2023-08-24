// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from "react-router-dom";
import './components/navbar';
import './components/footer';

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <main className="mx-3">
        <Outlet />
      </main>
      {/* <footer /> */}
    </>
  )
}

export default App
