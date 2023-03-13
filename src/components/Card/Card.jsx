import React from 'react'
import './Card.css'
import { useContext } from 'react'
import { CartContext } from '../../cartContext/cartContext'

const Card = ({item}) => {
    const {addCartData} = useContext(CartContext)

  return (
    <>
        <section className="card">
            <img src={`http://localhost:1337${item?.image?.data?.attributes?.url}`} alt="God of War" className="card-img" />
            <article className="card-title">{item?.title}</article>
            <article className="card-description">{item?.description}</article>
            <section className="card-footer">
                <article className="card-price">${item?.price}</article>
                <button className="submit" type='submit' onClick={()=> {addCartData(item)}}>Add to cart</button>
            </section>
        </section>
    </>
  )
}

export default Card