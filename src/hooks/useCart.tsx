import { createContext, ReactNode, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import Estoque from '../models/Estoque';
import { api } from '../services/Services';
import useLocalStorage from 'react-use-localstorage';

interface CartProviderProps {
    children: ReactNode;
}

interface UpdateProductAmount {
    productId: number;
    amount: number;
}

export interface CartItem extends Estoque {
    quantidade: number;
}

interface CartContextData {
    cart: CartItem[];
    addProduct: (productId: number) => Promise<void>;
    removeProduct: (productId: number) => void;
    updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

const cartStorageKey = "@ecofarm:cart";

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
    const [cart, setCart] = useState<CartItem[]>(() => {
        const storagedCart = localStorage.getItem(cartStorageKey)

        if (storagedCart) {
            return JSON.parse(storagedCart);
        }

        return [];
    });

    const addProduct = async (productId: number) => {
        try {
            const productAlreadyInCart = cart.find(produto => produto.id === productId)

            if (!productAlreadyInCart) {
                const { data: produto } = await api.get<Estoque>(`/api/Estoque/id/${productId}`);

                if (produto?.quantidade && produto.quantidade > 0) {
                    setCart([...cart, { ...produto, quantidade: 1 }])
                    localStorage.setItem(cartStorageKey, JSON.stringify([...cart, { ...produto, quantidade: 1 }]))
                    toast.success(produto.nomeProduto + ' adicionado ao carrinho', { theme:"colored" })
                    return;
                }
            }

            if (productAlreadyInCart) {
                const { data: produto } = await api.get<Estoque>(`/api/Estoque/id/${productId}`);

                if (produto?.quantidade && (produto.quantidade > productAlreadyInCart.quantidade)) {
                    const updatedCart = cart.map(cartItem => cartItem.id === productId ? {
                        ...cartItem,
                        quantidade: Number(cartItem.quantidade) + 1
                    } : cartItem)

                    setCart(updatedCart)
                    localStorage.setItem(cartStorageKey, JSON.stringify(updatedCart))
                    return;
                } else {
                    toast.error('Quantidade solicitada fora de estoque')
                }
            }
        } catch {
            toast.error('Erro na adição do produto')
        }
    };

    const removeProduct = (productId: number) => {
        try {
            const productExists = cart.some(cartProduct => cartProduct.id === productId)
            if (!productExists) {
                toast.error('Erro na remoção do produto');
                return
            }

            const updatedCart = cart.filter(cartItem => cartItem.id !== productId)
            setCart(updatedCart)
            localStorage.setItem(cartStorageKey, JSON.stringify(updatedCart))
        } catch {
            toast.error('Erro na remoção do produto');
        }
    };

    const updateProductAmount = async ({
        productId,
        amount,
    }: UpdateProductAmount) => {
        try {
            if (amount < 1) {
                toast.error('Erro na alteração de quantidade do produto');
                return
            }

            const response = await api.get<Estoque>(`/api/Estoque/id/${productId}`);

            const productAmount = response.data?.quantidade ?? 0;
            const stockIsFree = amount > productAmount

            if (stockIsFree) {
                toast.error('Quantidade solicitada fora de estoque')
                return
            }

            const productExists = cart.some(cartProduct => cartProduct.id === productId)
            if (!productExists) {
                toast.error('Erro na alteração de quantidade do produto');
                return
            }

            const updatedCart = cart.map(cartItem => cartItem.id === productId ? {
                ...cartItem,
                quantidade: amount
            } : cartItem)
            setCart(updatedCart)
            localStorage.setItem(cartStorageKey, JSON.stringify(updatedCart))
        } catch {
            toast.error('Erro na alteração de quantidade do produto');
        }
    };

    return (
        <CartContext.Provider
            value={{ cart, addProduct, removeProduct, updateProductAmount }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart(): CartContextData {
    const context = useContext(CartContext);

    return context;
}