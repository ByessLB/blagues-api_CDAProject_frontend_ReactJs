import React, { useState} from 'react';
import axios from 'axios';
import './App.css';
import carambarImage from './assets/img/carambar-1600x784.webp';

function App() {
  const [randomBlague, setRandomBlague] = useState(null);

  const fetchRandomBlague = () => {
    axios.get('https://blagues-api.onrender.com/api/random')
    .then(response => {
      setRandomBlague(response.data);
    })
    .catch(error => {
      console.error('Erreur lors de la récupération d\'une blague :', error);
    });
  };

  return (
    <div className="App">
      <div className="header">
        <img src={carambarImage} alt="Carambar Header" />
      </div>
      <div className="container txt-center my-5">
      <h1>Carambar&Co</h1>
      <button onClick={fetchRandomBlague} className='btn btn-warning mt-3'>Tirer une blague au sort</button>
      {randomBlague && (
        <div className='mt-4'>
          <p><strong>Question :</strong>{randomBlague.question}</p>
          <p><strong>Réponse :</strong>{randomBlague.reponse}</p>
        </div>
      )}
      </div>
    </div>
  );
}

export default App;
