class Cart {
    constructor(product) {
        this.product = product
        this.quantity = 1
    }
}


function renderCart() {
    cartHolder.innerHTML = ''
    totalHolder.innerHTML = 0
    total = 0;
    cart.forEach(cartLine => {
        total += cartLine.product.price * cartLine.quantity;
        cartHolder.innerHTML += `<li>
                <p>${cartLine.product.name}</p>
                <input id="quantity${cartLine.product.id}" value="${cartLine.quantity}"/>
                <p id="priceById${cartLine.product.id}">${cartLine.product.price * cartLine.quantity}</p>
            </li>`
    })
    cart.forEach(cartLine => {
        document.getElementById(`quantity${cartLine.product.id}`).addEventListener('keyup', (event) => editQuantity(event, cartLine.product.id));
    })
    totalHolder.innerHTML = total
}

function editQuantity(event, productId) {
    let quantity = event.target.value;
    let cartLine = cart.find(value => value.product.id == productId)

    cartLine.quantity = quantity
    document.getElementById(`priceById${productId}`).innerHTML = cartLine.product.price * quantity
    total = 0

    cart.forEach(cartLine => {
        total += cartLine.product.price * cartLine.quantity;
    })

    totalHolder.innerHTML = total
}