import { useEffect, useRef, useState } from "react";

function usePlayer(audioRef, canvasRef) {
  const firstPlay = useRef(true);
  const [isPlay, setIsPlay] = useState(false);
  const audioContext = useRef(null);
  const analyser = useRef(null);
  const animationId = useRef(null);

  useEffect(() => {
    // Asegúrate de que el elemento audio está disponible y aún no ha sido inicializado
    if (audioRef.current && !audioContext.current) {
      audioContext.current = new (window.AudioContext ||
        window.webkitAudioContext)();
      const source = audioContext.current.createMediaElementSource(
        audioRef.current
      );
      analyser.current = audioContext.current.createAnalyser();
      source.connect(analyser.current);
      analyser.current.connect(audioContext.current.destination);
      analyser.current.fftSize = 256;
    }
  }, [audioRef]);

  // Animación horizontal
  const draw = () => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    const bufferLength = analyser.current.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    analyser.current.getByteFrequencyData(dataArray);

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "#000000";
    // ctx.fillRect(0, 0, width, height); // No queremos que sea el fondo negro

    const barWidth = (width / bufferLength) * 2.5;
    let barHeight;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
      barHeight = dataArray[i] / 2;
      ctx.fillStyle = "rgb(" + (barHeight + 27) + ",247,239)";
      ctx.fillRect(x, height - barHeight / 2, barWidth, barHeight / 2);

      x += barWidth + 1;
    }

    animationId.current = requestAnimationFrame(draw);
  };

  const handlePlay = async () => {
    firstPlay.current = false;
    if (audioContext.current.state === "suspended") {
      await audioContext.current.resume();
    }
    audioRef.current.play();
    setIsPlay(true);
    animationId.current = requestAnimationFrame(draw);
  };

  const handlePause = () => {
    audioRef.current.pause();
    setIsPlay(false);
    cancelAnimationFrame(animationId.current);
  };

  useEffect(() => {
    return () => cancelAnimationFrame(animationId.current);
  }, []);

  return { isPlay, handlePlay, handlePause };
}

export { usePlayer };
