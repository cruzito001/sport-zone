import { torneos } from './torneos';

const equipos = [
  "Atlético San Pedro",
  "Rayados Unidos",
  "Tigres del Valle",
  "Real Fundidora FC",
  "Deportivo La Silla",
  "Cerro de la Silla United",
  "Fuerza Regia FC",
  "Industriales de Santa Catarina",
  "Leones de Cumbres",
  "Águilas del Tec",
  "Guerreros del Huajuco",
  "Lobos de García",
  "Halcones de Apodaca",
  "Toros de Guadalupe",
  "Potros de Escobedo",
  "Mineros de San Nicolás"
];

export const rankingData = {
  mejoresEquipos: torneos.map((torneo, index) => ({
    nombre: torneo.nombre,
    top3: [
      { posicion: 1, equipo: equipos[index * 3 % equipos.length], puntos: Math.floor(Math.random() * 10) + 25 },
      { posicion: 2, equipo: equipos[(index * 3 + 1) % equipos.length], puntos: Math.floor(Math.random() * 10) + 20 },
      { posicion: 3, equipo: equipos[(index * 3 + 2) % equipos.length], puntos: Math.floor(Math.random() * 10) + 15 }
    ]
  })),
  goleadores: [
    { posicion: 1, nombre: "Carlos Gómez", equipo: "Atlético San Pedro", goles: 28 },
    { posicion: 2, nombre: "Ana Martínez", equipo: "Rayados Unidos", goles: 25 },
    { posicion: 3, nombre: "Javier López", equipo: "Tigres del Valle", goles: 23 },
    { posicion: 4, nombre: "Sofía Hernández", equipo: "Real Fundidora FC", goles: 22 },
    { posicion: 5, nombre: "Miguel Ángel Rodríguez", equipo: "Deportivo La Silla", goles: 20 },
    { posicion: 6, nombre: "Laura Sánchez", equipo: "Cerro de la Silla United", goles: 19 },
    { posicion: 7, nombre: "Roberto Torres", equipo: "Fuerza Regia FC", goles: 18 },
    { posicion: 8, nombre: "Isabel Vargas", equipo: "Industriales de Santa Catarina", goles: 17 },
    { posicion: 9, nombre: "Fernando Ruiz", equipo: "Leones de Cumbres", goles: 16 },
    { posicion: 10, nombre: "Patricia Flores", equipo: "Águilas del Tec", goles: 15 }
  ]
};

