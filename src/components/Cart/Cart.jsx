import React, { useCallback, useContext } from 'react'
import { CartContext } from '../../cartContext/cartContext'
import useRazorpay from 'react-razorpay';
import './Cart.css'

const Cart = () => {
    const {cardData} = useContext(CartContext);
    const total = 0;
    const razorpay = useRazorpay();
    const razorPayDisplay = useCallback(async(total)=> {
        const options = {
            key: "rzp_test_hndVjM5FLfidI6",
            amount: total,
            currency: "USD",
            name: "E-Commerce",
            description: "Gaming Transaction",
            handler: (res)=> {
                console.log(res)
            }, 
            notes: {
                address: "Work Address"
            },
            theme: {
                color: "#3399cc"
            },
        }
        //CREATE RAZORPAY INSTANCE
        const rzpl = new razorpay(options);
        rzpl.open();

    }, [razorpay])

  return (
    <>
        <section className='cart-container'>
            <section className='cart-data'>
                {cardData.map((cartItem)=> {
                return (
                    <article className='data'>
                        <img src={cartItem.img} alt="" />
                        <article className='cart-title'>{cartItem.title}</article>
                        <article className='cart-price'>${cartItem.price}</article>
                        <button className='remove-btn'>Remove from cart</button>
                    </article>
                )
            })}
            </section>
            <section className='billing-container'>
                <article>Billing Information</article>
                <article>Total Cash: $1000</article>
                <button className='proceed-btn' onClick={()=> {razorPayDisplay(10000)}}>Checkout</button>
            </section>
        </section>
    </>
  )
}

export default Cart