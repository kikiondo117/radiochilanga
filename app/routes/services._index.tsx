import { ServiceCard } from "~/components/ServiceCard/ServiceCard";
import { WhatsAppButton } from "~/components/WhatsAppButton/WhatsAppButtonV2";

export default function Services() {
  const style = {
    backgroundImage: `radial-gradient(100% 100% at -40% 130%, rgba(47, 194, 93, 0.6) 0, #fcfdfd 100%), linear-gradient(180deg, rgba(245, 245, 245, 0) 0, #edf6ff 67.19%)`,
  };

  const handleClick = () => {
    const url = `https://api.whatsapp.com/send?phone=+523122709176&text=${encodeURIComponent(
      "¡Quiero informes!"
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="bg-white flex flex-col gap-32">
      <main className="h-[500px] flex" style={style}>
        <div className="flex container mx-auto p-4 md:p-0">
          <div className=" flex flex-col justify-center gap-6">
            <h1 className="text-5xl font-bold">
              Crea tu propia radio en linea.
            </h1>
            <p className="m-0 text-xl">
              Contrata tu radio en línea en solo unos minutos.
            </p>

            <button
              onClick={handleClick}
              className="w-fit bg-blue-600 p-4 rounded-md uppercase text-white font-bold"
            >
              Comenzar ahora
            </button>
            <span className="text-bold">
              o{" "}
              <button onClick={handleClick} className="underline">
                contacto de ventas
              </button>
            </span>
          </div>
          <div className="hidden  md:flex md:flex-1 justify-center items-center">
            <img
              className="w-full h-full object-contain"
              src="https://dreamaudio.com.ph/cdn/shop/products/product_detail_x2_desktop_U-87-Ai-mt-Studio-Set_Neumann-Studio-Microphone_M.png?v=1580539775"
              alt="microphone"
            />
          </div>
        </div>
      </main>

      {/**============================================
       *               Info Section
       *=============================================*/}
      <section className="container mx-auto flex flex-col gap-20">
        <h2 className="text-center text-4xl md:text-5xl font-bold">
          La mejor plataforma para <br />
          crear una radio en línea
        </h2>

        <div className="flex gap-4 flex-wrap p-4 md:p-0">
          <div className="flex-1 p-4 border-[1px] border-solid border-gray-300 rounded-md">
            <p className="font-bold text-2xl">Radio en línea</p>
            <span>
              Transmite en vivo o deja tu radio en piloto automático a través de
              Auto DJ.
            </span>
          </div>

          <div className="flex-1 p-4 border-[1px] border-solid border-gray-300 rounded-md">
            <p className="font-bold text-2xl">Recursos web</p>
            <span>
              Transmite en vivo o deja tu radio en piloto automático a través de
              Auto DJ.
            </span>
          </div>

          <div className="flex-1 p-4 border-[1px] border-solid border-gray-300 rounded-md">
            <p className="font-bold text-2xl">Aplicaciones y Skill</p>
            <span>
              Transmite en vivo o deja tu radio en piloto automático a través de
              Auto DJ.
            </span>
          </div>
        </div>
      </section>

      {/**============================================
       *               Planes Section
       *=============================================*/}
      <section className="container mx-auto flex flex-col gap-20">
        <h2 className="text-5xl rounded-md text-center py-8 font-semibold px-4">
          Planes
        </h2>

        <div className="w-full flex gap-4 p-4 md:p-4 flex-wrap">
          <ServiceCard price={249} name="Basico">
            <li>
              🌐 Una página de internet básica para poder transmitir tus
              programas de radio, música y anuncios.
            </li>
            <li>🎧 Servicio de Auto DJ.</li>
            <li>🎶 Espacio para música de 12 GB.</li>
            <li>
              👥
              <strong> 120</strong> radioescuchas simultáneos.
            </li>
            <li>
              📖 Una guía detallada para ayudarte a comenzar a transmitir.
            </li>
            <li>
              💾 Ayuda con la descarga de música de 10 artistas que tú elijas.
            </li>
            <li>📡 128 Kbps Streaming.</li>
            <li>🛠️ Soporte.</li>
          </ServiceCard>

          <ServiceCard black price={549} name="Intermedio">
            <li>🌐 Una página de internet semi-personalizada.</li>
            <li>🎧 Servicio de Auto DJ.</li>
            <li>🎶 Espacio para música de 50 GB</li>
            <li>
              👥
              <strong> 8,000</strong> radioescuchas simultáneos.
            </li>
            <li>
              📖 Una guía detallada para ayudarte a comenzar a transmitir.
            </li>
            <li>
              💾 Ayuda con la descarga de música de 20 artistas que tú elijas.
            </li>
            <li>📡 192 Kbps Streaming.</li>
            <li>🛠️ Soporte.</li>
          </ServiceCard>

          <ServiceCard price={859} name="Experimentado">
            <li>🌐 Una página de internet personalizada</li>
            <li>🖥️ Nombre de dominio personalizado.</li>
            <li>🎧 Servicio de Auto DJ.</li>
            <li>🎶 Espacio para música ilimitado</li>
            <li>👥 Ilimitados radioescuchas simultáneos</li>
            <li>📖 Una guía detallada para ayudarte a comenzar a transmitir</li>
            <li>
              💾 Ayuda con la descarga de música de los artistas que tú elijas
            </li>
            <li>📡 320 Kbps Streaming</li>
            <li>🛠️ Soporte</li>
          </ServiceCard>
        </div>
      </section>

      {/**============================================
       *               Customer Section
       *=============================================*/}
      <section className="container mx-auto flex flex-col gap-20">
        <h2 className="text-4xl md:text-5xl text-center py-8 font-semibold bg-white border-solid px-4">
          Nuestros clientes más activos
        </h2>

        <div className="flex flex-wrap justify-around">
          <img
            className="w-20 h-20 md:w-40 md:h-40 rounded-full"
            src="https://radiolobo.netlify.app/img/lobo.jpeg"
            alt="radio lobo"
          />

          <img
            className="w-20 h-20 md:w-40 md:h-40 rounded-full"
            src="https://jesus-en-ti.netlify.app/img/jesus.jpeg"
            alt="radio lobo"
          />

          <img
            className="w-20 h-20 md:w-40 md:h-40 rounded-full"
            src="https://radio-hills.netlify.app/img/logo.jpeg"
            alt="radio lobo"
          />

          <img
            className="w-20 h-20 md:w-40 md:h-40 rounded-full"
            src="https://radio-explosiva.netlify.app/img/logo.jpeg"
            alt="radio lobo"
          />
        </div>
      </section>
      {/*=============== END OF SECTION ==============*/}

      {/**============================================
       *               Contact Section
       *=============================================*/}
      <section className="container mx-auto flex flex-col gap-20 mb-24">
        <div className="flex flex-col items-center gap-4 mt-8">
          <h2 className="text-3xl md:text-5xl rounded-md text-center py-8 font-semibold  px-4">
            ¿Interezad@?
          </h2>

          <div>
            <WhatsAppButton phoneNumber="+523122709176" />
          </div>
        </div>
      </section>
      {/*=============== END OF SECTION ==============*/}
    </div>
  );
}
