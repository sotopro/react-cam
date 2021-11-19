import React, {useState} from 'react';
import './App.css';
import Counter from './src/components/counter';

const App = () =>{
  const [start, setStart] = useState(false);
  return (
    <div className="container">
      <div className="navbar">
        <h1>Video Stream</h1>
      </div>
    <div className="top-container">
      <video id="video">Stream not available...</video>
  
      <canvas id="canvas"></canvas>
      <Counter state={start} />
      <div className="controls">
        <button id="start-btn" onClick={() => setStart(true)} disabled={start}>Start</button>
        <button id="stop-btn" onClick={() => setStart(false)} disabled={!start}>Stop</button>
        <select id="video-filter" className="select">
          <option value="none">Normal</option>
          <option value="grayscale(100%)">Grayscale</option>
          <option value="sepia(100%)">Sepia</option>
          <option value="invert(100%)">Invert</option>
          <option value="hue-rotate(90deg)">Hue</option>
          <option value="blur(10px)">Blur</option>
          <option value="contrast(200%)">Contrast</option>
        </select>
      </div>
    </div>
    </div>
  );
}

export default App;
