var Cart = []
export function AddtoCart(product) {
    product.price = product.price * product.quantity + 8
    Cart.push(product)
    console.log(Cart)
}
export function RemoveFromCart(product) {
    Cart.pop()
}
export function GetCart(){
    return Cart
}