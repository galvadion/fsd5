    class Product {
        constructor(id, name, description, price, stock, offer) {
            this.id = id
            this.name = name
            this.description = description
            this.price = price
            this.stock = stock
            this.offer = offer
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

        elementAsHTML() {
            return (
                `<span class="product">
            <div class="img"><a href="#"><img alt="" src="images/post${this.id}.jpg"></a></div>
            <div class="info">
                <a class="title" href="#">${this.name}</a>
                <p>${this.description}</p>
                <div class="price">
                    <span class="st">Our price:</span><strong>$${this.price}</strong>
                </div>
                <div class="actions">
                    <a href="product?id=${this.id}">Details</a>
                    <a href="#">Add to cart</a>
                </div>
            </div>
        </span>`
            )
        }
    }