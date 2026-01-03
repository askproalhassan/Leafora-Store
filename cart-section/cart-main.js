previewingVegetables();
function previewingVegetables() {
  const vegetables = document.querySelector(".v-product");
  const vegetablesPage = document.querySelector(".vegetable-products");
  // categories
  const productData = JSON.parse(localStorage.getItem("cartProduct")) || [];
  let price = 0;
  productData.forEach((product) => {
    price = product.price;

    if (productData.length === 0) {
      vegetablesPage.innerHTML = '<h3 class="not">No cart yet</h3>';
      vegetablesPage.classList.remove("boxShadow");
    } else {
      vegetablesPage.classList.add('boxShadow')
      const prodcutItems = document.createElement("div");
      prodcutItems.className = "product-bay";
      prodcutItems.dataset.price = product.price;
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

  const qualityNumb = document.querySelectorAll(".product-bay");

  qualityNumb.forEach((ele) => {
    let ShowingNum = ele.querySelector(".Showing-num");
    const increment = ele.querySelectorAll(".increment");
    const decrement = ele.querySelectorAll(".decrement");
    let inStock = ele.querySelector(".in-stock");
    const productDelete = ele.querySelectorAll(".product-delete");
    let price = Number(ele.dataset.price);


    // increasing product
    increment.forEach((incre) => {
      incre.addEventListener("click", () => {
        ShowingNum.textContent++;
        const total = price * ShowingNum.textContent;
        inStock.textContent = total;
      });
    });
    //   decreasing product
    decrement.forEach((decre) => {
      decre.addEventListener("click", () => {
        if (ShowingNum.textContent > 1) {
          ShowingNum.textContent--;
          const total = price * ShowingNum.textContent;
          inStock.textContent = total
        }
      });
    });
     // adjucting prices before purchase
  const SubTotal = document.querySelector('.Sub-total');
  const discountNumb = document.querySelector('.discount-numb')
  const allTotal = document.querySelector('.all-total')
  

  console.log()

    // making responsive delete
    productDelete.forEach((remove) => {
      remove.addEventListener("click", (e) => {
        const card = e.target.closest(".product-bay");
        const id = card.dataset.id;

        productData.filter((p) => p.id !== id);
        localStorage.setItem("cartProduct", JSON.stringify(productData));
        card.remove();
      });
    });
  });

 

}