import './App.css'
import React, { useState } from 'react';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'

function App() {
  const [nav, setNav] = useState(false);
  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <Header toggleNav={toggleNav} />
      <Navbar />
      <section className="">
        <div className="flex gap-6">
          <Sidebar nav={nav} toggleNav={toggleNav} />
          <section className="m-10 section md:ml-32 w-full">
            <Dashboard />
          </section>
        </div>
      </section>
    </>
  )
}

export default App
