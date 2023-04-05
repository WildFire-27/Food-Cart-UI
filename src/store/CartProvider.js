import React, {useReducer} from "react";
import CartContext from "./CartContext"

const defaultCartState={
    items:[],
    totalAmount:0,
}
const cartReducer=(state, action) => {
    if(action.type==='ADD'){
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount =
         state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }
    return defaultCartState;
};

const CartProvider = (props) => {
    const [curState,dispatchCartAction] = useReducer(
        cartReducer,
        defaultCartState
        );
    const addItemToCartHandler =(item) => {
        dispatchCartAction({type:"ADD", item:item});
    };
    const removeItemFromHandler =(id) => {
        dispatchCartAction({type:"REMOVE", id:id});
    }

    const cartContext = {
        items: curState.items,
        totalAmount: curState.amount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromHandler,
    }
    return (
     <CartContext.Provider value={cartContext}>
        {props.children}
        </CartContext.Provider>
    );
};
export default CartProvider;