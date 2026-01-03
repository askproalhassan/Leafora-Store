// previewing vegetables
previewingVegetables()
function previewingVegetables(){
    const vegetablesPage = document.querySelector('.vegetable-products');
    let productData = JSON.parse(localStorage.getItem('ProductData')) || [];

    // categories
    const products = document.querySelector('.v-product');


    if(productData.length === 0){
        vegetablesPage.innerHTML = '<h3 class="not">Not liked yet</h3>'
        vegetablesPage.classList.remove('boxShadow')
    }
    else{
        vegetablesPage.classList.add('boxShadow')
        productData.forEach(product => {
            // importing product
            const productsBay = document.createElement('div');
            productsBay.className = 'product-bay';
            productsBay.dataset.id = product.id
            productsBay.innerHTML=`
                <div class='pro-side'>
                    <i class='bx bx-x remove'></i>
                    <img src='${product.image}' class='product-image'>
                    <div class='write'>
                        <h3 class='product-name'>${product.name}</h3>
                        <p class='product-rate'>${product.rate}</p>
                    </div>
                </div>
                <p class='product-price'>${product.price}</p>
                <p class='in-stock'>In Stock</p>
                <button class='add-to'>Add To Cart</button>
                `
                products.append(productsBay)
                
            });
        const myLike = JSON.parse(localStorage.getItem('like'))
        const cancel = document.querySelectorAll('.bx-x')
        cancel.forEach((close)=>{
            close.addEventListener('click',(e)=>{
                const card = e.target.closest('.product-bay')
                const id = card.dataset.id;
                
                productData = productData.filter(p => p.id !== id)
                localStorage.getItem('ProductData',JSON.stringify(productData))
                card.remove()
                localStorage.getItem('like',like)
            })
        })
    }

    const cartNumb = document.querySelector('.bx-cart').innerHTML
    cartNumb = localStorage('likecart')
    
}
