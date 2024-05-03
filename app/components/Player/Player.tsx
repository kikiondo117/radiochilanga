import React from "react";
import { usePlayer } from "~/hooks/usePlayer";
// * Components
import { motion } from "framer-motion";
// * Custom Components
import { BsPlayCircle, BsPauseCircle } from "react-icons/bs";
import { asura } from "~/utils/radio_host";
import { IoIosVolumeHigh } from "react-icons/io/index";
// import { Canvas } from "../molecules/Canvas/Canvas";
import "react-h5-audio-player/lib/styles.css";

export function Player() {
  const audioRef = React.useRef(null);
  const canvasRef = React.useRef(null);
  const volumRef = React.useRef(null);

  const { isPlay, handlePlay, handlePause } = usePlayer({
    audioRef,
    canvasRef,
  });

  const handleValume = (element: any) => {
    audioRef.current.volume = element.target.value * 0.01;
  };

  return (
    <>
      {isPlay && <canvas ref={canvasRef} />}
      <audio
        crossOrigin="anonymous"
        ref={audioRef}
        style={{ display: "none" }}
        src={asura}
        controls
      />

      {isPlay ? (
        <div className="flex items-center gap-4 bg-white px-4 py-2 rounded-md">
          <button onClick={handlePause}>
            <BsPauseCircle
              role="button"
              tabIndex={0}
              className="bg-white rounded-full text-blue text-5xl"
            />
          </button>

          <div className="flex items-center gap-2 ">
            <IoIosVolumeHigh className="text-5xl" />
            <input
              onChange={handleValume}
              ref={volumRef}
              type="range"
              min={0}
              max="100"
              className="range range-accent range-xs"
            />
          </div>
        </div>
      ) : (
        <motion.button
          animate={{
            scale: [1, 1.5, 1.5, 1, 1],
            rotate: [0, 0, 120, 120, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          transition={
            !isPlay
              ? { repeat: Infinity, repeatDelay: 9 }
              : { repeat: 0, repeatDelay: 0 }
          }
          onClick={handlePlay}
        >
          <BsPlayCircle
            tabIndex={0}
            role="button"
            className="bg-white rounded-full text-8xl"
          />
        </motion.button>
      )}
    </>
  );
}
