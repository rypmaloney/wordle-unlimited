import { useEffect } from 'react';
import './App.css';

function App() {


  return (
    <div className="App">

        <p>
          Ready to go
        </p>


    </div>
  );
}


//Calls random words until it receives one of the appropriate length
function findWord(length) {
  fetch(`https://random-word-api.herokuapp.com/word?`, {
      mode: "cors",
  })
      .then(function (response) {
          return response.json();
      })
      .then(function (response) {
          console.log(response);
          if (response[0].length != length) {
              findWord(length);
          } else {
              console.log(response);
          }
      });
}


//Checks if word IS word, updates isWord
let isWord;
function checkIfWord(word) {
  const key = "ed92f719-9976-426c-a34f-1fb9d6ceb547";

  fetch(
      `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${key}`,
      {
          mode: "cors",
      }
  )
      .then(function (response) {
          return response.json();
      })
      .then(function (response) {
          return response;
      })
      // .then((response) => {
      //     if (response[0].meta) {
      //         isWord = true;
      //     } else {
      //         isWord = false;
      //     }
      // });
}

//same but async function
async function checkWordle(word) {
  const key = "ed92f719-9976-426c-a34f-1fb9d6ceb547";
  const res = await fetch(
      `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${key}`
  );
  const response = await res.json();
  return response;
}

export default App;
