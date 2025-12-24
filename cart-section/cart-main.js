previewingVegetables();
function previewingVegetables() {
  const vegetables = document.querySelector(".v-product");
  const vegetablesPage = document.querySelector(".vegetable-products");
  // categories
  const productData = JSON.parse(localStorage.getItem("cartProduct")) || [];

  productData.forEach((product) => {
    
     price =  product.price;
    if (productData.length === 0) {
      vegetablesPage.innerHTML = '<h3 class="not">Not liked yet</h3>';
      vegetablesPage.classList.remove("boxShadow");
    } 
    else {
      const prodcutItems = document.createElement("div");
      prodcutItems.className = "product-bay";
      prodcutItems.innerHTML = `
            <div class='pro-side'>
                <img src='${product.img}' class='product-image'>
                <h3 class='product-name'>${product.name}</h3>
            </div>
                <div class="quality-numb">
                    <button class="increment">+</button>
                        <p class="Showing-num">0</p>
                    <button class="decrement">-</button>
                </div>
                <p class='in-stock'>${product.price}</p>
                <img src="/images/delete.png" class='product-delete'>

        `;
        
        vegetables.append(prodcutItems);
    }
  });

  const qualityNumb = document.querySelectorAll(".quality-numb");
  
  qualityNumb.forEach((ele,ind)=>{
    
    let ShowingNum = ele.querySelector(".Showing-num");
         const increment = ele.querySelector(".increment");
         const decrement = ele.querySelector(".decrement");
         const inStock = ele.querySelector(".in-stock");
         // increasing product
         console.log()
         increment.addEventListener('click',()=>{
             ShowingNum.textContent  ++
            //  inStock.textContent = price += price    
             console.log('clicked',ind)         
             console.log(price.findIndex(p=>p.id))
         })
         //   decreasing product
         decrement.addEventListener('click',()=>{
             ShowingNum.textContent --
            //  inStock.textContent = price -= price
       })
    })
  
}
