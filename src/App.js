import React, { useState } from 'react';
import './App.css';

const MainContainer = () => {
  const [data, setData] = useState([]);

  const handleAdd = () => {
    var temp = JSON.parse(JSON.stringify(data));
    temp.push(data.length + 1);
    setData(temp);
  };

  const handleRemove = () => {
    if(data.length > 1) {
      var temp = JSON.parse(JSON.stringify(data));
      temp.splice(data.length - 1, 1);
      setData(temp);
    }
  }

  return (
    <div className="wrapper">
      <div className='wrapper-button'>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleRemove}>Remove</button>
      </div>
      <div className='wrapper-body'>
        {data.map((item) => (
          <div key={item} className="item">
            {item}
          </div>
        ))}
      </div>
    </div>
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
