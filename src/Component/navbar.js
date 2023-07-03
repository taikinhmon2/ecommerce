import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faRightToBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { Link} from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
    const productStore = useSelector((state) => state.productCart)
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container d-flex justify-content-between">
                    <Link className="navbar-brand fs-3 font-monospace fw-bolb" to="/ecommerce">Luân-Jerry FASHION</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <Link  className="nav-link" aria-current="page" to="/ecommerce">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/ecommerce/products">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/ecommerce/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/ecommerce/contact">Contact</Link>
                            </li>

                        </ul>
                        <div className="buttons">
                            <Link to="#" className="btn  btn-outline-secondary " tabIndex="-1" role="button" aria-disabled="true"><FontAwesomeIcon className="me-2" icon={faRightToBracket} />Login</Link>
                            <Link to="#" className="btn btn-outline-secondary mx-3" tabIndex="-1" role="button" aria-disabled="true"><FontAwesomeIcon className="me-2" icon={faUserPlus} />Register</Link>
                            <Link to="/ecommerce/cart" className="btn btn-outline-secondary " tabIndex="-1" role="button" aria-disabled="true"><FontAwesomeIcon className="me-2" icon={faCartShopping} />Card({productStore.length})</Link>
                        </div>
                    </div>

                </div>
            </nav>

        </>
    );
}

export default Navbar;