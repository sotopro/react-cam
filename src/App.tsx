import React, {useState, useRef, useEffect} from 'react';
import Counter from './components/counter';
import VideoFilter from './components/video-filter';
// import { Button } from './App.style'
interface State {
    constraints: {
      video: boolean,
      audio: boolean
    },
    stream: any,
    height: any,
    width: number,
    filter: string,
    camStatus: boolean
}

const usePrevious = (value: State) => {
  const ref = useRef<State>();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const App = () =>{
  const initialState: State = {
    constraints: {
      video: true,
      audio: false
    },
    stream: null,
    height: 0,
    width: 500,
    filter: "none",
    camStatus: false
  };

  const [videoState, setVideoState] = useState<State>(initialState);
  const [start, setStart] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const prevState = usePrevious(videoState);
  const handleStart = () => {
    setStart(true);
    videoOn();
  }

  const handleStop = () => {
    setStart(false);
    videoOff();
  }

  const setCanvasAndVideoHeight = (height: any) => {
    if(videoRef.current) videoRef.current.setAttribute("height", height);
    if(canvasRef.current) canvasRef.current.setAttribute("height", height);
  };

  const handleCanPlay = () => {
    const height =
    videoRef.current ? videoRef.current.videoHeight /
      (videoRef.current.videoWidth / videoState.width) : 0;
    // Update the state and reflect it on video element's height
    setVideoState({ ...videoState, height })
    setCanvasAndVideoHeight(height);
    videoRef.current && videoRef.current.play();
  };
  
  const videoOn = () => {
    return !videoState.camStatus
    ? navigator && navigator.mediaDevices && navigator.mediaDevices
        .getUserMedia(videoState.constraints)
        .then(stream => {
          setVideoState({ ...videoState, stream, camStatus: true })           
          if(videoRef.current) {
              videoRef.current.srcObject = stream;
              videoRef.current.play();
            } 
        })
        .catch(err => {
          console.log(err.name, err.message);
          console.log(
            "Possible cause: didn't connect your webcam with your pc"
          );
        })
    : alert("Video is already running");
  }

  const onChangeHandler = (e : any) =>{
    setVideoState({ ...videoState, filter: e.target.value })
    if(videoRef.current) videoRef.current.style.filter = e.target.value;
  }
  

  const videoOff = () => {
    const stream = prevState && prevState.stream && prevState.stream.getTracks().forEach((track: any) => track.stop())
    setVideoState({ ...videoState, stream: stream, camStatus: false });
  };


  return (
    <div className="container">
      <div className="navbar">
        <h1>Video Stream</h1>
      </div>
    <div className="top-container">
      <video autoPlay playsInline muted id="video" ref={videoRef}  onCanPlay={handleCanPlay}>Stream not available...</video>
  
      <canvas id="canvas" ref={canvasRef}></canvas>
      <Counter state={start} />
      <div className="controls">
        <Button id="start-btn" onClick={() => handleStart()} disabled={start}>Start</Button>
        <Button id="stop-btn" onClick={() => handleStop()} disabled={!start}>Stop</Button>
        <VideoFilter onChangeHandler={onChangeHandler} filter={videoState.filter}/>
      </div>
    </div>
    </div>
  );
}

export default App;
