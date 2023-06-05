import { Request } from "express";

export interface Aula {
  codigo: string;
  disciplina: string;
  professor: string;
  predio: string;
  andar: string;
  sala: string;
  periodo: string;
  sia: string;
}

export interface AulaInDataBase extends Aula {
  id: string;
}

interface AuthenticatedRequest extends Request {
  user?: any;
}
