import React from 'react'

export const Product = (props) => {
    const addToCart = (id) => {
        console.log(id)
    }
    return (
        <span class="product">
            <div class="img">
                <a href="#"><img alt={props.product.name} src={props.product.img} /></a>
            </div>
            <div class="info">
                <a class="title" href="#">{props.product.name}</a>
                <p>{props.product.description}</p>
                <div class="price">
                    <span class="st">Our price:</span><strong>${props.product.price}</strong>
                </div>
                <div class="actions">
                    <a href="#">Details</a>
                    <button onClick={() => props.addToCart(props.product)}>Add to cart</button>
                </div>
            </div>
        </span>
    )
}