// create your App component here
// import React,{useEffect} from "react"
// const App(){
//     useEffect(()=>{
//         fetch('https://dog.ceo/api/breeds/image/random')
//         .then((res)=>res.json())
//         .then((data)=>console.log)
//     })
// }
// export default App;
import React, { useState, useEffect } from 'react';

function App() {
  const [dogImage, setDogImage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        setDogImage(data.message);
        setLoading(false);
      })
  }, []);

  return (
    <div className="App">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <img src={dogImage} alt="A Random Dog" />
        </div>
      )}
    </div>
  );
}

export default App;
