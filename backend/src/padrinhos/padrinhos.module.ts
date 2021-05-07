import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PadrinhosController } from './padrinhos.controller';
import { PadrinhosService } from './padrinhos.service';
import { PadrinhoSchema } from './interfaces/padrinho.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Padrinho', schema: PadrinhoSchema}])],
  controllers: [PadrinhosController],
  providers: [PadrinhosService]
})
export class PadrinhosModule {}
