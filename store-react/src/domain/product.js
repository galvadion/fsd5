export class Product { // Representación de algo del mundo real.
    constructor(id, name, description, price, stock, offer, category, img) {
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.stock = stock
        this.offer = offer
        this.category = category
        this.img = img
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
}