import React, { useState } from 'react'

const CartContext = React.createContext();


const CartProvider = (props) => {
    const [cardData, setCardData] = useState([]);

    const addCartData = (data)=> {
        setCardData([...cardData, data])
    }
    const removeCartData = ()=> {

    }

  return (
    <CartContext.Provider value={{cardData, addCartData}}>
        {props.children}
    </CartContext.Provider>
  )
}

export {CartContext, CartProvider};