import React, { useState, useEffect } from 'react';
import './App.css';
import Character from './components/Character';
import axios from 'axios';
import reactDom from 'react-dom';
import { render } from '@testing-library/react';

  const App = () => {

  const [SwData, setSwData] = useState([])
  const [error, setError] = useState(null)



useEffect(() => {
  axios.get('https://swapi.dev/api/people')
    .then(res => {
      console.log(res.data)
      setSwData(res.data);
    })
    .catch(err => {
      console.error(err);
      setError("Sorry, the force is not with you!");
    })
}, [])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  

  return (
    <div className="App">
      <h1 className="Header">Star Wars Major Characters List</h1>

      {
      SwData.map(ch => {
        return <Character 
             name={ch.name}
             
             />
      })
    }
       </div>
  )
  }
export default App;
