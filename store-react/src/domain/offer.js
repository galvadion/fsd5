export class Offer {
    constructor(id, validUntil, discount, limit, description) {
        this.id = id
        this.validUntil = validUntil
        this.discount = discount
        this.limit = limit
        this.description = description
    }

    isValid() {
        if (new Date() < this.validUntil) {
            return true
        } else {
            return false
        }
    }
}

export function toOffer(offer) {
    return new Offer(offer.id, new Date(offer.validUntil), offer.discount, offer.limit, offer.description)
}