import { useCart } from "../Contexts/CartContext";
import { FaStar, FaRegStar, FaPlus, FaMinus, FaRegHeart, FaHeart } from "react-icons/fa";
import { useState } from "react";

import { FaTimes } from 'react-icons/fa';

export function CartList({item}) {
    console.log(item)
        const {addToCart, incrementQuantity, decrementQuantity, cartItems,deleteProduct} = useCart();
        
            const [isWishlisted, setIsWishlisted] = useState(false);
    return (
        <div className="cartItem-container">
            <img className="cartItem-img" alt={item.title} src={item.image}></img>
            <div className="cartItem-info">
                <h2 className="cartItem-title">{item.title}</h2>
                <p className="cartItem-category">Category : {item.category}</p>
                <p className="cartItem-price">${item.price} /per item</p>
            </div>
            <div className="total-info">
                <p className="total-price-value">${(item.price * item.quantity).toFixed(2)}</p>
                <div className="quantity-addToCart">
                    <button className="addBtn-decr" onClick={() => decrementQuantity(item)}>
                      <FaMinus />
                    </button>
                    <p >{item.quantity}</p>
                   <button className="addBtn-incr" onClick={() => incrementQuantity(item)}>
                      <FaPlus />
                   </button>
                </div>
                <button className="wishlist" onClick={() => setIsWishlisted(w => !w)} > {isWishlisted ? <FaHeart /> : <FaRegHeart />}
                </button>
                <button className="removeBtn" onClick={() => deleteProduct(item)}> 
                    <FaTimes size={24} color="black" />
                </button>
                
            </div>

        </div>
    )


}