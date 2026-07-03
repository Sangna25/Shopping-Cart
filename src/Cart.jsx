import { useState } from "react";
import { useContext } from "react";
import { useCart } from "./Contexts/CartContext";
import { CartList } from "./components/CartList";


export function Cart (){
const {addToCart, incrementQuantity, decrementQuantity, cartItems} = useCart();
const totalQuantity = cartItems.reduce((acc,product) => acc + product.quantity, 0);
const totalPrice = cartItems.reduce((acc, product) => acc + product.price * product.quantity, 0);
const tax= totalPrice===0 ? 0 :25;
const delivery = totalPrice===0 ? 0: 14;

    return (
        <div className="cart">
            <div className="cart-header">
                <img src="/assets/cartLogo.png" alt="cart-logo" className="cart-logo" />
                <h2 className="cart-title">Your Cart</h2>
                <p className="cart-info"> ({totalQuantity}) products in your cart</p>
            </div>
            <div className="cart-item-container">
                <div className="cart-item-list">
                    {cartItems.map((item) =>(
                      <CartList item={item} key={item.id}></CartList>
                    ))}

                </div>
                <div className="cart-item-checkout">
                    <div className="discount">
                        <input type="text" className="promocode" placeholder="PROMOCODE"></input>
                        <button type="button" className="apply-promo">Apply</button>
                    </div>

                    <div className="total-checkout-info">
                        <p className="total-checkout-label">{totalQuantity} items : </p>
                        <p className="total-checkout-value">${totalPrice.toFixed(2)}</p>
                    </div>
                    
                    <div className="total-checkout-info">
                        <p className="total-checkout-label">Delivery Cost : </p>
                        <p className="total-checkout-value">${delivery}</p>
                    </div>

                    
                    <div className="total-checkout-info">
                        <p className="total-checkout-label">Tax :</p>
                        <p className="total-checkout-value">${tax}</p>
                    </div>
                   
                   <div className="total-checkout-info">
                        <p className="total-checkout-label total">Total :</p>
                        <p className="total-checkout-value total-value">${(totalPrice+tax+delivery).toFixed(2)}</p>
                    </div>
                   
                   <button className="checkOut-btn">Checkout</button>
                </div>

            </div>
            

        </div>
    )
}