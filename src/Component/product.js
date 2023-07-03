import { useParams,Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import {useDispatch} from 'react-redux'


import { productCart } from "../redux/productSlice";
function Product() {
    const dispatch =useDispatch()
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)
    let componentMounted = true
    useEffect(() => {
        const getProducts = async () => {
            if (componentMounted) {
                setLoading(true)
                const response = await fetch(`https://fakestoreapi.com/products/${id}`)
                setProduct(await response.json())
                setLoading(false)
            }
        }

        getProducts()

        return () => {
            componentMounted = false
        }

    }, [])

    const Loading = () => {
        return (
            <>
                <div className="row">
                    <div className="col-md-6 col-12">
                        <Skeleton height={450} />
                    </div>
                    <div className="col-md-6 col-12" style={{ lineHeight: 2 }}>
                        <Skeleton height={50} width={300} />
                        <Skeleton height={75} />
                        <Skeleton height={25} width={150} />
                        <Skeleton height={50} />
                        <Skeleton height={150} />
                        <div className="d-flex">
                            <Skeleton height={50} width={100} />
                            <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
                        </div>
                    </div>
                </div>

            </>
        )

    }

    const ShowPr = () => {
        return (
            <div className="container py-5 my-5" style={{ height: '500px' }}>
                <div className="card" style={{ border: 'none' }}>
                    <div className="row g-0" style={{ height: '100%', alignItems: 'center' }}>
                        <div className="col-lg-4">
                            <img className="object-fit-contain rounded-start" src={product.image} alt={product.title} height='500px' width='100%' />
                        </div>
                        <div className="col-lg-8 px-5">
                            <div className="card-body">
                                <h5 className="card-title text-secondary font-monospace">{product.category && product.category.toUpperCase()}</h5>
                                <h5 className="card-title display-5 lead">{product.title}</h5>
                                <p className="card-text lead fw-bold">Rating {product.rating && product.rating.rate} <FontAwesomeIcon icon={faStar} /></p>
                                <p className="card-text display-5 fw-bolder">$  {product.price}</p>
                                <p className="card-text">{product.description}</p>
                                <button type="button" className="btn btn-outline-secondary" onClick={() => {dispatch(productCart.actions.addCart(product))}}>Add to Cart</button>
                                <Link to="/ecommerce/cart" className="btn  btn-dark ms-3 " tabIndex="-1" role="button" aria-disabled="true">Go to Cart</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            {loading ? <Loading /> : <ShowPr />}
        </>
    );
}

export default Product;