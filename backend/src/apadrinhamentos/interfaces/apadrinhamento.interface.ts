import { Document } from 'mongoose';

export interface Apadrinhamento extends Document {
    
    readonly id: string;
    padrinho: string;
    crianca: string;
    
}