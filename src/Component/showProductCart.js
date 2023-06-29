import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faL, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from "react-redux";
import { productCart } from "../redux/productSlice";
import { useState } from "react";

const ShowProduct = ({ product,setProductBuy }) => {
    const [check,setCheck] = useState(false)
    const dispatch = useDispatch()
    const handleCheck = () => {
        if(!check) {
            setProductBuy(pre => [...pre, product])
        } else {
           setProductBuy((pre)=> {
            return pre.filter((x)=> x.id !== product.id )
           })
        }
        setCheck(pre => !pre)
    }
    return (
        <div key={product.id} className="col-12 mb-5">
            <div className="card" >
                <div className="row g-0 align-items-center">
                    <div className="col-md-4 text-center d-flex justify-content-evenly align-items-center">
                        <input class="form-check-input" type="checkbox" checked = {check} onChange={handleCheck}/>
                        <img style={{ height: '200px', width: '180px' }} src={product.image} alt="..." />
                    </div>
                    <div className="col-md-8 text-center-sm">
                        <div className="card-body">
                            <h5 className="card-title display-6 fw-bold">{product.title}</h5>
                            <p className="card-text fw-bold fs-4">{product.number} x ${product.price} = ${product.number * product.price}</p>
                            <button type="button" className="btn btn-outline-secondary" onClick={() => { dispatch(productCart.actions.delCart(product.id)) }} ><FontAwesomeIcon icon={faMinus} /></button>
                            <button type="button" className="btn btn-outline-secondary ms-3" onClick={() => { dispatch(productCart.actions.addCart(product)) }}><FontAwesomeIcon icon={faPlus} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ShowProduct