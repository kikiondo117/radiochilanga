import { ServiceCard } from "~/components/ServiceCard/ServiceCard";
import { WhatsAppButton } from "~/components/WhatsAppButton/WhatsAppButtonV2";

export default function Services() {
  return (
    <main className="min-h-screen container mx-auto">
      <h1 className="text-4xl text-center py-8 font-semibold">Planes 📻</h1>

      <section className="w-full flex gap-4 md:p-4 flex-wrap">
        <ServiceCard price={349} name="Basico">
          <li>
            🌐 Una página de internet básica para poder transmitir tus programas
            de radio, música y anuncios.
          </li>
          <li>🎧 Servicio de Auto DJ.</li>
          <li>🎶 Espacio para música de 12 GB.</li>
          <li>
            👥
            <strong> 120</strong> radioescuchas simultáneos.
          </li>
          <li>📖 Una guía detallada para ayudarte a comenzar a transmitir.</li>
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
          <li>📖 Una guía detallada para ayudarte a comenzar a transmitir.</li>
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
      </section>

      <section className="flex flex-col items-center gap-4 mt-4">
        <h1 className="text-6xl rounded text-center py-8 font-semibold bg-secondary text-white px-4">
          ¿Interezad@? 🙋
        </h1>

        <div>
          <WhatsAppButton phoneNumber="+523122709176" />
        </div>
      </section>
    </main>
  );
}
