import * as mongoose from "mongoose";

export const ApadrinhamentoSchema = new mongoose.Schema({
    padrinho: {type: String},
    crianca: {type: String},
}, {timestamps: true, collection: 'apadrinhamentos'});