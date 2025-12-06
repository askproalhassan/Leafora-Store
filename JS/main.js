// making a dropdown for the navigation
const dropdown = () => {
  const arrow = document.querySelectorAll(".bx-chevron-up");
  const dropdown = document.querySelectorAll(".dropdown");

  arrow.forEach((element, index) => {
    dropdown.forEach((list, listNumb) => {
      // first arrow
      if (index === 0) {
        element.addEventListener("click", () => {
          if (listNumb === 0) {
            list.classList.toggle("show");
          }
        });
      }
      // second arrow
    });
  });
};
dropdown();
function cart() {
  const ic = document.querySelectorAll(".ic i");
  ic.forEach((el, ind) => {
    const collectedNum = document.createElement("div");
    collectedNum.className = "collected-num";
    collectedNum.innerHTML = "";
    if (ind === 1) {
      collectedNum.innerHTML = localStorage.getItem("cart");
    } else if (ind === 0) {
      collectedNum.innerHTML = localStorage.getItem("like");
    }
    el.append(collectedNum);
  });
}
cart();

//  fetching top categories
function topCategories() {
  const prod = document.querySelector(".prod");
  fetch("JSONS/categories.json")
    .then((response) => response.json())
    .then((data) =>
      data.forEach((element) => {
        const productcategory = document.createElement("div");
        productcategory.id = "productcategory";
        productcategory.innerHTML = `<div class = 'categories'> 
                                    <img src='${element.image}' class='c-img'>
                                    <div class='int'>
                                        <h3 class='element-name'>${element.name} </h3>
                                        <h3 class='element-about'>${element.about} </h3>
                                    </div>
                                </div>`;
        prod.append(productcategory);
        // const productCategory = `<div class='produscts-c'>${element.name}</div`
      })
    );
}
topCategories();

// fetching for intro

function intro() {
  const inforCard = document.querySelector(".infor-card");
  const switchBtn = document.querySelectorAll(".btn-list");

  fetch("JSONS/intro.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element) => {
        const things = document.createElement("div");
        things.className = "things";
        things.innerHTML = `<div class='intro-things'>
                                    <img src='${element.images}' class='big-img'>
                                    <h3 class='title'>${element.title}</h3>
                                    <p class='about'>${element.about}</p>
                                    <button class='bg-btn'>${element.btn}<i class='bx bx-right-arrow-alt'></i></button>
                                </div>`;
        inforCard.append(things);
      });
      // --------------------------------switching effect----------------------------
      // showing things
      const things = document.querySelectorAll(".things");
      things.forEach((thing) => {
        thing.style.visibility = "hidden";
        thing.classList.remove("wow");
      });
      things[0].style.visibility = "visible";
      things[0].classList.add("wow");

      // swithing them

      switchBtn.forEach((btn, numb) => {
        btn.addEventListener("click", () => {
          things.forEach((thing) => {
            thing.style.visibility = "hidden";
            thing.classList.remove("wow");
          });

          if (numb === 0) {
            things[0].style.visibility = "visible";
            things[0].classList.add("wow");
          } else if (numb === 1) {
            things[1].style.visibility = "visible";
            things[1].classList.add("wow");
          } else {
            things[2].style.visibility = "visible";
            things[2].classList.add("wow");
          }
        });
      });
    });

  // const inforCardAll =things.querySelectorAll(".infor-card");
  // console.log(inforCardAll)
}

intro();

// fetching fruit for top week offer
function offer() {
  const carocel = document.querySelector(".carocel");

  fetch("JSONS/carocel.json")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((item) => {
        const carocelList = document.createElement("div");

        carocelList.className = "carocel-list";
        carocelList.innerHTML = `<img src='${item.image}' class = 'item-img'>
                              <div class = 'border'>
                                  ${item.icon}
                                  <h4 class = 'price'>GH ${item.price}/kg</h4>
                                  <h4 class = 'p-name'>${item.name}</h4>
                              </div>`;
        carocel.append(carocelList);
      });
    })
    .catch((err) => console.log(err));
}
offer();

