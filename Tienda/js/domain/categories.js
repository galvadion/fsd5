const categoriesHolder = document.getElementById('categories-holder')


// definimos categorias
let categories = ['Higiene', 'Comida', 'Artículo', 'Gato', 'Random']

categories.forEach(category => {
        categoriesHolder.innerHTML += `<li><a href="#" onclick='filterByCategory("${category}")'>${category}</a></li>`
    }) // categoriesHolder.innerHTML =  categoriesHolder.innerHTML + `<li><a href="#">${category}</a></li>`


function filterByCategory(category) {
    productHolder.innerHTML = ''
    filteredProducts = products.filter(product => product.category == category)
    filteredProducts.forEach(product => {
        productHolder.innerHTML += product.asInnerHTMLForMainList()
    })
}