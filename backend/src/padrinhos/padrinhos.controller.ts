import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { IAtualizaPadrinho } from './dto/atualiza-padrinho.dto';
import { ICriaPadrinho } from './dto/cria-padrinho.dto';
import { PadrinhosService } from './padrinhos.service';

@Controller('padrinhos')
export class PadrinhosController {

    constructor(private readonly padrinhoService: PadrinhosService){}

    @Get()
    async listaPadrinhos(){
        return await this.padrinhoService.listaPadrinhos()
    }


    @Post()
    async criarPadrinho(@Body() padrinho: ICriaPadrinho){
        return await this.padrinhoService.addPadrinho(padrinho)
    }

    @Put(':_id')
    async atualizarPadrinho(@Body() padrinho: IAtualizaPadrinho, @Param('_id') id: string){
        return await this.padrinhoService.atualizaPadrinho(id, padrinho)
    }

    @Delete(':_id')
    async deletaPadrinho(@Param('_id') id: string){
        return await this.padrinhoService.deletaPadrinho(id)
    }

}
