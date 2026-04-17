import { useState, useEffect } from "react";

export type InstrumentoFinanciero = {
  id: string;
  nombre: string;
  rendimiento: string;
  riesgo: "Bajo" | "Medio" | "Alto";
};

export type RankingData = {
  tradicionales: InstrumentoFinanciero[];
  noTradicionales: InstrumentoFinanciero[];
};

type ApiInstrumento = {
  id_instrumento: number;
  nombre_instrumento: string;
  rendimiento: number;
  riesgo: "Bajo" | "Medio" | "Alto";
  precio_instrumento: string;
  tipo_instrumento: string;
};

export const useRankingInstrumentos = () => {
  const [data, setData] = useState<RankingData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const fetchRanking = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          "http://localhost:3000/instrumentos-financieros"
        );

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(
            errorData.message || "Error al comunicarse con el servidor"
          );
        }

        const result = await response.json();

        if (!cancelled) {
          const instrumentos: ApiInstrumento[] = result.data || result;

          const tradicionales: InstrumentoFinanciero[] = [];
          const noTradicionales: InstrumentoFinanciero[] = [];

          instrumentos.forEach((item) => {
            const instrumento: InstrumentoFinanciero = {
              id: item.id_instrumento.toString(),
              nombre: item.nombre_instrumento || "Sin nombre",
              rendimiento: `${item.rendimiento}%`,
              riesgo: item.riesgo,
            };

            if (item.tipo_instrumento === "Tradicional") {
              tradicionales.push(instrumento);
            } else {
              noTradicionales.push(instrumento);
            }
          });

          const ordenar = (arr: InstrumentoFinanciero[]) => {
            return arr
              .sort(
                (primero, segundo) =>
                  parseFloat(segundo.rendimiento) -
                  parseFloat(primero.rendimiento)
              )
              .slice(0, 5);
          };

          setData({
            tradicionales: ordenar(tradicionales),
            noTradicionales: ordenar(noTradicionales),
          });
        }
      } catch (err: any) {
        if (!cancelled) {
          console.error(
            "Error al hacer fetch al ranking de instrumentos financieros:",
            err
          );
          setError(err.message || "Error desconocido al cargar los datos.");
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    };

    fetchRanking();

    return () => {
      cancelled = true;
    };
  }, []);

  return { data, isLoading, error };
};