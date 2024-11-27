import { popularFields } from './popularFields';

export const torneos = [
  {
    id: 1,
    nombre: "Copa Primavera",
    lugar: popularFields[0].nombre,
    tipo: "Competitivo",
    categoria: "Masculino",
    equiposInscritos: "6/8",
    fechaInicio: "2025-04-15",
    premio: "$10,000"
  },
  {
    id: 2,
    nombre: "Liga Femenil Regia",
    lugar: popularFields[2].nombre,
    tipo: "Competitivo",
    categoria: "Femenino",
    equiposInscritos: "4/10",
    fechaInicio: "2025-05-01",
    premio: "Trofeo y medallas"
  },
  {
    id: 3,
    nombre: "Torneo Amistoso Universitario",
    lugar: popularFields[3].nombre,
    tipo: "Amistoso",
    categoria: "Mixto",
    equiposInscritos: "8/16",
    fechaInicio: "2025-03-20",
    premio: "Reconocimientos"
  },
  {
    id: 4,
    nombre: "Copa Empresarial",
    lugar: popularFields[1].nombre,
    tipo: "Competitivo",
    categoria: "Masculino",
    equiposInscritos: "10/12",
    fechaInicio: "2025-06-05",
    premio: "$15,000 y trofeo"
  },
  {
    id: 5,
    nombre: "Torneo Relámpago Nocturno",
    lugar: popularFields[4].nombre,
    tipo: "Amistoso",
    categoria: "Mixto",
    equiposInscritos: "5/8",
    fechaInicio: "2025-07-10",
    premio: "Cena para el equipo ganador"
  },
  {
    id: 6,
    nombre: "Liga Juvenil de Verano",
    lugar: popularFields[0].nombre,
    tipo: "Competitivo",
    categoria: "Masculino",
    equiposInscritos: "7/12",
    fechaInicio: "2025-07-01",
    premio: "Becas deportivas"
  }
];

