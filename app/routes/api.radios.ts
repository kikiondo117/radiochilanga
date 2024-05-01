import { json } from "@remix-run/node";

export async function loader() {
  const radios = [
    {
      show: true,
      starts: 5,
      name: "radiochilanga",
      img: "https://www.radiochilanga.com/img/logo/logo.webp",
      audioLink: "https://cast1.my-control-panel.com/proxy/radiochi/stream",
    },
    {
      starts: 5,
      show: true,
      name: "La radio explosiva",
      img: "https://radio-explosiva.netlify.app/img/logo.jpeg",
      audioLink: "https://cast6.my-control-panel.com/proxy/radioch5/stream",
    },
    {
      starts: 4,
      show: true,
      name: "Radio Lobo",
      img: "https://radiolobo.netlify.app/img/lobo.jpeg",
      audioLink: "https://cast6.my-control-panel.com/proxy/radioch2/stream",
    },
    {
      starts: 5,
      show: true,
      name: "Jesús en ti confío",
      img: "https://jesus-en-ti.netlify.app/img/jesus.jpeg",
      audioLink: "https://cast6.my-control-panel.com/proxy/radioch4/stream",
    },
    {
      starts: 4,
      show: true,
      name: "Radio Hills",
      img: "https://radio-hills.netlify.app/img/logo.jpeg",
      audioLink: "https://cast6.my-control-panel.com/proxy/radioch3/stream",
    },
    {
      starts: 3,
      show: true,
      name: "Lux Radio",
      img: "https://luxradio.netlify.app/img/logo.jpeg",
      audioLink: "https://cast5.my-control-panel.com/proxy/radioch6/stream",
    },
  ];

  return json(radios);
}
