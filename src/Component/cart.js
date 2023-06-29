import { useSelector } from "react-redux";
import ShowProduct from "./showProductCart";
import Slector from '../redux/selector'
import { useState,useMemo } from "react";
function Cart() {
    const productChecked = useSelector(Slector)
    const [productBuy,setProductBuy] = useState([])
    const total = useMemo(() => {
        let result = productBuy.reduce((pre,curr) => {
            return pre + curr.price * curr.number
        },0)
        return result.toFixed(2)
    },[productBuy])
    return (
        <div className="container-fluid py-5">
            <div className="row">
                {
                    productChecked.map((product) => {
                        return <ShowProduct setProductBuy = {setProductBuy} key={product.id} product={product} />
                    })
                }

                {
                    total ? 
                    (
                        <div className="col-12 py-3 d-flex justify-content-evenly align-items-center">
                           <h3>Số tiền cần thanh toán: ${total}</h3> 
                           <button type="button" class="btn btn-danger">Buy</button>
                        </div>
                    ):false

                }

            </div>
        </div>
    );
}

export default Cart;