import React from 'react'

export const ProductRenderer = (props) => {
    return (
        <span className="product">
        <div className="img">
            <a href="#"><img alt={props.product.name} src={props.product.img}/></a>
        </div>
        <div className="info">
            <a className="title" href="#">{props.product.name}</a>
            <p>{props.product.description}</p>
            <div className="price">
                <span className="st">Our price:</span><strong>${props.product.price}</strong>
            </div>
            <div className="actions">
                <a href="#">Details</a>
                <button onClick={() => props.addToCart(props.product)}>Add to cart</button>
            </div>
        </div>
    </span>
    )
}