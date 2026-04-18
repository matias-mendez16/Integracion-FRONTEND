export type Instrumento = {
  id: string;
  nombre: string;
  rendimiento: string;
  riesgo: "Bajo" | "Medio" | "Alto";
};

export type RankingData = {
  tradicionales: Instrumento[];
  noTradicionales: Instrumento[];
};

export type ApiInstrumento = {
  id_instrumento: number;
  nombre_instrumento: string;
  rendimiento: number;
  riesgo: "Bajo" | "Medio" | "Alto";
  precio_instrumento: string;
  tipo_instrumento: string;
};
