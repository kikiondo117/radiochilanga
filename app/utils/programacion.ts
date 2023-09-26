import type { ProgramType } from "~/types/program";

export const days: any = {
  1: "lunes",
  2: "martes",
  3: "miercoles",
  4: "jueves",
  5: "viernes",
  6: "sabado",
  0: "domingo",
};

export const programas: ProgramType[] = [
  {
    id: 11,
    hora: "2:00 p.m - 2:30 p.m",
    nombre: "3 grandes en el cielo.",
    locutor: "Manuel Vera +52 55 8795 2622",
    image: "bg-radio1",
    bio: `Únete a nosotros en un viaje a través del tiempo y el cine mexicano en 3 grandes en el cielo. En este programa, rendimos homenaje a dos de las voces más icónicas de la Época de Oro del cine mexicano: Jorge Negrete y Pedro Infante.

    Cada semana, te llevaremos de vuelta a una época dorada de la cinematografía mexicana, donde estos dos titanes de la música y el cine dejaron su huella imborrable. Escucharás las canciones más entrañables y emotivas de Jorge Negrete, el ícono del charro cantor, y Pedro Infante, el inolvidable ídolo de México.
    
    Desde rancheras apasionadas hasta boleros románticos, nuestra selección musical te sumergirá en la riqueza y la autenticidad de la música mexicana que sigue siendo amada por generaciones. Además, te contaremos anécdotas y curiosidades sobre la vida y la carrera de estos dos artistas legendarios.
    
    No te pierdas 3 grandes en el cielo , donde la música de Jorge Negrete y Pedro Infante cobra vida una vez más, recordándonos por qué sus voces siguen siendo eternamente queridas en el corazón de México y más allá.
    
    ¡Sintoniza con nosotros para revivir la magia del cine y la música mexicana de antaño!
    
    `,
  },
  {
    id: 21,
    hora: "2:30 p.m - 3:00 p.m",
    nombre: "Música variada.",
    locutor: "Manuel Vera +52 55 8795 2622",
    image: "bg-radio2",
  },
  {
    id: 31,
    hora: "3:00 p.m - 4:00 p.m",
    nombre: "La Hora para Reflexionar.",
    locutor: "Manuel Vera +52 55 8795 2622",
    image: "bg-radio3",
    url: "https://www.facebook.com/profile.php?id=61550602422734",
  },
  {
    id: 41,
    hora: "4:00 p.m - 7:00 p.m",
    nombre: "Viejitas pero bonitas. Con la música de ayer, hoy y de siempre.",
    locutor: "Manuel Vera +52 55 8795 2622",
    image: "bg-radio4",
  },
];
export const Felix = {
  locutor: "Manuel Vera +52 55 8795 2622",
  lunes: [
    {
      hora: "2:00 p.m - 2:30 p.m",
      programa: "5 grandes en el cielo.",
    },
    {
      hora: "2:30 p.m - 3:00 p.m",
      programa: "Música variada.",
    },
    {
      hora: "3:00 p.m - 4:00 p.m",
      programa: "La Hora para Meditar.",
    },
    {
      hora: "4:00 p.m - 7:00 p.m",
      programa:
        "Viejitas pero bonitas. Con la música de ayer, hoy y de siempre.",
    },
  ],
  martes: [
    {
      hora: "2:00 p.m - 2:30 p.m",
      programa: "5 grandes en el cielo.",
    },
    {
      hora: "2:30 p.m - 3:00 p.m",
      programa: "Música variada.",
    },
    {
      hora: "3:00 p.m - 4:00 p.m",
      programa: "La Hora para Meditar.",
    },
    {
      hora: "4:00 p.m - 7:00 p.m",
      programa:
        "Viejitas pero bonitas. Con la música de ayer, hoy y de siempre.",
    },
  ],
  miercoles: [
    {
      hora: "2:00 p.m - 2:30 p.m",
      programa: "5 grandes en el cielo.",
    },
    {
      hora: "2:30 p.m - 3:00 p.m",
      programa: "Música variada.",
    },
    {
      hora: "3:00 p.m - 4:00 p.m",
      programa: "La Hora para Meditar.",
    },
    {
      hora: "4:00 p.m - 7:00 p.m",
      programa:
        "Viejitas pero bonitas. Con la música de ayer, hoy y de siempre.",
    },
  ],
  jueves: [
    {
      hora: "2:00 p.m - 2:30 p.m",
      programa: "5 grandes en el cielo.",
    },
    {
      hora: "2:30 p.m - 3:00 p.m",
      programa: "Música variada.",
    },
    {
      hora: "3:00 p.m - 4:00 p.m",
      programa: "La Hora para Meditar.",
    },
    {
      hora: "4:00 p.m - 7:00 p.m",
      programa:
        "Viejitas pero bonitas. Con la música de ayer, hoy y de siempre.",
    },
  ],
  viernes: [
    {
      hora: "2:00 p.m - 2:30 p.m",
      programa: "5 grandes en el cielo.",
    },
    {
      hora: "2:30 p.m - 3:00 p.m",
      programa: "Música variada.",
    },
    {
      hora: "3:00 p.m - 4:00 p.m",
      programa: "La Hora para Meditar.",
    },
    {
      hora: "4:00 p.m - 7:00 p.m",
      programa:
        "Viejitas pero bonitas. Con la música de ayer, hoy y de siempre.",
    },
  ],
  sabado: [],
  domingo: [],
};

// export const Isabel = {
//   locutor: "Isabel",
//   lunes: [
//     {
//       hora: "9:00 p.m - 10:00 p.m",
//       programa: "Noches de Café con Isabel",
//     },
//   ],
//   martes: [
//     {
//       hora: "9:00 p.m - 10:00 p.m",
//       programa: "Noches de Café con Isabel",
//     },
//   ],
//   miercoles: [
//     {
//       hora: "9:00 p.m - 10:00 p.m",
//       programa: "Noches de Café con Isabel",
//     },
//   ],
//   jueves: [
//     {
//       hora: "9:00 p.m - 10:00 p.m",
//       programa: "Noches de Café con Isabel",
//     },
//   ],
//   viernes: [
//     {
//       hora: "9:00 p.m - 10:00 p.m",
//       programa: "Noches de Café con Isabel",
//     },
//   ],
//   sabado: [],
//   domingo: [],
// };

// export const Rubio = {
//   locutor: "Speaker Motivacional y Coach de vida Rubio",
//   lunes: [
//     {
//       hora: "8:00 a.m - 10:00 a.m",
//       programa: "Inspiración para la vida",
//     },
//   ],
//   martes: [
//     {
//       hora: "8:00 a.m - 10:00 a.m",
//       programa: "Inspiración para la vida",
//     },
//   ],
//   miercoles: [
//     {
//       hora: "8:00 a.m - 10:00 a.m",
//       programa: "Inspiración para la vida",
//     },
//   ],
//   jueves: [
//     {
//       hora: "8:00 a.m - 10:00 a.m",
//       programa: "Inspiración para la vida",
//     },
//   ],
//   viernes: [
//     {
//       hora: "8:00 a.m - 10:00 a.m",
//       programa: "Inspiración para la vida",
//     },
//   ],
//   sabado: [],
//   domingo: [],
// };
