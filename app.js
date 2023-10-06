import Cart from "./models/Cart.js";
import Products from "./models/Products.js";
import { fetchData } from "./utils/httpReq.js"

const productsNode = document.getElementById("products")
const cartListNode = document.getElementById("cart-list")
const totalPriceNode = document.getElementById("total-price").querySelector("span");
async function render() {
    const productsData = await fetchData();
    const cartInstance = new Cart(cartListNode , totalPriceNode )
    const productInstance = new Products(productsNode , productsData , cartInstance);
    productInstance.showProducts();
}

document.addEventListener("DOMContentLoaded" , render)
