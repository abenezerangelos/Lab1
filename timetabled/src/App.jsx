import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calendar from './components/Calendar.jsx'

const App = ()=>{
  return (<div className='App'>
    <h1>
      Itinerary for 7 days in Chicago 🏙️
    </h1> 
     
    <h2>
      Welcome to Chicago, Natalia! Check out this calendar, get to know the city and see all the sights during your stay.
    </h2>
    <Calendar/>
  </div>)
}

export default App