// ===================================animating viewpoint on scroll================================
const scroll = () => {
  const topOffer = document.querySelector(".top-offer");
  const carocel = document.querySelector(".carocel");
  const homeImg = document.querySelector(".home-carocel img");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        topOffer.classList.add("top-offer-show");
        carocel.classList.add("carocel-show");
        homeImg.classList.add("home-img-show");
      }
    });
  });
  observer.observe(topOffer);
};
scroll();

// ================================================fecthing weekend deals==============================================================
function weekendDeals() {
  const dealCarocel = document.querySelector(".deal-carocel");
  fetch("JSONS/limited-deal.json")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((item) => {
        const dealItem = document.createElement("div");
        dealItem.className = "deal-item";
        dealItem.innerHTML = `
                        <div class='deal-border'>
                          <div class='timmer'>
                            <h4 class='num-day'>Days <span class='day'>1</span></h4>
                            <h4 class='num-hour'>Hour <span class='hour'>2</span></h4>
                            <h4 class='num-muit'>Munit <span class='munit'>3</span></h4>
                            <h4 class='num-second'>Second <span class='seconds'>4</span></h4>
                          </div>

                          <div class = 'deal-info'>
                            <div class='deal-left'>
                                <h3 class='deal-week'>${item.week}</h3>
                                <h3 class = 'deal-name'>${item.name}</h3>
                                <p class = 'deal-discripton'>${item.discription}</p>
                                <h3 class = 'deal-price'>GH ${item.price}.00</h3>
                                <button class = 'shop'>Shop Now <i class='bx bx-right-arrow-alt'></i></button>
                            </div>

                            <div class = 'deal-right'>
                              <img  src= '${item.img}'class = 'deal-image'>
                            </div>
                          </div>
                        </dv>`;
        dealCarocel.append(dealItem);
      });
      const dealborder = document.querySelectorAll(".deal-border");
      dealborder.forEach((element, index) => {
        if (index === 0) {
          element.style.background = "rgba(0, 0, 255, 0.205)";
        } else if (index === 1) {
          element.style.background = "rgba(85, 189, 85, 0.22)";
        } else if (index === 2) {
          element.style.background = "rgba(255, 255, 0, 0.16)";
        } else {
          element.style.background = "rgba(255, 0, 64, 0.16)";
        }
      });

      // ===============time counddown===============================

      // const day = document.querySelector(".day");
      // const hour = document.querySelector(".hour");
      // const minut = document.querySelector(".minut");
      // const seconds = document.querySelector(".seconds");

      // const currentTime = new Date();
      // day.innerHTML = currentTime.getFullYear();
      // console.log(day);
    })

    .catch((error) => {
      console.error(error);
    });
  // scrolling the carocel when either of the btn is click======================================
  const leftArrow = document.querySelector(".bx-left-arrow-alt");
  const rightArrow = document.querySelector(".bx-right-arrow-alt");

  leftArrow.addEventListener("click", () => {
    dealCarocel.scrollBy({ left: -600, behavior: "smooth" });
  });
  rightArrow.addEventListener("click", () => {
    dealCarocel.scrollBy({ left: 600, behavior: "smooth" });
  });
}
weekendDeals();

// <!-- -------------------------------our produt quality -------------------------------->
function produtQuality() {
  const quality = document.querySelector(".product-quality-carocel");
  const qualityP = document.querySelector(".product-quality");

  fetch("JSONS/qualityProduct.json")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
        const qualityList = document.createElement("div");
        qualityList.className = "quality-list";
        qualityList.innerHTML = `
                                <div class = 'lists'>
                                  <div class='bord'>
                                  <img src = '${element.image}' class='quality-image'>
                                  </div>
                                  <h3 class = 'quality-title'>${element.title}</h3>
                                  <p class = 'quality-about'> ${element.about}</p>
                                </div>  
                              `;
        quality.append(qualityList);
      });
      // moving middle text to center
      const qualityTitle = document.querySelectorAll(".quality-title");
      qualityTitle.forEach((element, index) => {
        if (index === 1) {
          element.style.marginLeft = "-30px";
        }
      });
      // changing border position to bottom===========================
      const bord = document.querySelectorAll(".bord");
      bord.forEach((element, index) => {
        if (index === 1) {
          element.style.borderTop = "5px dashed chocolate";
          element.style.borderBottom = "none";
        }
      });

      // creating ling through the carocel==========================================
      const dashes = document.createElement("div");
      dashes.className = "dashes";
      qualityP.append(dashes);
    });
}
produtQuality();

