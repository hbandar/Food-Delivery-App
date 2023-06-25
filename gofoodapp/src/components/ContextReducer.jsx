import React,{createContext,useState, useContext, useReducer} from 'react'

const CartStateContext = createContext();
const CartDispatchContext = createContext();

export const reducer = useReducer() =>{
    return(<div></div>)
}

export const CartProvider = ({children})=>{
    
const [state,dispatch] = useReducer(reducer,[]);
    return (
<CartDispatchContext.Provider value={dispatch}>
        <CartStateContext value= {state}>
        {children}
        </CartStateContext>
</CartDispatchContext.Provider>
    )
}

export const useCart = ()=> useContext(CartStateContext);
export const useDispatchCart = ()=> useContext(CartDispatchContext);
