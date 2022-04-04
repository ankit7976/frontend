import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getProductDetailsById } from '../../actions';
import { addToCart } from '../../actions/cart.action';
import Layout from '../../components/Layout'
import { genratefileName } from '../../urlConfig';
import { useNavigate } from "react-router-dom";


const ProductDetailsPage = (props) => {
    const product = useSelector(state => state.product)
    const dispatch = useDispatch();
    const { productId } = useParams();
    let navigate = useNavigate();
    useEffect(() => {
        console.log(productId)
        const payload = {
            productId
        }
        dispatch(getProductDetailsById(payload))

    }, [productId])

    if (Object.keys(product.productDetails).length == 0) {
        return null;
    }
    const item = product.productDetails;


    return (
         

            <section className="ec-page-content section-space-p">
                <div className="container">
                    <div className="row">
                        <div className="ec-pro-rightside ec-common-rightside col-lg-12 col-md-12">


                            <div className="single-pro-block">
                                <div className="single-pro-inner">
                                    <div className="row">
                                        <div className="single-pro-img single-pro-img-no-sidebar">
                                            <div className="single-product-scroll">
                                                <div className="single-product-cover">
                                                    {item.productPictures.map((img, index) =>

                                                        <div key={index} className="single-slide zoom-image-hover">
                                                            <img className="img-responsive" src={genratefileName(img.img)}
                                                                alt="" />
                                                        </div>

                                                    )}


                                                </div>
                                                <div className="single-nav-thumb">


                                                    {item.productPictures.map((img, index) =>

                                                        <div key={index} className="single-slide">
                                                            <img className="img-responsive" src={genratefileName(img.img)}
                                                                alt="" />
                                                        </div>

                                                    )}


                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-pro-desc single-pro-desc-no-sidebar">
                                            <div className="single-pro-content">
                                                <h5 className="ec-single-title">{item.name}</h5>
                                                <div className="ec-single-rating-wrap">
                                                    <div className="ec-single-rating">
                                                        <i className="ecicon eci-star fill"></i>
                                                        <i className="ecicon eci-star fill"></i>
                                                        <i className="ecicon eci-star fill"></i>
                                                        <i className="ecicon eci-star fill"></i>
                                                        <i className="ecicon eci-star-o"></i>
                                                    </div>

                                                </div>
                                                <br />
                                                <div className="ec-single-desc">{item.description}</div>

                                                <div className="ec-single-sales">
                                                    <div className="ec-single-sales-inner">
                                                        <div className="ec-single-sales-title">sales accelerators</div>
                                                        <div className="ec-single-sales-visitor">real time <span>24</span> visitor
                                                            right now!</div>
                                                        <div className="ec-single-sales-progress">
                                                            <span className="ec-single-progress-desc">Hurry up!left 29 in
                                                                stock</span>
                                                            <span className="ec-single-progressbar"></span>
                                                        </div>
                                                        <div className="ec-single-sales-countdown">
                                                            <div className="ec-single-countdown"><span
                                                                id="ec-single-countdown"></span></div>
                                                            <div className="ec-single-count-desc"> {item.offer} % off</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ec-single-price-stoke">
                                                    <div className="ec-single-price">
                                                        <span className="ec-single-ps-title">As low as</span>
                                                        <span className="new-price">₹ {item.price}</span>
                                                    </div>
                                                    <div className="ec-single-stoke">
                                                        <span className="ec-single-ps-title">IN STOCK</span>
                                                        <span className="ec-single-sku">{item.quantity}</span>
                                                    </div>
                                                </div>

                                                <div className="ec-single-qty">
                                                    <div className="qty-plus-minus">
                                                        <input className="qty-input" type="text" name="ec_qtybtn" defaultValue="1" />
                                                    </div>
                                                    <div className="ec-single-cart ">
                                                        <button className="btn btn-primary" onClick={() => {
                                                            const { _id, name, price } = item;
                                                            const img = item.productPictures[0].img;
                                                            dispatch(addToCart({ _id, name, price, img }));
                                                            navigate('/cart')

                                                        }}>Add To Cart</button>
                                                    </div>
                                                    <div className="ec-single-wishlist">
                                                        <a className="ec-btn-group wishlist" title="Wishlist"><img
                                                            src="assets/images/icons/wishlist.svg" className="svg_img pro_svg"
                                                            alt="" /></a>
                                                    </div>
                                                    <div className="ec-single-quickview">
                                                        <a href="#" className="ec-btn-group quickview" data-link-action="quickview"
                                                            title="Quick view" data-bs-toggle="modal"
                                                            data-bs-target="#ec_quickview_modal"><img
                                                                src="assets/images/icons/quickview.svg" className="svg_img pro_svg"
                                                                alt="" /></a>
                                                    </div>
                                                </div>
                                                <div className="ec-single-social">
                                                    <ul className="mb-0">
                                                        <li className="list-inline-item facebook"><a href="#"><i
                                                            className="ecicon eci-facebook"></i></a></li>
                                                        <li className="list-inline-item twitter"><a href="#"><i
                                                            className="ecicon eci-twitter"></i></a></li>
                                                        <li className="list-inline-item instagram"><a href="#"><i
                                                            className="ecicon eci-instagram"></i></a></li>
                                                        <li className="list-inline-item youtube-play"><a href="#"><i
                                                            className="ecicon eci-youtube-play"></i></a></li>
                                                        <li className="list-inline-item behance"><a href="#"><i
                                                            className="ecicon eci-behance"></i></a></li>
                                                        <li className="list-inline-item whatsapp"><a href="#"><i
                                                            className="ecicon eci-whatsapp"></i></a></li>
                                                        <li className="list-inline-item plus"><a href="#"><i
                                                            className="ecicon eci-plus"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="ec-single-pro-tab">
                                <div className="ec-single-pro-tab-wrapper">
                                    <div className="ec-single-pro-tab-nav">
                                        <ul className="nav nav-tabs">
                                            <li className="nav-item">
                                                <a className="nav-link active" data-bs-toggle="tab"
                                                    data-bs-target="#ec-spt-nav-details" role="tablist">Detail</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#ec-spt-nav-info"
                                                    role="tablist">More Information</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#ec-spt-nav-review"
                                                    role="tablist">Reviews</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="tab-content  ec-single-pro-tab-content">
                                        <div id="ec-spt-nav-details" className="tab-pane fade show active">
                                            <div className="ec-single-pro-tab-desc">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                                    Lorem Ipsum has been the industry's standard dummy text ever since the
                                                    1500s, when an unknown printer took a galley of type and scrambled it to
                                                    make a type specimen book. It has survived not only five centuries, but also
                                                    the leap into electronic typesetting, remaining essentially unchanged.
                                                </p>
                                                <ul>
                                                    <li>Any Product types that You want - Simple, Configurable</li>
                                                    <li>Downloadable/Digital Products, Virtual Products</li>
                                                    <li>Inventory Management with Backordered items</li>
                                                    <li>Flatlock seams throughout.</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div id="ec-spt-nav-info" className="tab-pane fade">
                                            <div className="ec-single-pro-tab-moreinfo">
                                                <ul>
                                                    <li><span>Weight</span> 1000 g</li>
                                                    <li><span>Dimensions</span> 35 × 30 × 7 cm</li>
                                                    <li><span>Color</span> Black, Pink, Red, White</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div id="ec-spt-nav-review" className="tab-pane fade">
                                            <div className="row">
                                                <div className="ec-t-review-wrapper">
                                                    <div className="ec-t-review-item">
                                                        <div className="ec-t-review-avtar">
                                                            <img src="assets/images/review-image/1.jpg" alt="" />
                                                        </div>
                                                        <div className="ec-t-review-content">
                                                            <div className="ec-t-review-top">
                                                                <div className="ec-t-review-name">Jeny Doe</div>
                                                                <div className="ec-t-review-rating">
                                                                    <i className="ecicon eci-star fill"></i>
                                                                    <i className="ecicon eci-star fill"></i>
                                                                    <i className="ecicon eci-star fill"></i>
                                                                    <i className="ecicon eci-star fill"></i>
                                                                    <i className="ecicon eci-star-o"></i>
                                                                </div>
                                                            </div>
                                                            <div className="ec-t-review-bottom">
                                                                <p>Lorem Ipsum is simply dummy text of the printing and
                                                                    typesetting industry. Lorem Ipsum has been the industry's
                                                                    standard dummy text ever since the 1500s, when an unknown
                                                                    printer took a galley of type and scrambled it to make a
                                                                    type specimen.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ec-t-review-item">
                                                        <div className="ec-t-review-avtar">
                                                            <img src="assets/images/review-image/2.jpg" alt="" />
                                                        </div>
                                                        <div className="ec-t-review-content">
                                                            <div className="ec-t-review-top">
                                                                <div className="ec-t-review-name">Linda Morgus</div>
                                                                <div className="ec-t-review-rating">
                                                                    <i className="ecicon eci-star fill"></i>
                                                                    <i className="ecicon eci-star fill"></i>
                                                                    <i className="ecicon eci-star fill"></i>
                                                                    <i className="ecicon eci-star-o"></i>
                                                                    <i className="ecicon eci-star-o"></i>
                                                                </div>
                                                            </div>
                                                            <div className="ec-t-review-bottom">
                                                                <p>Lorem Ipsum is simply dummy text of the printing and
                                                                    typesetting industry. Lorem Ipsum has been the industry's
                                                                    standard dummy text ever since the 1500s, when an unknown
                                                                    printer took a galley of type and scrambled it to make a
                                                                    type specimen.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="ec-ratting-content">
                                                    <h3>Add a Review</h3>
                                                    <div className="ec-ratting-form">
                                                        <form action="#">
                                                            <div className="ec-ratting-star">
                                                                <span>Your rating:</span>
                                                                <div className="ec-t-review-rating">
                                                                    <i className="ecicon eci-star fill"></i>
                                                                    <i className="ecicon eci-star fill"></i>
                                                                    <i className="ecicon eci-star-o"></i>
                                                                    <i className="ecicon eci-star-o"></i>
                                                                    <i className="ecicon eci-star-o"></i>
                                                                </div>
                                                            </div>
                                                            <div className="ec-ratting-input">
                                                                <input name="your-name" placeholder="Name" type="text" />
                                                            </div>
                                                            <div className="ec-ratting-input">
                                                                <input name="your-email" placeholder="Email*" type="email"
                                                                    required />
                                                            </div>
                                                            <div className="ec-ratting-input form-submit">
                                                                <textarea name="your-commemt"
                                                                    placeholder="Enter Your Comment"></textarea>
                                                                <button className="btn btn-primary" type="submit"
                                                                    value="Submit">Submit</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

      

    )
}

export default ProductDetailsPage