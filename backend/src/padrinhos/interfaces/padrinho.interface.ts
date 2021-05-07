import { Document } from 'mongoose';

export interface Padrinho extends Document {
    
    readonly id: string;
    nome: string;
    email: string;
    sobre: string;
    
}