import { createContext, useContext, useEffect } from "react";
import { useState } from "react";

export const CartContext = createContext();

const CART_STORAGE_KEY ="cartItems";


export function CartProvider ({children}){
    const [cartItems, setCartItems] = useState(() =>{
        try {
            const stored = localStorage.getItem(CART_STORAGE_KEY);
            return stored ? JSON.parse(stored) : [];
        } catch (err){
            console.error("Failed to load cart from local storage", err);
            return [];
        }
    });

    useEffect(()=>{
        try {
            localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
        } catch(err){
            console.error("Failed to save cart to local Storage",err);
        }
    }, [cartItems]);

    
   const addToCart = (product) => {
     setCartItems(prevItems => {
        const existingProduct = prevItems.find(
         item => item.id === product.id
        );

        if (existingProduct) {
            return prevItems.map(item =>
                item.id === product.id
                    ? {
                        ...item,
                        quantity: item.quantity + 1
                    }
                    : item
            );
        }

        return [
            ...prevItems,
            {
                ...product,
                quantity: 1
            }
        ];
    });
};
      const deleteProduct =(product) => {
                   setCartItems(
                prevItems => {
                    return prevItems.filter((item)=>item.id !== product.id )
                }) 
      }

     
       
       const incrementQuantity = (product) => {

        setCartItems(prevItems => {
             const existing = prevItems.find(item => item.id === product.id);
              if (existing) {
                return prevItems.map(item => 
                    item.id === product.id ? {...item, quantity : item.quantity+1} :item
                )       
        } else {
        return [...prevItems, { ...product, quantity: 1 }]
        }
        }) 
    };
     const decrementQuantity = (product) => {
        setCartItems(prevItems => {
            const existing = prevItems.find(item => item.id === product.id);
            if (!existing) return prevItems;
            if (existing.quantity <= 1) {
                return prevItems.filter(item => item.id !== product.id); 
        }
         return prevItems.map(item =>
            item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
        );
        })
    };

      
      return (
        <CartContext.Provider value={{cartItems, addToCart, deleteProduct,  decrementQuantity, incrementQuantity}}>
            {children}
        </CartContext.Provider>
      )
  
}
export const useCart = () => useContext(CartContext);
