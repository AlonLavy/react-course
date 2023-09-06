import "./Tune.css";
import audioSource from "../../../Assets/audio/the-desert.wav";
import { RefObject, useRef } from "react";

function Tune(): JSX.Element {
  const audioRef: RefObject<HTMLAudioElement> = useRef();

  const handlePlay = (): void => {
    audioRef.current.play();
  };

  const handlePause = (): void => {
    audioRef.current.pause();
  };

  const handleStop = (): void => {
    audioRef.current.load();
  };

  return (
    <div className="Tune">
      <audio src={audioSource} ref={audioRef} />

      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default Tune;
