import React, { useState } from 'react';
import './App.css';

const MainContainer = () => {
  const [number, setNumber] = useState(0);

  const handleAdd = () => {
    setNumber(number + 1)
  };

  const handleRemove = () => {
    setNumber(number - 1)
  }

  return (
    <>
      <div>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleRemove}>Remove</button>
      </div>
      <div>
        {number}
      </div>
    </>
  )

}

function App() {
  return (
    <div className="App">
      <MainContainer />
    </div>
  );
}

export default App;
