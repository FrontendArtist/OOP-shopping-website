class Display {
    constructor(cartList , products){
        this.cartList = cartList;
        this.cartList.addEventListener("click", this);
        this.products = products;
    }
    showProducts(){
        this.toShow = [...new Set(this.products)]
        this.cartList.innerHTML=""
        this.toShow.forEach(product => {
            const quantity = this.products.filter(p => p.id === product.id).length
            this.createCard(product , quantity)
            
        });
        this.showTotalPrice(this.totalPrice)
    }
    createCard(product , qty){
        const cardEle = document.createElement("div")

        const imgEle = this.productImg(product)
        const infoEle = this.productInfo(product)
        
        cardEle.innerHTML = imgEle;
        cardEle.innerHTML += infoEle;
        if (this.constructor.name=== "Cart") {
            const controllEle = this.productControll(product , qty)
            cardEle.innerHTML += controllEle;
        }

        this.cartList.appendChild(cardEle);
    }
    productImg(data) {
        const { image, alt } = data;
        const imgJSX = `<img src=${image} alt=${alt}/>`;
        return imgJSX;
      }
}
export default Display;