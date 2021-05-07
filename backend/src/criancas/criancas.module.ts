import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CriancasController } from './criancas.controller';
import { CriancasService } from './criancas.service';
import { CriancaSchema } from './interfaces/crianca.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Crianca', schema: CriancaSchema}])],
  controllers: [CriancasController],
  providers: [CriancasService]
})
export class CriancasModule {}
