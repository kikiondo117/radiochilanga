export function TablePlans() {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th className="text-lg md:text-2xl">Servicios</th>
            <th className="text-lg md:text-2xl text-secondary">Basico</th>
            <th className="text-lg md:text-2xl text-secondary">Intermedio</th>
            <th className="text-lg md:text-2xl text-secondary">
              Experimentado
            </th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <td>Pagína Web.</td>
            <td>Pagína web basica</td>
            <td>Pagína web semi personalizada </td>
            <td>Página web personalizada</td>
          </tr>
          {/* row 2 */}
          <tr>
            <td>Servicio de Auto DJ.</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>
          {/* row 3 */}
          <tr>
            <td>Bandwidth (Trasmisión en vivo).</td>
            <td>20 GB Bandwidth</td>
            <td>Ilimitada Bandwidth</td>
            <td>Ilimitada Bandwidth</td>
          </tr>
          <tr>
            <td>Espacio para musica.</td>
            <td>12 GB.</td>
            <td>20 GB.</td>
            <td>Ilimitado GB.</td>
          </tr>

          <tr>
            <td>Radioescuchas simultáneos.</td>
            <td>120 radioescuchas simultáneos</td>
            <td>8,000 radioescuchas simultáneos</td>
            <td>Ilimitados radioescuchas</td>
          </tr>

          <tr>
            <td>Una guía para trasmitir.</td>
            <td>✅</td>
            <td>✅</td>
            <td>✅</td>
          </tr>

          <tr>
            <td>Ayuda con la descarga de música.</td>
            <td>10 artistas que tú elijas.</td>
            <td>20 artistas que tú elijas.</td>
            <td>La musica que tu elijas sin limite</td>
          </tr>

          <tr>
            <td>Kbps Streaming. (Calidad de trasmisión)</td>
            <td>128 Kbps Streaming.</td>
            <td>192 Kbps Streaming.</td>
            <td>320 Kbps Streaming.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
