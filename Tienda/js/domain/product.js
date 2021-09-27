    class Product { // Representación de algo del mundo real.
        constructor(id, name, description, price, stock, offer, category) {
            this.id = id
            this.name = name
            this.description = description
            this.price = price
            this.stock = stock
            this.offer = offer
            this.category = category
        }

        hasValidOffer() {
            if (this.offer != null) {
                return this.offer.isValid()
            } else {
                return false;
            }
        }

        modifiedPriceByOffer() {
            return this.price * this.offer.discount
        }

        asInnerHTMLForMainList() {
            return (
                `<span class="product">
                            <div class="img">
                                <a href="#"><img alt="${this.name}" src="images/post${this.id}.jpg"></a>
                            </div>
                            <div class="info">
                                <a class="title" href="#">${this.name}</a>
                                <p>${this.description}</p>
                                <div class="price">
                                    <span class="st">Our price:</span><strong>$${this.price}</strong>
                                </div>
                                <div class="actions">
                                    <a href="#">Details</a>
                                    <button onclick="addToCart('${this.id}')">Add to cart</button>
                                </div>
                            </div>
                        </span>`
            )
        }

        asInnerHTMLForOfferList() {
            return (
                `<li>
                            <div class="img">
                                <a href="#"><img alt="${this.name}" src="images/post${this.id}.jpg"></a>
                            </div>
                            <div class="info">
                                <a class="title" href="#">${this.name}</a>
                                <div class="price">
                                    <span class="usual">$${this.price} </span>&nbsp;
                                    <span class="special">$${this.modifiedPriceByOffer()}</span>
                                </div>
                            </div>
                        </li>`
            )
        }
    }

    function initializeProducts() {
        return [
            new Product(1, 'Shampoo', 'Con esto te limpias el pelo y queda joya', 100, 5, null, 'Higiene'),
            new Product(2, 'Pizza congelada', 'Con esto tus clientes te adoran', 200, 3, null, 'Comida'),
            new Product(3, 'Gift Card', 'Para regalar y regalarse, para el bolsillo de la dama y ' +
                'cartera del caballero', 600, -1, null, 'Random'),
            new Product(4, 'loren ipsum', 'Sit amet', 10000, 100,
                new Offer(1, new Date(2025, 10, 05), 0.50, false, 'Mitad de precio siempre'), 'Random'
            ),
            new Product(5, 'Gift Carc', 'Para regalar y regalarse, para el bolsillo de la dama y ' +
                'cartera del caballero', 600, -1, null, 'Random'),
            new Product(6, 'Shampoo Ultrawash', 'Con esto el pelo te quedo gris', 500, 2, null, 'Higiene'),
            new Product(7, 'Empanadas caprese', 'Empanadas de atún', 50, 50, new Offer(2, new Date(2025, 10, 05), 0.20, false, 'Aprovechame ahora', 'Comida')),
            new Product(8, 'fafafa', 'fafafafafafa', 600, -1, null, 'Random'),
            new Product(9, 'falafel', 'falafel', 20, 100,
                new Offer(1, new Date(2025, 10, 05), 0.50, false, 'Mitad de precio siempre'), 'Comida'
            ), new Product(10, 'Sake', 'Un gato fachero facherito.', 200, -1, null, 'Gato')
        ]
    }

    function addToCart(props) {
        cart.push(new Cart(products.find(cartLine => cartLine.id == props)))
        renderCart()
    }