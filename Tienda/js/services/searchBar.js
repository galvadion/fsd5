function searchProduct() {
    let input = document.getElementById('searchBar').value
    if (input.length !== 0) {
        filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(input.toLowerCase()) ||
            product.description.toLowerCase().includes(input.toLowerCase()) ||
            product.id == input
        )
    } else {
        filteredProducts = products
    }

    productHolder.innerHTML = ''

    filteredProducts
        .sort((a, b) => a.name.localeCompare(b.name))
        .forEach(product => {
            productHolder.innerHTML += product.asInnerHTMLForMainList()
        })
}