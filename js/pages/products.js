function renderProductList() {
  let products = getLocalStorage("PRODUCT_LIST");
  let html = "";
  let saleHTML = "";
  let priceHTML = "";
  for (let i = 0; i < products?.length; i++) {
    saleHTML =
      products[i].sale !== 0
        ? `<div class='sale'>- ${products[i].sale}%</div>`
        : "";

    priceHTML =
      products[i].sale === 0
        ? `<span class="sale-price me-1">${products[
            i
          ].price.toLocaleString()} VND</span>`
        : `<span class="sale-price me-1">
            ${(
              (products[i].price * (100 - products[i].sale)) /
              100
            ).toLocaleString()} VND</span>
        <span class="origin-price">${products[
          i
        ].price.toLocaleString()} VND</span>`;

    html += `<div class="col-3 mt-5">
      <div class="card-product">
          <div class="images mb-3">
              <a href="/product-detail.html?productId=${products[i].id}">
                  <img src="./images/${products[i].image}" alt="">
              </a>
              ${saleHTML}
              <div class="option d-flex justify-content-evenly align-items-center">
                  <div class="love">
                      <button>
                          <i class="fa-regular fa-heart"></i>
                      </button>
                  </div>
                  <div class="line-product"></div>
                  <div class="search">
                      <button>
                          <i class="fa-solid fa-magnifying-glass"></i>
                      </button>
                  </div>
              </div>
          </div>
          <div class="content">
              <h3 class="product-name">${
                products[i].productName.substr(0, 60) + "..."
              }</h3>
              <div class="price">
                  ${priceHTML}
              </div>
              <div class="add-to-cart">
                  <button>ADD TO CART</button>
              </div>
          </div>
      </div>
  </div>`;
  }

  document.getElementById("productList").innerHTML = html;
}

window.onload = function () {
  renderProductList();
};
