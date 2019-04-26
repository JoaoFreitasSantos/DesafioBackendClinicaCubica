import { Horario } from "./Horario";
import { TipoRegraEnum } from "./TipoRegraEnum";

export class Regra {
    id: number
    data: string
    dia: Date[]
    tipoRegra: TipoRegraEnum
    horarios: Horario[]
}