import Products from "./products";

function Home() {
    return (
        <>
            <div className="card  text-white" style={{ border: 'none', height: '645px', backgroundColor: '#bcbdbf' }}>
                {/* <img src="https://c.wallhere.com/photos/a7/3c/Monika_Jagaciak_women_model-795487.jpg!d" className="card-img object-fit-contain"  height='100%' alt="..."/>
                    <div className="card-img-overlay d-flex flex-column justify-content-center">
                        <h5 className="card-title display-3 fw-bolder">NEW SEASON ARRIVALS</h5>
                        <p className="card-text fs-2 lead">CHECK OUT ALL THE TRENDS</p>
                    </div> */}
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="https://img.freepik.com/free-photo/pretty-young-stylish-sexy-woman-pink-luxury-dress-summer-fashion-trend-chic-style-sunglasses-blue-studio-background-shopping-holding-paper-bags-talking-mobile-phone-shopaholic_285396-2957.jpg?w=2000" class="d-block w-100" alt="..."/>
                                <div class="carousel-caption d-none d-md-block">
                                    <h5 className="display-5 fw-bolder">NEW SEASON ARRIVALS</h5>
                                    <p className="fs-5 fw-bold">CHECK OUT ALL THE TRENDS.</p>
                                </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://wallpaperaccess.com/full/4827577.jpg" class="d-block w-100" alt="..."/>
                                <div class="carousel-caption d-none d-md-block">
                                    <h5></h5>
                                    <p></p>
                                </div>
                        </div>
                        <div class="carousel-item">
                            <img src="https://thehivenz.co.nz/wp-content/uploads/elementor/thumbs/welcome_to-the-hive-nz_shop_small_new_zealand-q3if1oo51l4qx2mlta3z42yaahee5rcda64aeimlfk.jpg" class="d-block w-100" alt="..."/>
                                <div class="carousel-caption d-none d-md-block">
                                    <h5></h5>
                                    <p></p>
                                </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <Products />
        </>
    );
}

export default Home;