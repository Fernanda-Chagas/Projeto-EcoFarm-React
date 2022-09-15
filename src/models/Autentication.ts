interface Authentication{
    id: number;
    usuario: string;
    email: string;
    senha: string;
    token?: string |null
}

export default Authentication;