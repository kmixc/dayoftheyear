import { useState } from 'react'
import Logo from './assets/365days.svg'
import './App.css'
import moment from 'moment';

function App() {

  var now = new Date();
  var start = new Date(now.getFullYear(), 0, 0);
  var diff = now - start;
  var oneDay = 1000 * 60 * 60 * 24;
  var day = Math.floor(diff / oneDay);
  var dayBefore = day - 1;
  var dayAhead = day + 1;
  var yearNum = now.getYear() + 1900;

  var half = day / 2;

  function isLeapYear(year) {
    return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
  }
  function days_of_a_year(year) {
    return isLeapYear(year) ? 366 : 365;
  }

  var update = function () {
    document.getElementById("time")
      .innerHTML = moment().format('HH:mm:ss');
  }
  setInterval(update, 1000);

  return (
    <div className='center'>
      <div className='top'>
        <div className='daysinyearleft'>{days_of_a_year(yearNum) + " / " + (days_of_a_year(yearNum) - day).toString()}</div>
        <p className='smltxt'>DAYS LEFT</p>
      </div>
      <div className='days'>
        <h1 className='yesterday'>{dayBefore.toString()}</h1>
        <h1 className='today'>{day.toString()}</h1>
        <h1 className='tomorrow'>{dayAhead.toString()}</h1>
      </div>
      <div className='divided'>{half.toString()}</div>
      <div className='bottom'>
        <img src={Logo} className="logo" />
        <p id='time'></p>
        <p className='copyright'>kmixc visuals ©</p>
      </div>
    </div>
  )
}

export default App