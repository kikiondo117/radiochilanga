import { ServiceCard } from "~/components/ServiceCard/ServiceCard";

export default function Services() {
  return (
    <main className="min-h-screen container mx-auto">
      <h1 className="text-4xl text-center py-8 font-semibold">Planes 📻</h1>

      <section className="w-full flex gap-4 md:p-4 flex-wrap">
        <ServiceCard price={200} name="Basico - Promoción">
          <li>
            Una pagina de internet para poder trasmitir ahí tus programas de
            radio, musica y anuncios.
          </li>
          <li>Servicio de Auto DJ</li>
          <li>Espacio para musica de 12gb</li>
          <li>Una guía detallada para ayudarte a comenzar a transmitir</li>
          <li>120 Radio escuchas simultaneos</li>
          <li>128 Kbps Streaming</li>
        </ServiceCard>

        <ServiceCard black price={500} name="Intermedio">
          <li>
            Una pagina de internet personalizada aparte del nombre de domino.
          </li>
          <li>Servicio de Auto DJ</li>
          <li>Espacio para musica de 50gb</li>
          <li>Una guía detallada para ayudarte a comenzar a transmitir</li>
          <li>Soporte</li>
          <li>Ilimitados Radio escuchas</li>
          <li>192 Kbps Streaming</li>
        </ServiceCard>

        <ServiceCard name="Personalizado">
          <li>
            Una pagina de internet personalizada aparte del nombre de domino.
          </li>
          <li>Servicio de Auto DJ</li>
          <li>Espacio para musica ilimitado</li>
          <li>Una guía detallada para ayudarte a comenzar a transmitir</li>
          <li>Soporte</li>
          <li>320 Kbps streaming</li>
          <li>Nos adaptamos a sus necesidades.</li>
        </ServiceCard>
      </section>
    </main>
  );
}
