function getQueryParams(url) {
  const paramArr = url.slice(url.indexOf("?") + 1).split("&");
  const params = {};
  paramArr.map((param) => {
    const [key, val] = param.split("=");
    params[key] = decodeURIComponent(val);
  });
  return params;
}

const { productId } = getQueryParams(location.href);
const products = getLocalStorage("PRODUCT_LIST");
const categoryList = getLocalStorage("CATEGORY");

const productDetail = products.find((item) => item.id === Number(productId));
const categoryName = categoryList.find(
  (item) => item.id === Number(productDetail.categoryId)
);

document.getElementById("breadcrumb-end-point").innerHTML = categoryName.name;
document.getElementById("imgDetail").src = `./images/${productDetail.image}`;
document.getElementById("productName").innerHTML = productDetail.productName;
document.getElementById("priceDetail").innerHTML =
  productDetail.price.toLocaleString() + " VND";
document.getElementById("short-description").innerHTML =
  productDetail.shortDescription;

function changeQuantity(bool) {
  let quantity = +document.getElementById("quantity").innerHTML;
  if (bool) {
    quantity += 1;
  } else {
    quantity > 0 && (quantity = quantity - 1);
  }
  document.getElementById("quantity").innerHTML = quantity;
}
console.log(productDetail);
