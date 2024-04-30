import { ServiceCard } from "~/components/molecules/ServiceCard/ServiceCard";

export function Plans() {
  return (
    <div className="container mx-auto ">
      <h2 className="text-5xl rounded-md text-center py-8 font-semibold px-4">
        Planes
      </h2>

      <div className="w-full flex gap-4 p-4 md:p-4 flex-wrap">
        <ServiceCard price={249} name="Basico">
          <li>
            🌐 Una página de internet básica para poder transmitir tus programas
            de radio, música y anuncios.
          </li>
          <li>🎧 Servicio de Auto DJ.</li>
          <li>🌏 Ilimitado Bandwidth.</li>
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
          <li>🌏 20 GB Bandwidth.</li>
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
          <li>🌏 Ilimitado Bandwidth.</li>
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
    </div>
  );
}
