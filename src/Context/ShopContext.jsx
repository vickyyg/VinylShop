import React, {createContext, useState} from "react";
import allproducts from "../Components/Assets/allproducts";



export const ShopContext = createContext(null);

const getDefaultCart = () =>{
    let cart = {};
    for (let index = 0; index < allproducts.length+1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());
    

    const addToCart = (itemId) =>{
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId]+1}))
        console.log(cartItems);
    }

    const removeFromCart = (itemId) =>{
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId]-1}))
    }
    
    //esto esta en CartItems
    const totalCart = () =>{
     let getTotal = 0;
     for(const item in cartItems)
     { 
        if(cartItems[item]>0)
        {
            let itemInfo = allproducts.find((product)=>product.id===Number(item))
            getTotal += itemInfo.price * cartItems[item];
        }
        

     }
     return getTotal;
    }

    const totalCartItems = () =>{
        let totalItem = 0;
        for(const item in cartItems) 
        {
            if(cartItems[item]>0)
            {
                totalItem+= cartItems[item];
            }
        }
        return totalItem;
    }


    const contextValue = { totalCartItems, totalCart, allproducts, cartItems, addToCart, removeFromCart};
    

    return (
        <ShopContext.Provider value={contextValue}>
        {props.children}
        </ShopContext.Provider>
    )
}

export default  ShopContextProvider;