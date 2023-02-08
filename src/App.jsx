import { useState } from 'react'
import Logo from './assets/365days.svg'
import './App.css'

function App() {

  var now = new Date();
  var start = new Date(now.getFullYear(), 0, 0);
  var diff = now - start;
  var oneDay = 1000 * 60 * 60 * 24;
  var day = Math.floor(diff / oneDay);
  var dayBefore = day - 1;
  var dayAhead = day + 1;

  return (
    <div className='center'>
      <img src={Logo} className="logo" />
      <div className='days'>
        <h1 className='yesterday'>{dayBefore.toString()}</h1>
        <h1 className='today'>{day.toString()}</h1>
        <h1 className='tomorrow'>{dayAhead.toString()}</h1>
      </div>
      <p className='copyright'>kmixc visuals ©</p>
    </div>
  )
}

export default App