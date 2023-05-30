import React from "react";
import { usePlayer } from "~/hooks/usePlayer";
// * Components
import { motion } from "framer-motion";
// * Custom Components
import { BsPlayCircle, BsPauseCircle } from "react-icons/bs";
import { asura } from "~/utils/radio_host";

export function Player() {
  const audioRef = React.useRef(null);
  const { isPlay, handlePlay, handlePause } = usePlayer(audioRef);

  return (
    <>
      <audio ref={audioRef} style={{ display: "none" }} src={asura} controls />

      {isPlay ? (
        <button onClick={handlePause}>
          <BsPauseCircle
            role="button"
            tabIndex={0}
            className="bg-black/90 rounded-full text-blue text-8xl"
          />
        </button>
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
            className="bg-black/90 rounded-full text-8xl"
          />
        </motion.button>
      )}
    </>
  );
}
