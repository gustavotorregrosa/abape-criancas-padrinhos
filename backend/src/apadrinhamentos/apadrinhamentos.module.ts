import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ApadrinhamentosController } from './apadrinhamentos.controller';
import { ApadrinhamentosService } from './apadrinhamentos.service';
import { ApadrinhamentoSchema } from './interfaces/apadrinhamento.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Apadrinhamento', schema: ApadrinhamentoSchema}])],
  controllers: [ApadrinhamentosController],
  providers: [ApadrinhamentosService]
})
export class ApadrinhamentosModule {}
