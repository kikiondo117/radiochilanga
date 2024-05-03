import { type RefObject, useEffect, useRef, useState } from "react";

interface UsePlayerProps {
  audioRef: RefObject<HTMLAudioElement>;
  canvasRef: RefObject<HTMLCanvasElement>;
}

function usePlayer({ audioRef, canvasRef }: UsePlayerProps) {
  const firstPlay = useRef(true);
  const [isPlay, setIsPlay] = useState(false);
  const audioContext = useRef<AudioContext | null>(null);
  const analyser = useRef<AnalyserNode | null>(null);
  const animationId = useRef<number>(null);

  useEffect(() => {
    if (audioRef.current && !audioContext.current) {
      // * CREAMOS EL CONTEXT
      audioContext.current = new (window.AudioContext ||
        window.webkitAudioContext)();
      /**
       ** CREAMOS EL createMediaElementSource
       ** Esto lo que hace es crear un nodo de fuente de audio esto permite que el audio
       ** reproducido en el html sea manipulado o analizado por AudioContext
       */
      const source = audioContext.current.createMediaElementSource(
        audioRef.current
      );
      /**
       ** El analyser es una herramienta dentro de la API Web Audio API que permite
       ** visualizar y analizar datos en tiempo real, en la siguiente linea
       ** creamos un AnalyserNode
       */
      analyser.current = audioContext.current.createAnalyser();
      /**
       ** Conectamos el Source con el Analyser
       ** Y conectamos el analyser al destino que normalmente son las bocinas del dispositivo
       */
      source.connect(analyser.current);
      analyser.current.connect(audioContext.current.destination);
      /**
       ** FTP Size
       ** Este determina el tamaño de Transformada Rápida de Fourier (FFT)
       ** Un tamaño de FFT de 256 proporciona 128 bandas de frecuencia
       */
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
    audioRef.current.volume = 0.5;
    audioRef.current.play();
    setIsPlay(true);
    animationId.current = requestAnimationFrame(draw);
  };

  const handlePause = () => {
    audioRef.current.load();
    setIsPlay(false);
    cancelAnimationFrame(animationId.current);
  };

  useEffect(() => {
    return () => cancelAnimationFrame(animationId.current);
  }, []);

  return { isPlay, handlePlay, handlePause };
}

export { usePlayer };
