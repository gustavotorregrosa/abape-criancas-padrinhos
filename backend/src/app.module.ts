import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PassageirosModule } from './passageiros/passageiros.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MotoristasModule } from './motoristas/motoristas.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AutenticacaoModule } from './autenticacao/autenticacao.module';
import { CriancasModule } from './criancas/criancas.module';
import { PadrinhosModule } from './padrinhos/padrinhos.module';
import { ApadrinhamentosModule } from './apadrinhamentos/apadrinhamentos.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:example@localhost:27017',
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false }),
    // PassageirosModule,
    // MotoristasModule,
    UsuariosModule,
    AutenticacaoModule,
    CriancasModule,
    PadrinhosModule,
    ApadrinhamentosModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
