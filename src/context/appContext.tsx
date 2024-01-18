import { createContext, useReducer, useState } from "react";
import { CartItem } from "../data/Products";
import { cartReducer } from "./cartReducer";

export interface CartState {
    listOfItems: CartItem[];
}

const initalCartState: CartState = {
    listOfItems: []
}

export interface AppContextProps {
    isModalOpen: boolean;
    toggleModal: () => void;
    cartState: CartState;
    addItemToCart: (items: CartItem[]) => void;
    removeItemFromCart: (productId: number) => void;
}

export const AppContext = createContext({} as AppContextProps);

export const AppContextProvider = ({ children }: any) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [cartState, dispatch] = useReducer( cartReducer, initalCartState );

    const toggleModal = () => setIsModalOpen( !isModalOpen );

    const addItemToCart = (listOfItems: CartItem[]) => {
        dispatch({
            type: 'addItems',
            payload: listOfItems
        })
    }

    const removeItemFromCart = ( productId: number ) => {
        console.log("Remove");
        dispatch({
            type: 'removeItems',
            payload: productId
        })
    }

    return (
        <AppContext.Provider
            value={{
                isModalOpen,
                toggleModal,
                cartState,
                addItemToCart,
                removeItemFromCart
            }}
        >
            {children}
        </AppContext.Provider>
    )
}