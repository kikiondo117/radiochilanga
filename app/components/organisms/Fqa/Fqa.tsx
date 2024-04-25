export function Fqa({ children }: { children?: any }) {
  return (
    <div className="container mx-auto flex flex-col gap-4 ">
      <h2 className="text-4xl md:text-5xl text-center pb-8 font-semibold  border-solid px-4">
        Preguntas frecuentes
      </h2>

      <div className="collapse collapse-plus border-2 border-solid border-gray-200">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          ¿Qué necesito para trasmitir a mi radio online personal?
        </div>
        <ul className="collapse-content">
          <li className="ml-4 list-disc">
            Una computadora con acceso a internet o un teléfono celular Android.
          </li>
          <li className="ml-4 list-disc">
            Elegir y hacer el pago del servicio que más se adapte a tus
            necesidades.
          </li>
          <li className="ml-4 list-disc">
            Una clave única proporcionada una vez adquieras el servicio.{" "}
          </li>
        </ul>
      </div>

      <div className="collapse collapse-plus border-2 border-solid border-gray-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          ¿Es un pago único?
        </div>
        <div className="collapse-content">
          <p>
            No, es una <strong>pago mensual</strong> para mantener el servicio
            de trasmisión activa.
          </p>
        </div>
      </div>

      <div className="collapse collapse-plus border-2 border-solid border-gray-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          ¿En cuánto tiempo me entregan mi página web y las credenciales para
          trasmitir?
        </div>
        <div className="collapse-content">
          <p>
            Para el plan básico tenemos un tiempo aproximado de{" "}
            <strong>12 horas</strong>, para el plan intermedio dependiendo la
            personalización puede llegar hasta 24 horas.
          </p>
        </div>
      </div>

      <div className="collapse collapse-plus border-2 border-solid border-gray-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          ¿Cómo puedo contratar?
        </div>
        <div className="collapse-content">
          <p>
            De momento todo se está manejando a través de WhatsApp, por ese
            medio puedes preguntar dudas más específicas y pedir las opciones de
            pago.
          </p>
        </div>
      </div>

      <div className="collapse collapse-plus border-2 border-solid border-gray-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          ¿Puedo usar mi dominio?
        </div>
        <div className="collapse-content">
          <p>
            Si, si ya cuentas con un acceso a tu dominio podemos ayudarte con la
            configuración.
          </p>
        </div>
      </div>

      {children}
    </div>
  );
}
