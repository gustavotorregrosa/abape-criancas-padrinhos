import { Usuario } from "./usuario.interface";

export interface UsuarioJWT 
{
    readonly id: string;
    nome: string;
    email: string;
    sobre: string;
    perfil: string;
    jwt: string,
    refreshToken: string,
    refreshTokenValidity: Date

}