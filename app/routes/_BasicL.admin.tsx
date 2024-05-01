import { useEffect } from "react";

export default function Admin() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cast1.asurahosting.com/system/streaminfo.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="container mx-auto min-h-[70vh] flex justify-center items-center px-4 md:p-0 box-border">
      <main className="">
        <div className="stats stats-vertical md:stats-horizontal shadow box-border">
          <div className="stat">
            <div className="stat-title">Radioescuchas</div>
            <div
              className="stat-value text-primary cc_streaminfo"
              data-type="listeners"
              data-username="radiochi"
            ></div>
            <div className="stat-desc">Información en vivo</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Maximos Radioescuchas</div>
            <div
              className="stat-value text-secondary cc_streaminfo"
              data-type="maxlisteners"
              data-username="radiochi"
            ></div>
            <div className="stat-desc">disponibles en tu plan actual</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <div className="avatar online">
                <img
                  alt=""
                  className="w-16 rounded-full cc_streaminfo"
                  data-type="trackimageurl"
                  data-username="radiochi"
                ></img>
              </div>
            </div>

            <div
              className="stat-title cc_streaminfo"
              data-type="trackartist"
              data-username="radiochi"
            ></div>
            <div className="stat-desc text-secondary">
              www.radiochilanga.com
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
