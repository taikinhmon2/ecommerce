function Slector(state) {
    localStorage.setItem('product', JSON.stringify(state.productCart))
    return state.productCart
}

export default Slector;