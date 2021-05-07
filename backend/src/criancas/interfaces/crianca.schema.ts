import * as mongoose from "mongoose";

export const CriancaSchema = new mongoose.Schema({
    nome: {type: String},
    email: {type: String, unique: true},
    sobre: {type: String}
}, {timestamps: true, collection: 'criancas'});