function showingProductCategories() {
  const productBtn = document.querySelectorAll(".product-btn");
  let product = [];
  let currentProduct = 0;
  const items = 8;

  productBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      // if(index === 0){
      //   btn[0].style.color = 'green'
      //   btn[1].style.color = 'black'
      //   btn[2].style.color = 'black'
      //   btn[3].style.color = 'black'
      // }
      // else if(index === 1){
      //   btn[0].style.color = 'black'
      //   btn[1].style.color = 'green'
      //   btn[2].style.color = 'black'
      //   btn[3].style.color = 'black'
      // }
      // else if(index === 2){
      //   btn[0].style.color = 'black'
      //   btn[1].style.color = 'black'
      //   btn[2].style.color = 'green'
      //   btn[3].style.color = 'black'
      // }
      // else if(index === 3){
      //   btn[0].style.color = 'black'
      //   btn[1].style.color = 'black'
      //   btn[2].style.color = 'black'
      //   btn[3].style.color = 'green'
      // }
      const file = btn.dataset.json;
      fetch(file)
        .then((response) => response.json())
        .then((data) => {
          // displaying all prodcut
          product = data;
          console.log(file);
          // reset  to first 8
          currentProduct = 0;
          showingPage();
          showPagination();
        })
        .catch((error) => console.log(error));
    });
    function showingPage() {
      let allProduct = document.querySelector(".all-product");
      let start = currentProduct * items;
      let end = start + items;
      allProduct.innerHTML = "";
      // displaying only 8 items
      let item = product.slice(start,end);
      item.forEach((element) => {
        allProduct.innerHTML += `<div class = 'product-list'>
              <i class='bx bxs-heart'></i>
              <div class='ima'>
                <img src = '${element.image}' class ='product-image'>
              </div>
              <h3 class='product-rate'>${element.rate}  <span>4.5</span></h3>
              <h3 class='product-name'>${element.name}</h3>
              <h3 class='product-price'>GH ${element.price}.04</h3>

              <div class='show-likes'>
                <i class='bx bx-copy' ></i>
                <i class='bx bx-refresh'></i>
                <i class='bx bx-cart'></i>
              </div>
            </div>`;
      });
      // =========================================adding likes to nav like=================================
      const productList = document.querySelectorAll(".product-list");
      productList.forEach(productard=>{

      const produtName = productard.querySelector(".product-name").innerText;
        let liking = productard.querySelectorAll(".bxs-heart");
        likeCount = 0;
        liking.forEach((like) => {
          like.addEventListener("click", () => {
            if (like.classList.contains("active1")) {
              likeCount--;
              like.classList.remove("active1");
              like.style.color = "";
              console.log('you unliked',produtName);
            } else {
              likeCount++;
              like.classList.add("active1");
              like.style.color = "black";
              console.log('you liked',produtName);
            }
            localStorage.setItem("like", likeCount);
          });
        });
      // =================================================adding carts to the nav cart===========================================
      let carts = productard.querySelectorAll(".bx-cart");
      let count = 0;
      carts.forEach((cart) => {
        cart.addEventListener("click", () => {
          if (cart.classList.contains("active")) {
            count--;
            cart.classList.remove("active");
            cart.style.background = "";
            cart.style.color = "";
            console.log('you removed cart',produtName)
          } else {
            count++;
            cart.classList.add("active");
            cart.style.background = "rgb(18, 223, 18)";
            cart.style.color = "white";
            console.log('you cart',produtName)
          }

          localStorage.setItem("cart", count);
        });
      });
      })

    }

    function showPagination() {
      const pageBtn = document.querySelector(".pag-btn");
      pageBtn.innerHTML = "";
      let totalPage = Math.ceil(product.length / items);

      for (let i = 0; i < totalPage; i++) {
        pageBtn.innerHTML += `<button class='page-btn' data-page = '${i}'></button>`;
      }
      document.querySelectorAll(".page-btn").forEach((btn) =>
        btn.addEventListener("click", () => {
          currentProduct = Number(btn.dataset.page);
          showingPage();
        })
      );
    }
  });
}
showingProductCategories();

//---------------------------------------- fetching before payment----------------------

