import Display from "./Display.js";

class Cart extends Display{
    constructor(cartList , totalPrice){
        super(cartList)
        this.totalPrice = totalPrice
        this.products  = []
        this.toShow = []
    }

    productInfo(data){
        const {name , price} = data;
        const infoJSX = `
        <div id="cart-info">
            <h3>${name}</h3>
            <p>${price} $</p>
        </div>
        `
        return infoJSX;
    }
    productControll(data , qty){
        const {id} = data;
        const controllJSX =`
    <div id="cart-control">
        <div>
            <button data-id=${id} id="dec">-</button>
            <span>${qty}</span>
            <button data-id=${id} id="inc">+</button>
        </div>
        <button data-id=${id} id="remove">Remove</button>
    </div>
        `
        return controllJSX;
    }
    showTotalPrice(price){
        let total = 0;
        this.products.forEach(item => {
            total+=item.price;
        } )
        price.innerHTML= ` ${total} $`;
    }
    handleEvent(){
        const tagName = event.target.tagName;
        const id = event.target.dataset.id;
        const type = event.target.innerText;
        if (tagName !== "BUTTON") {
            return ;
        }
        switch (type) {
            case "+":
                this.increase(id)
                break;
        
            case "-":
                this.decrease(id)
                break;
        
            case "Remove":
                this.remove(id)
                break;
        }
    }
    increase(id){
        const product = this.products.find(p => p.id === +id)
        this.products.push(product)
        this.showProducts();
    }
    decrease(id){
        const index = this.products.findIndex(p => p.id === +id)
        this.products.splice(index , 1)
        this.showProducts()
    }
    remove(id){
        const newProducts = this.products.filter(p => p.id !== +id)
        this.products = newProducts;
        this.showProducts()
    }
}

export default Cart; 