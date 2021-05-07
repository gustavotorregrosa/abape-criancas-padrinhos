import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IAtualizaCrianca } from './dto/atualiza-crianca.dto';
import { ICriaCrianca } from './dto/cria-crianca.dto';
import { Crianca } from './interfaces/crianca.interface';

@Injectable()
export class CriancasService {

    constructor(@InjectModel('Crianca') private readonly criancaModel: Model<Crianca>){}

    listaCriancas = async (): Promise<Array<Crianca>> => {
        return await this.criancaModel.find().exec()
    }

    deletaCrianca = async (_id): Promise<Crianca> => {

        const crianca = await this.criancaModel.findOne({_id}).exec()
        if(!crianca){
            throw new NotFoundException(`Crianca com id ${_id} não encontrado`)
        }

        await this.criancaModel.deleteOne({_id}).exec();

        return crianca
    }

    addCrianca = async (criancaDTO: ICriaCrianca): Promise<Crianca> => {
        const criancaCriado = new this.criancaModel(criancaDTO)
        return await criancaCriado.save()
    }

    atualizaCrianca = async (_id, criancaDTO: IAtualizaCrianca) => {

        const criancaEncontrado = await this.criancaModel.findOne({_id}).exec()

        if (!criancaEncontrado) {
            throw new NotFoundException(`Crianca com id ${_id} não econtrado`)
        }

        return await this.criancaModel.findOneAndUpdate({_id}, 
            {$set: criancaDTO}).exec()

    }

    

}
