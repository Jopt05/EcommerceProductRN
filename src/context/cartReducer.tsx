import { CartItem } from "../data/Products";
import { CartState } from "./appContext";

type CartAction = 
    { type: "addItems"; payload: CartItem[] } |
    { type: "removeItems"; payload: number }

export const cartReducer = (state: CartState, action: CartAction): CartState => {

    switch (action.type) {
        case 'addItems':
            return {
                listOfItems: [
                    ...state.listOfItems,
                    ...action.payload
                ]
            }

        case 'removeItems':
            return {
                listOfItems: [
                    ...state.listOfItems.filter(cartItem => cartItem.id != action.payload)
                ]
            }
    
        default:
            return state;
    }

}