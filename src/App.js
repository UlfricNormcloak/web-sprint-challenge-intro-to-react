import React, { useState, useEffect } from 'react';
import './App.css';
import handlers from './mocks/handlers';
import Characters from './components/Character';


const App = () => {

  const [SwData, setSwData] = useState({})
  const [error, setError] = useState(null)

useEffect(() => {
  axios.get(`${BASE_URL}/apod?api_key=${API_KEY}`)//external server request
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
      <Characters name={SwData.name} height={SwData.height} mass={SwData.mass} hair_color={SwData.hair_color} skin_color={SwData.skin_color} eye_color={SwData.eye.eye_color} birth_year={SwData.birth_year} gender={SwData.gender} />
    </div>
  );
}

export default App;
