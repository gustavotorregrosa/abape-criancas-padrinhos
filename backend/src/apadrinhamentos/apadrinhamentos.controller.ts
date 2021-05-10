import { Body, Controller, Post, Get } from '@nestjs/common';
import { ApadrinhamentosService } from './apadrinhamentos.service';
import { ICriaApadrinhamento } from './dto/cria-apadrinhamento.dto';

@Controller('apadrinhamentos')
export class ApadrinhamentosController {

    constructor(private readonly apadrinhamentoService: ApadrinhamentosService){}

    @Post('todos')
    async criarApadrinhamentos(@Body() apadrinhamentos: Array<ICriaApadrinhamento>){
        return await this.apadrinhamentoService.salvaTodosApadrinhamentos(apadrinhamentos)
    }

    @Get()
    async listarApadrinhamentos(){
        return await this.apadrinhamentoService.listarTodosApadrinhamentos()
    }

}
