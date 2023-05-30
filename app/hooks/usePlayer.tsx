import { useRef, useState } from "react";

function usePlayer(audioRef: any) {
  const firstPlay = useRef<boolean>(true);
  const [isPlay, setIsPlay] = useState(false);

  const handlePlay = () => {
    // if (firstPlay.current) {
    firstPlay.current = false;
    audioRef.current.play();
    setIsPlay(true);
    // }
  };

  const handlePause = () => {
    audioRef.current.pause();
    setIsPlay(false);
  };

  return { isPlay, handlePlay, handlePause };
}

export { usePlayer };
