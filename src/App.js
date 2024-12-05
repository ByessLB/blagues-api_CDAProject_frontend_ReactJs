import React, { useState} from 'react';
import axios from 'axios';
import './App.css';

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
      <div id="ale">
      <h1>Carambar&Co</h1>
      <button onClick={fetchRandomBlague}>Tirer une blague au sort</button>
      {randomBlague && (
        <div>
          <h2>Blague au hasard :</h2>
          <p><strong>Question :</strong>{randomBlague.question}</p>
          <p><strong>Réponse :</strong>{randomBlague.reponse}</p>
        </div>
      )}
      </div>
    </div>
  );
}

export default App;
