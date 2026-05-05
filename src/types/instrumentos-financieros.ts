export enum Riesgo {
    BAJO = "Bajo",
    MEDIO = "Medio",
    ALTO = "Alto"
}

export enum TipoInstrumento {
    TRADICIONAL = "Tradicional",
    NO_TRADICIONAL = "No Tradicional"
}

export interface InstrumentoFinanciero {
    id_instrumento: number;
    nombre_instrumento: string;
    rendimiento: number;
    riesgo: Riesgo;
    precio_instrumento: number;
    tipo_instrumento: TipoInstrumento;
    logo_url: string;
}

export interface InstrumentosFinancierosResponse {
    statusCode: number;
    message: string | string[];
    data?: InstrumentoFinanciero | InstrumentoFinanciero[]
}

export interface CreateInstrumentoFinanciero extends Omit<InstrumentoFinanciero, 'id_instrumento'> {}
export interface UpdateInstrumentoFinancieros extends Partial<CreateInstrumentoFinanciero> {}