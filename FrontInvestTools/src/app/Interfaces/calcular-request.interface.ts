import { Aporte } from "./aporte.interface";
import { Juros } from "./juros.interface";
import { Periodo } from "./periodo.interface";

export interface CalcularRequest{
Aportes: Aporte[];
Periodo: Periodo | undefined;
Juros: Juros | undefined;
}