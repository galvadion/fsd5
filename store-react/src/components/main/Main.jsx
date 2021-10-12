import React, { useEffect, useState } from 'react'
import {Product} from '../../domain/product'
import {ProductRenderer} from './ProductRenderer'
import {Offer, toOffer} from '../../domain/offer'
import { fetchData } from '../../services/apiConsumer'
import { getProducts } from '../../services/productsAPI'
import Cart from '../../domain/cart'

export const Main = () => {

    /* 
        creando una variable de estado products, 
        que se va a manejar con setProducts
        Y se va a cargar inicialmente como un arreglo vacio
    */
    //     nombreVariable, nombre del setter,  valor por defecto
    const [products,       setProducts ]     =     useState([]) 

    const [cart, setCart] = useState([])

    //     name,   setter   = defaultValue
    const [total, setTotal] = useState(0)

    const addToCart = (product) =>{
        setTotal(0)
        setCart(cart.concat(new Cart(product)))
    }

    useEffect(()=>{
        getProducts((data) => setProducts(
            data.map(value => {
                return new Product(value.id, value.name, value.description, value.price, value.stock, 
                    value.offer ? value.offer.map(it => toOffer(it)) : null, 
                    value.category, value.img)
        })),
        error => console.log(error))
    },[]) 
    // Se realizar el efecto descripto en la función según las dependencias declaradas.
    // en este caso, decir que depende de un arreglo vacio, es decir que se ejecuta cuando se carga el componente. 
    
    useEffect(()=>{
        let aux = 0
        cart.forEach(value => {
            aux += value.product.price * value.quantity
        })
        setTotal(aux)
    },[cart])
    // Se realiza descripto en la función siempre que cambie el estado del carrito

    return (
        <div id="main">
            <section id="content">
                <div id="left">
                    <h3>Last products</h3>
                    <div id='product-holder'>
                        {
                            products.length == 0 ? 
                            (
                                <>
                                    No hay nada cargado
                                </>
                            ):
                            (
                                products.map(product => 
                                    <ProductRenderer 
                                        product={product} 
                                        addToCart={addToCart}>
                                    </ProductRenderer>
                                )
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
                                <>
                                    No hay elementos en el carrito
                                </>
                            ):
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