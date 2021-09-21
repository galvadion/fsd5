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
                                    <a href="#">Add to cart</a>
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