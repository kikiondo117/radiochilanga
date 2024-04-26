import { WhatsAppButton } from "~/components/WhatsAppButton/WhatsAppButtonV2";
import { Card } from "~/components/molecules/Card/Card";
import { Fqa } from "~/components/organisms/Fqa/Fqa";
import { Link } from "@remix-run/react";
import { Plans } from "~/components/organisms/Plans/Plans";

export default function Services() {
  const style = {
    backgroundImage: `radial-gradient(100% 100% at -40% 130%, rgba(47, 404, 403, 0.6) 0, #fcfdfd 100%), linear-gradient(180deg, rgba(245, 245, 245, 0) 0, #edf6ff 67.19%)`,
  };

  const handleClick = () => {
    const url = `https://api.whatsapp.com/send?phone=+523122709176&text=${encodeURIComponent(
      "¡Quiero informes!"
    )}`;
    window.open(url, "_blank");
  };

  return <div className="bg-white flex flex-col gap-32">Test c:</div>;
}
