import { Comentarios } from './comentarios';
export interface Comentarios {
date: Date;
text: string;
userName: string;
}

export type Comentarios = Array<Comentarios>;

