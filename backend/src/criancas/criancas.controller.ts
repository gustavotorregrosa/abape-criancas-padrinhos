import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { IAtualizaCrianca } from './dto/atualiza-crianca.dto';
import { ICriaCrianca } from './dto/cria-crianca.dto';
import { CriancasService } from './criancas.service';

@Controller('criancas')
export class CriancasController {

    constructor(private readonly criancaService: CriancasService){}

    @Get()
    async listaCriancas(){
        return await this.criancaService.listaCriancas()
    }


    @Post()
    async criarCrianca(@Body() crianca: ICriaCrianca){
        return await this.criancaService.addCrianca(crianca)
    }

    @Put(':_id')
    async atualizarCrianca(@Body() crianca: IAtualizaCrianca, @Param('_id') id: string){
        return await this.criancaService.atualizaCrianca(id, crianca)
    }

    @Delete(':_id')
    async deletaCrianca(@Param('_id') id: string){
        return await this.criancaService.deletaCrianca(id)
    }

}
