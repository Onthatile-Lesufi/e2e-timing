import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter as Router, Route, Routes, HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Events from './pages/Events'
import Event from './pages/Event'
import Contact from './pages/Contact'
import Athletes from './pages/Athletes'
import Athlete from './pages/Athlete'
import Results from './pages/Results'
import AthleteResults from './pages/AthleteResults'
import EventResults from './pages/EventResults'

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path = '/' element = {<Home/>}/>
          <Route path = '/events' element = {<Events/>}/>
          <Route path = '/events/:event' element = {<Event/>}/>
          <Route path = '/contact' element = {<Contact/>}/>
          <Route path = '/athletes' element = {<Athletes/>}/>
          <Route path = '/athletes/:athlete' element = {<Athlete/>}/>
          <Route path = '/results/' element = {<Results/>}/>
          <Route path = '/results/event/:event' element = {<EventResults/>}/>
          <Route path = '/results/athlete/:event' element = {<AthleteResults/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
