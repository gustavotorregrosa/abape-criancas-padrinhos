import { Document } from 'mongoose';

export interface Crianca extends Document {
    
    readonly id: string;
    nome: string;
    email: string;
    sobre: string;
    
}