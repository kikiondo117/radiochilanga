// * Custom Components
import { asura } from "~/utils/radio_host";

// import { Canvas } from "../molecules/Canvas/Canvas";
import "react-h5-audio-player/lib/styles.css";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";

export function PlayerV2() {
  return (
    <>
      <AudioPlayer
        className="rounded-md max-w-[240px]"
        customProgressBarSection={[]}
        customControlsSection={[RHAP_UI.MAIN_CONTROLS, RHAP_UI.VOLUME_CONTROLS]}
        autoPlay
        showJumpControls={false}
        showDownloadProgress={false}
        showFilledProgress={false}
        src={asura}
        loop={false}
        onPlay={(e) => console.log("onPlay")}
        // other props here
      />
    </>
  );
}
