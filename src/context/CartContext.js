import { type } from "@testing-library/user-event/dist/cjs/utility/index.js";
import { createContext, useContext, useReducer, useState } from "react";
import reducer from '../reducer/cardReducer'

const CardContext = createContext();

export const useCard = () => useContext(CardContext);

export const CardProvider = ({ children }) => {

    const [cartData, setCartData] = useState([]);

    

    const initialState = {

        cart: [],
        totalItems: "",
        totalAmount: "",
        shopping_fee: 50000

    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const AddToCard = (id, quantity, product) => {
        dispatch({ type: "ADD_TO_CARD", payload: { id, quantity, product } })
    }

    const setIncrease = (e, id) => {
        e.preventDefault();
        dispatch({ type: "SET_INCREASE" , payload: id})
    }

    const setDeacrease = (id) => {
        dispatch({ type: "SET_DECREASE" , payload: id})
    }

    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id })
    }
    return (
        <CardContext.Provider value={{ ...state , AddToCard , removeItem , setIncrease , setDeacrease , cartData, setCartData}}>
            {children}
        </CardContext.Provider>
    )
}
