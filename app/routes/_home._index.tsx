import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import { useState } from "react";
// * Assets
import * as programming from "~/utils/programacion";
// * Components
import moment from "moment";
// * Custom Components
import { Player } from "~/components/Player";

export default function Index() {
  const [day] = useState(() => {
    const currentDay = moment().day();
    const dia = programming.days[currentDay];
    return dia;
  });

  return (
    <>
      <main
        id="play"
        className={`
         col-start-1 col-end-13
        w-full bg-fixed h-screen bg-main bg-fi bg-center bg-cover object-contain flex flex-col justify-center items-center
        md:bg-local
      `}
      >
        <Player />
      </main>

      <section className=" col-start-1 col-end-13 mb-4 md:my-0 ">
        <div className="flex flex-col justify-center  md:flex-row items-center">
          <div className="h-full w-full">
            <img
              className="h-full w-full mb-8 max-w-4xl"
              style={{
                clipPath:
                  "polygon(15% 0%, 100% 0%, 91.3% 24.8%, 67.2% 99.5%, 85.2% 100%, 15% 100%, 0% 85%, 0% 15%)",
              }}
              src="/img/cabina.jpeg"
              alt=""
            />
          </div>

          {programming.Schedule.map((scheduleByLocutor: any) => {
            return (
              <div
                key={scheduleByLocutor.locutor}
                className="flex flex-col items-center px-4 md:px-0 "
              >
                <p className="text-white self-start md:self-start md:mt-8">
                  {scheduleByLocutor.locutor} 🎤👨🏻‍💼
                </p>
                <div className="self-start mx-4 md:self-start">
                  {scheduleByLocutor[day].map((programming: any) => {
                    return (
                      <ul key={programming.programa}>
                        <li className="text-yellow-300 ">
                          {programming.programa}
                        </li>
                        <li className="time-program">{programming.hora}</li>
                      </ul>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Radio Chilanga" },
    { name: "description", content: "Radio Mexican" },
  ];
};
