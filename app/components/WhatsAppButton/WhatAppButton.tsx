import { FormEvent, useState } from "react";

const WhatsAppButton = ({
  phoneNumber,
  message,
}: {
  phoneNumber: string;
  message: string;
}) => {
  const [show, setShow] = useState(false);

  const handleClick = ({ song }: { song: string }) => {
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      song
    )}`;
    window.open(url, "_blank");
  };

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    const song = e.target["song"].value;
    handleClick({ song: song });
  };

  if (!show) {
    return (
      <button
        onClick={() => setShow((state) => !state)}
        className="fixed right-[10px]"
      >
        <img src="/img/icons/music.png" alt="" className="w-10 h-10" />
      </button>
    );
  }

  return (
    <form
      onSubmit={handleOnSubmit}
      action=""
      className="bg-white p-2 rounded-md flex flex-col fixed right-[10px] gap-2 z-10"
    >
      <div className="flex gap-2">
        <img
          onClick={() => setShow((state) => !state)}
          src="/img/icons/music.png"
          alt=""
          className="w-10 h-10"
        />
        <input
          id="song"
          name="song"
          className="rounded-md p-2 border border-solid border-black "
          type="text"
          placeholder="Pide tu canción 🎶"
          autoFocus
        />
      </div>
      <button
        className="bg-secondary text-white capitalize rounded-md p-2"
        type="submit"
      >
        Perdir cancion al locutor
      </button>
    </form>
  );
};

export { WhatsAppButton };
