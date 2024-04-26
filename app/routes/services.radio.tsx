import { WhatsAppButton } from "~/components/WhatsAppButton/WhatsAppButtonV2";
import { Card } from "~/components/molecules/Card/Card";
import { Fqa } from "~/components/organisms/Fqa/Fqa";
import { Link } from "@remix-run/react";
import { Plans } from "~/components/organisms/Plans/Plans";

export default function RadioService() {
  const style = {
    backgroundImage: `radial-gradient(100% 100% at -40% 130%, rgba(47, 404, 403, 0.6) 0, #fcfdfd 100%), linear-gradient(180deg, rgba(245, 245, 245, 0) 0, #edf6ff 67.19%)`,
  };

  const handleClick = () => {
    const url = `https://api.whatsapp.com/send?phone=+523122709176&text=${encodeURIComponent(
      "¡Quiero informes!"
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="relative bg-white flex flex-col gap-32">
      <Link to="/services" className="absolute left-4 top-6 underline">
        Regresar
      </Link>

      <main className="h-[500px] flex" style={style}>
        <div className="flex container mx-auto p-4 md:p-0">
          <div className=" flex flex-col justify-center gap-6">
            <h1 className="text-5xl font-bold">
              Crea tu propia radio en linea.
            </h1>
            <p className="m-0 text-xl">
              Contrata tu radio en línea en solo unos minutos.
            </p>

            <Link
              to={"/services/plans"}
              className="w-fit bg-blue-600 p-4 rounded-md uppercase text-white font-bold"
            >
              Comenzar ahora
            </Link>
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

        <div className="flex justify-around gap-4 flex-wrap p-4 md:p-0">
          <Card
            img="https://d1024mmf9dgym2.cloudfront.net/site/assets/images/index/resources/web-radio.svg?_t=0eacee8c5d"
            alt="Radio en linea"
            title="Radio en línea"
            text="Transmite en vivo o deja tu radio en piloto automático a través de Auto DJ."
          />

          <Card
            img="https://d1024mmf9dgym2.cloudfront.net/site/assets/images/index/resources/cover.png?_t=0eacee8c5d"
            alt="Recursos web"
            title="Recursos web"
            text="Se puede escuchar en cualquier dispositivo con acceso a tu pagina web."
          />

          <Card
            img="https://d1024mmf9dgym2.cloudfront.net/site/assets/images/index/resources/audio-library.svg?_t=0eacee8c5d"
            alt="Aplicaciones y Skill"
            title="Aplicaciones y Skill"
            text="!Solo necesitas de una aplicación para trasmitir!"
          />
        </div>
      </section>

      {/**============================================
       *               Planes Section
       *=============================================*/}
      <section className="bg-[#F5F5F5] py-8 flex flex-col gap-20 w-full">
        <Plans />
      </section>

      {/**============================================
       *               FQA Section
       *=============================================*/}
      <section className="flex flex-col items-center gap-4 container mx-auto px-4">
        <Fqa />
        <Link to="/services/fqa" className="underline text-blue-600 text-xl">
          Más preguntas
        </Link>
      </section>
      {/*=============== END OF SECTION ==============*/}

      {/**============================================
       *               Customer Section
       *=============================================*/}
      <section className="container mx-auto flex flex-col gap-20">
        <h2 className="text-4xl md:text-5xl text-center py-8 font-semibold bg-white border-solid px-4">
          Nuestros clientes más activos
        </h2>

        <div className="flex flex-wrap justify-around">
          <div className="avatar online">
            <div className="w-24 md:w-40 rounded-full">
              <img
                src="https://radiolobo.netlify.app/img/lobo.jpeg"
                alt="radio lobo"
              />
            </div>
          </div>

          <div className="avatar online">
            <div className="w-24 md:w-40 rounded-full">
              <img
                src="https://jesus-en-ti.netlify.app/img/jesus.jpeg"
                alt="jesus en ti confio"
              />
            </div>
          </div>

          <div className="avatar online">
            <div className="w-24 md:w-40 rounded-full">
              <img
                src="https://radio-hills.netlify.app/img/logo.jpeg"
                alt="radio hills"
              />
            </div>
          </div>

          <div className="avatar online">
            <div className="w-24 md:w-40 rounded-full">
              <img
                src="https://radio-explosiva.netlify.app/img/logo.jpeg"
                alt="radio explosiva"
              />
            </div>
          </div>
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
