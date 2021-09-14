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
      }