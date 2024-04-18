export function WhatsAppButton({ phoneNumber }: { phoneNumber: string }) {
  const handleClick = () => {
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      "¡Quiero informes!"
    )}`;
    window.open(url, "_blank");
  };

  return (
    <button
      className="w-fit md:w-96 h-20 bg-blue-600 text-2xl md:text-4xl rounded-lg px-4 text-white hover:bg-blue-700 animate-pulse"
      onClick={handleClick}
    >
      {`-> `}
      <span className="underline">Contactanos</span>
      {` <-`}
    </button>
  );
}
