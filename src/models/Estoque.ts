interface Estoque {
    id: number,
    nomeProduto?: string,
    valor?: number,
    quantidade?: number,
    fotoProduto?: string,
    categoria?: string,
    fornecedor?: string
}

export default Estoque;