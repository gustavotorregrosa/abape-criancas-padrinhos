import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Apadrinhamento } from './interfaces/apadrinhamento.interface';
import { ICriaApadrinhamento } from './dto/cria-apadrinhamento.dto'

@Injectable()
export class ApadrinhamentosService {

    constructor(@InjectModel('Apadrinhamento') private readonly apadrinhamentoModel: Model<Apadrinhamento>){}

    deletaTodosApadrinhamentos = async (): Promise<Array<Apadrinhamento>> => {
        await this.apadrinhamentoModel.deleteMany()
        const apadrinhamentos = this.listarTodosApadrinhamentos()
        return apadrinhamentos
    }

    salvaTodosApadrinhamentos = async (apadrinhamentos: Array<ICriaApadrinhamento>): Promise<Array<Apadrinhamento>> => {
        await this.deletaTodosApadrinhamentos()
        
        await Object.entries(apadrinhamentos).map(async (el:any) => {
            const apadrinhamentoDTO = el[1] as ICriaApadrinhamento
            const apadrinhamentoCriado = new this.apadrinhamentoModel(apadrinhamentoDTO)
            await apadrinhamentoCriado.save()
        })

        return await this.listarTodosApadrinhamentos()

    }

    listarTodosApadrinhamentos = async (): Promise<Array<Apadrinhamento>> => {
        return await this.apadrinhamentoModel.find().exec()

    }


}
