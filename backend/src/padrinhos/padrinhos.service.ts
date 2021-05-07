import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IAtualizaPadrinho } from './dto/atualiza-padrinho.dto';
import { ICriaPadrinho } from './dto/cria-padrinho.dto';
import { Padrinho } from './interfaces/padrinho.interface';

@Injectable()
export class PadrinhosService {

    constructor(@InjectModel('Padrinho') private readonly padrinhoModel: Model<Padrinho>){}

    listaPadrinhos = async (): Promise<Array<Padrinho>> => {
        return await this.padrinhoModel.find().exec()
    }

    deletaPadrinho = async (_id): Promise<Padrinho> => {

        const padrinho = await this.padrinhoModel.findOne({_id}).exec()
        if(!padrinho){
            throw new NotFoundException(`Padrinho com id ${_id} não encontrado`)
        }

        await this.padrinhoModel.deleteOne({_id}).exec();

        return padrinho


    }

    addPadrinho = async (padrinhoDTO: ICriaPadrinho): Promise<Padrinho> => {
        const padrinhoCriado = new this.padrinhoModel(padrinhoDTO)
        return await padrinhoCriado.save()
    }

    atualizaPadrinho = async (_id, padrinhoDTO: IAtualizaPadrinho) => {

        const padrinhoEncontrado = await this.padrinhoModel.findOne({_id}).exec()

        if (!padrinhoEncontrado) {
            throw new NotFoundException(`Padrinho com id ${_id} não econtrado`)
        }

        return await this.padrinhoModel.findOneAndUpdate({_id}, 
            {$set: padrinhoDTO}).exec()

    }

    

}
