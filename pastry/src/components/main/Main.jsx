import React, { useEffect, useState } from 'react'
import { Product } from './product/product'
import Cart from '../../domain/Cart'

export const Main = (props) => {

    const [total,setTotal] = useState(0)
    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        setTotal(0)
        setCart(cart.concat(new Cart(product)))
    }

    useEffect(() => {
        let aux = 0;
        cart.forEach(value =>{
            aux += value.product.price * value.quantity
        })
        setTotal(aux)
    },[cart])

    console.log(cart)

    return (
        <div id="main">
            <section id="content">
                <div id="left">
                    <h3>Last products</h3>
                    <div id='product-holder'>
                        {
                            props.products.map( value => 
                                <Product product={value} addToCart={addToCart}></Product>
                            )
                        }
                    </div>
                </div>
                <div id="right">
                    <h3>Mini cart</h3>
                    <ul id="cart-holder">
                        {
                            cart.length == 0 ?
                            (
                                'Aún no se ha agregado ningún elmenento'
                            ) :
                            (
                                cart.map (value => {
                                    return (
                                        <li>
                                            <p>{value.product.name}</p>
                                            <input id={`quantity${value.product.id}`} value={value.quantity}/>
                                            <p id={`priceById${value.product.id}`}>${value.product.price * value.quantity}</p>
                                        </li>
                                    )
                                })
                            )
                        }
                    </ul>
                    <p>Total: $<span id="total-holder">{total}</span></p>
                </div>
            </section>
        </div>
    )
}