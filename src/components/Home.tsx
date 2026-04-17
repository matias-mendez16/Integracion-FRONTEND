import {RankingInstrumentosFinancieros} from "./RankingInstrumentosFinancieros"
import TestInversor from "./TestInversor"
import { CardList } from "./CardList";

export function Home() {
    return (
        <div>
            <RankingInstrumentosFinancieros />
            <CardList/>
            <TestInversor />
        </div>
    )
}

