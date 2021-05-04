import { Document } from 'mongoose';

export interface Motorista extends Document {
    
    readonly id: string;
    nome: string;
    email: string;
    endereco: string;
    
}