import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

function Products() {

    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)
    let componentMounted = true

    useEffect(() => {
        const getProducts = async () => {
            if (componentMounted) {
                setLoading(true)
                const response = await fetch('https://fakestoreapi.com/products')
                setData(await response.clone().json())
                setFilter(await response.json())
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
                
                    <div className="col-lg-3 col-md-4 ">
                        <Skeleton height={450}  />
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <Skeleton height={450} />
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <Skeleton height={450}  />
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <Skeleton height={450}  />
                    </div>

               

            </>
        )

    }

    const filterProducts = (cat) => {
        const newProducts = data.filter((x) => {
            return x.category === cat
        })
        setFilter(newProducts)
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="btnFilter d-flex justify-content-center p-3">
                    <button type="button" className="btn btn-outline-secondary me-2" onClick={() => { setFilter(data) }}>All</button>
                    <button type="button" className="btn btn-outline-secondary me-2" onClick={() => filterProducts("men's clothing")} >Men's Clothing</button>
                    <button type="button" className="btn btn-outline-secondary me-2" onClick={() => filterProducts("women's clothing")}>Women's Clothing</button>
                    <button type="button" className="btn btn-outline-secondary me-2" onClick={() => filterProducts("jewelery")}>Jewelery</button>
                    <button type="button" className="btn btn-outline-secondary me-2" onClick={() => filterProducts("electronics")}>Electronic</button>
                </div>
                {filter.map((product) => {
                    return (
                        
                            <div key={product.id} className="col-md-4 col-lg-3">
                                <div className="card h-100 p-4 text-center">
                                    <img className='' src={product.image} alt={product.title} height='250px' />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title.substring(0, 12) + '...'}</h5>
                                        <p className="card-text lead fw-bold">$  {product.price}</p>
                                        <Link to={'/products/' + product.id} className="btn btn-outline-secondary">Buy Now</Link>
                                    </div>
                                </div>
                            </div>
                        
                    )
                })}
            </>
        )
    }
    return (
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-12 text-center fs-3 fw-bolder lead">
                    Latest Products
                    <hr />
                </div>
            </div>
            <div className="row g-3">
                {loading ? <Loading /> : <ShowProducts />}
            </div>
        </div>
    );
}

export default Products;