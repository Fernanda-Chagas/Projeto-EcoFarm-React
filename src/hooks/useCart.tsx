import {createContext, ReactNode, useContext, useState} from 'react';
import ListaProdutos from '../components/listaProdutos/ListaProdutos';
import Estoque from '../models/Estoque';
import { api } from '../services/Services';

interface CartProviderProps{
    children: ReactNode;
}

interface UpdateProductAmount {
    produtoId: number;
    quantidade: number;
}

export interface CartProduct extends Estoque {
    quantidade: number;
}

interface CartContextData {
    cart: CartProduct[];
}

