import type { ApiInstrumento, Instrumento, RankingData } from "../types/InstrumentoFinanciero";

const RANKING_ENDPOINT = "http://localhost:3000/instrumentos-financieros";

function mapInstrumento(item: ApiInstrumento): Instrumento {
  return {
    id: item.id_instrumento.toString(),
    nombre: item.nombre_instrumento || "Sin nombre",
    rendimiento: `${item.rendimiento}%`,
    riesgo: item.riesgo,
  };
}

function ordenarPorRendimiento(arr: Instrumento[]): Instrumento[] {
  return arr
    .sort((a, b) => parseFloat(b.rendimiento) - parseFloat(a.rendimiento))
    .slice(0, 5);
}

export async function getRankingInstrumentos(): Promise<RankingData> {
  const response = await fetch(RANKING_ENDPOINT);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.message || "Error al comunicarse con el servidor"
    );
  }

  const result = await response.json();
  const instrumentos: ApiInstrumento[] = result.data || result;

  const tradicionales: Instrumento[] = [];
  const noTradicionales: Instrumento[] = [];

  instrumentos.forEach((item) => {
    const instrumento = mapInstrumento(item);
    if (item.tipo_instrumento === "Tradicional") {
      tradicionales.push(instrumento);
    } else {
      noTradicionales.push(instrumento);
    }
  });

  return {
    tradicionales: ordenarPorRendimiento(tradicionales),
    noTradicionales: ordenarPorRendimiento(noTradicionales),
  };
}
