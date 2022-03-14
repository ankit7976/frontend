import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategory } from '../../actions';

const Header = () => {

    const dispatch = useDispatch();
    const category = useSelector(state => state.category)
    
    useEffect(()=>{
        dispatch(getAllCategory())
    },[])

    
  const randerCategories = (categories) => {

    const myCategories = [];
    for (let category of categories) {
      myCategories.push(
        <li key={category.name}>
       
            {category.parentId ?   <a href={category.slug}> {category.name}</a> : <a href="javascript:void(0)">{category.name}</a>}

          {category.children.length > 0 ? (<ul> {randerCategories(category.children)} </ul>) : null}
        </li>
      )
    }

    return myCategories

  }
 

  return (
    <header class="ec-header">
        

        <div class="header-top">
        <div class="container">
            <div class="row align-items-center">
           
                <div class="col text-left header-top-left d-none d-lg-block">
                    <div class="header-top-social">
                        <span class="social-text text-upper">Follow us on:</span>
                        <ul class="mb-0">
                            <li class="list-inline-item"><a class="hdr-facebook" href="#"><i class="ecicon eci-facebook"></i></a></li>
                            <li class="list-inline-item"><a class="hdr-twitter" href="#"><i class="ecicon eci-twitter"></i></a></li>
                            <li class="list-inline-item"><a class="hdr-instagram" href="#"><i class="ecicon eci-instagram"></i></a></li>
                            <li class="list-inline-item"><a class="hdr-linkedin" href="#"><i class="ecicon eci-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
                
                <div class="col text-center header-top-center">
                    <div class="header-top-message text-upper">
                        <span>Free Shipping</span>This Week Order Over - $75
                    </div>
                </div>
          
                <div class="col header-top-right d-none d-lg-block">
                    <div class="header-top-lan-curr d-flex justify-content-end">
                      
                        <div class="header-top-curr dropdown">
                            <button class="dropdown-toggle text-upper" data-bs-toggle="dropdown">Currency <i
                                    class="ecicon eci-caret-down" aria-hidden="true"></i></button>
                            <ul class="dropdown-menu">
                                <li class="active"><a class="dropdown-item" href="#">USD $</a></li>
                                <li><a class="dropdown-item" href="#">EUR €</a></li>
                            </ul>
                        </div>
                        
                        <div class="header-top-lan dropdown">
                            <button class="dropdown-toggle text-upper" data-bs-toggle="dropdown">Language <i
                                    class="ecicon eci-caret-down" aria-hidden="true"></i></button>
                            <ul class="dropdown-menu">
                                <li class="active"><a class="dropdown-item" href="#">English</a></li>
                                <li><a class="dropdown-item" href="#">Italiano</a></li>
                            </ul>
                        </div>
                        

                    </div>
                </div>
         
                <div class="col d-lg-none ">
                    <div class="ec-header-bottons">
                        
                        <div class="ec-header-user dropdown">
                            <button class="dropdown-toggle" data-bs-toggle="dropdown"><img
                                    src="assets/images/icons/user.svg" class="svg_img header_svg" alt="" /></button>
                            <ul class="dropdown-menu dropdown-menu-right">
                                <li><a class="dropdown-item" href="register.html">Register</a></li>
                                <li><a class="dropdown-item" href="checkout.html">Checkout</a></li>
                                <li><a class="dropdown-item" href="login.html">Login</a></li>
                            </ul>
                        </div>
                   
                        <a href="wishlist.html" class="ec-header-btn ec-header-wishlist">
                            <div class="header-icon"><img src="assets/images/icons/wishlist.svg"
                                    class="svg_img header_svg" alt="" /></div>
                            <span class="ec-header-count">4</span>
                        </a>
                        
                        <a href="#ec-side-cart" class="ec-header-btn ec-side-toggle">
                            <div class="header-icon"><img src="assets/images/icons/cart.svg"
                                    class="svg_img header_svg" alt="" /></div>
                            <span class="ec-header-count cart-count-lable">3</span>
                        </a>
                     
                        <a href="#ec-mobile-menu" class="ec-header-btn ec-side-toggle d-lg-none">
                            <img src="assets/images/icons/menu.svg" class="svg_img header_svg" alt="icon" />
                        </a>
                        
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    



        <div class="ec-header-bottom d-none d-lg-block">
        <div class="container position-relative">
            <div class="row">
                <div class="ec-flex">
                    
                    <div class="align-self-center">
                        <div class="header-logo">
                            <a href="index.html"><img src="assets/images/logo/logo.png" alt="Site Logo" /><img
                                    class="dark-logo" src="assets/images/logo/dark-logo.png" alt="Site Logo"
                                    style={{display: "none;"}} /></a>
                        </div>
                    </div>
                   
                    <div class="align-self-center">
                        <div class="header-search">
                            <form class="ec-btn-group-form" action="#">
                                <input class="form-control ec-search-bar" placeholder="Search products..." type="text" />
                                <button class="submit" type="submit"><img src="assets/images/icons/search.svg"
                                        class="svg_img header_svg" alt="" /></button>
                            </form>
                        </div>
                    </div>
                    
                    <div class="align-self-center">
                        <div class="ec-header-bottons">

                            
                            <div class="ec-header-user dropdown">
                                <button class="dropdown-toggle" data-bs-toggle="dropdown"><img
                                        src="assets/images/icons/user.svg" class="svg_img header_svg" alt="" /></button>
                                <ul class="dropdown-menu dropdown-menu-right">
                                    <li><a class="dropdown-item" href="register.html">Register</a></li>
                                    <li><a class="dropdown-item" href="checkout.html">Checkout</a></li>
                                    <li><a class="dropdown-item" href="login.html">Login</a></li>
                                </ul>
                            </div>
                            
                            <a href="wishlist.html" class="ec-header-btn ec-header-wishlist">
                                <div class="header-icon"><img src="assets/images/icons/wishlist.svg"
                                        class="svg_img header_svg" alt="" /></div>
                                <span class="ec-header-count">4</span>
                            </a>
                          
                            <a href="#ec-side-cart" class="ec-header-btn ec-side-toggle">
                                <div class="header-icon"><img src="assets/images/icons/cart.svg"
                                        class="svg_img header_svg" alt="" /></div>
                                <span class="ec-header-count cart-count-lable">3</span>
                            </a>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>   


    <div class="ec-side-cart-overlay"></div>
    <div id="ec-side-cart" class="ec-side-cart">
        <div class="ec-cart-inner">
            <div class="ec-cart-top">
                <div class="ec-cart-title">
                    <span class="cart_title">My Cart</span>
                    <button class="ec-close">×</button>
                </div>
                <ul class="eccart-pro-items">
                    <li>
                        <a href="product-left-sidebar.html" class="sidekka_pro_img"><img
                                src="assets/images/product-image/6_1.jpg" alt="product" /></a>
                        <div class="ec-pro-content">
                            <a href="product-left-sidebar.html" class="cart_pro_title">T-shirt For Women</a>
                            <span class="cart-price"><span>$76.00</span> x 1</span>
                            <div class="qty-plus-minus">
                                <input class="qty-input" type="text" name="ec_qtybtn" value="1" />
                            </div>
                            <a href="javascript:void(0)" class="remove">×</a>
                        </div>
                    </li>
                    <li>
                        <a href="product-left-sidebar.html" class="sidekka_pro_img"><img
                                src="assets/images/product-image/12_1.jpg" alt="product" /></a>
                        <div class="ec-pro-content">
                            <a href="product-left-sidebar.html" class="cart_pro_title">Women Leather Shoes</a>
                            <span class="cart-price"><span>$64.00</span> x 1</span>
                            <div class="qty-plus-minus">
                                <input class="qty-input" type="text" name="ec_qtybtn" value="1" />
                            </div>
                            <a href="javascript:void(0)" class="remove">×</a>
                        </div>
                    </li>
                    <li>
                        <a href="product-left-sidebar.html" class="sidekka_pro_img"><img
                                src="assets/images/product-image/3_1.jpg" alt="product" /></a>
                        <div class="ec-pro-content">
                            <a href="product-left-sidebar.html" class="cart_pro_title">Girls Nylon Purse</a>
                            <span class="cart-price"><span>$59.00</span> x 1</span>
                            <div class="qty-plus-minus">
                                <input class="qty-input" type="text" name="ec_qtybtn" value="1" />
                            </div>
                            <a href="javascript:void(0)" class="remove">×</a>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="ec-cart-bottom">
                <div class="cart-sub-total">
                    <table class="table cart-table">
                        <tbody>
                            <tr>
                                <td class="text-left">Sub-Total :</td>
                                <td class="text-right">$300.00</td>
                            </tr>
                            <tr>
                                <td class="text-left">VAT (20%) :</td>
                                <td class="text-right">$60.00</td>
                            </tr>
                            <tr>
                                <td class="text-left">Total :</td>
                                <td class="text-right primary-color">$360.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="cart_btn">
                    <a href="cart.html" class="btn btn-primary">View Cart</a>
                    <a href="checkout.html" class="btn btn-secondary">Checkout</a>
                </div>
            </div>
        </div>
    </div>
  
    <div class="sticky-header-next-sec ec-main-slider section section-space-pb">
        
    </div>

    <div class="ec-header-bottom d-lg-none">
        <div class="container position-relative">
            <div class="row ">

                
                <div class="col">
                    <div class="header-logo">
                        <a href="index.html"><img src="assets/images/logo/logo.png" alt="Site Logo" /><img
                                class="dark-logo" src="assets/images/logo/dark-logo.png" alt="Site Logo"
                                style={{display: "none"}} /></a>
                    </div>
                </div>
                 
                <div class="col">
                    <div class="header-search">
                        <form class="ec-btn-group-form" action="#">
                            <input class="form-control ec-search-bar" placeholder="Search products..." type="text" />
                            <button class="submit" type="submit" ><img src="assets/images/icons/search.svg"
                                    class="svg_img header_svg" alt="icon" /></button>
                        </form>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    
    <div id="ec-main-menu-desk" class="d-none d-lg-block sticky-nav">
        <div class="container position-relative">
            <div class="row">
                <div class="col-md-12 align-self-center">
                    <div class="ec-main-menu">
                        <ul>
                            
                            {category.categories.length > 0 ? randerCategories(category.categories) : null}

                            <li><a>Flights</a></li>
                            <li><a>Offer Zone</a></li>
                           
                            {/* <li class="dropdown position-static"><a href="javascript:void(0)">Categories</a>
                                <ul class="mega-menu d-block">
                                    <li class="d-flex">
                                        <ul class="d-block">
                                            <li class="menu_title"><a href="javascript:void(0)">Classic
                                                    Variation</a></li>
                                            <li><a href="shop-left-sidebar-col-3.html">Left sidebar 3 column</a>
                                            </li>
                                            <li><a href="shop-left-sidebar-col-4.html">Left sidebar 4 column</a>
                                            </li>
                                            <li><a href="shop-right-sidebar-col-3.html">Right sidebar 3 column</a>
                                            </li>
                                            <li><a href="shop-right-sidebar-col-4.html">Right sidebar 4 column</a>
                                            </li>
                                            <li><a href="shop-full-width.html">Full width 4 column</a></li>
                                        </ul>
                                        <ul class="d-block">
                                            <li class="menu_title"><a href="javascript:void(0)">Classic
                                                    Variation</a></li>
                                            <li><a href="shop-banner-left-sidebar-col-3.html">Banner left sidebar 3
                                                    column</a></li>
                                            <li><a href="shop-banner-left-sidebar-col-4.html">Banner left sidebar 4
                                                    column</a></li>
                                            <li><a href="shop-banner-right-sidebar-col-3.html">Banner right sidebar
                                                    3 column</a></li>
                                            <li><a href="shop-banner-right-sidebar-col-4.html">Banner right sidebar
                                                    4 column</a></li>
                                            <li><a href="shop-banner-full-width.html">Banner Full width 4 column</a>
                                            </li>
                                        </ul>
                                        <ul class="d-block">
                                            <li class="menu_title"><a href="javascript:void(0)">Columns
                                                    Variation</a></li>
                                            <li><a href="shop-full-width-col-3.html">3 Columns full width</a></li>
                                            <li><a href="shop-full-width-col-4.html">4 Columns full width</a></li>
                                            <li><a href="shop-full-width-col-5.html">5 Columns full width</a></li>
                                            <li><a href="shop-full-width-col-6.html">6 Columns full width</a></li>
                                            <li><a href="shop-banner-full-width-col-3.html">Banner 3 Columns</a>
                                            </li>
                                        </ul>
                                        <ul class="d-block">
                                            <li class="menu_title"><a href="javascript:void(0)">List Variation</a>
                                            </li>
                                            <li><a href="shop-list-left-sidebar.html">Shop left sidebar</a></li>
                                            <li><a href="shop-list-right-sidebar.html">Shop right sidebar</a></li>
                                            <li><a href="shop-list-banner-left-sidebar.html">Banner left sidebar</a>
                                            </li>
                                            <li><a href="shop-list-banner-right-sidebar.html">Banner right
                                                    sidebar</a></li>
                                            <li><a href="shop-list-full-col-2.html">Full width 2 columns</a></li>
                                        </ul>
                                    </li>
                                    
                                </ul>
                            </li> */}
                   
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    <div id="ec-mobile-menu" class="ec-side-cart ec-mobile-menu">
        <div class="ec-menu-title">
            <span class="menu_title">My Menu</span>
            <button class="ec-close">×</button>
        </div>
        <div class="ec-menu-inner">
            <div class="ec-menu-content">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="javascript:void(0)">Categories</a>
                        <ul class="sub-menu">
                            <li>
                                <a href="javascript:void(0)">Classic Variation</a>
                                <ul class="sub-menu">
                                    <li><a href="shop-left-sidebar-col-3.html">Left sidebar 3 column</a></li>
                                    <li><a href="shop-left-sidebar-col-4.html">Left sidebar 4 column</a></li>
                                    <li><a href="shop-right-sidebar-col-3.html">Right sidebar 3 column</a></li>
                                    <li><a href="shop-right-sidebar-col-4.html">Right sidebar 4 column</a></li>
                                    <li><a href="shop-full-width.html">Full width 4 column</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:void(0)">Classic Variation</a>
                                <ul class="sub-menu">
                                    <li><a href="shop-banner-left-sidebar-col-3.html">Banner left sidebar 3
                                            column</a></li>
                                    <li><a href="shop-banner-left-sidebar-col-4.html">Banner left sidebar 4
                                            column</a></li>
                                    <li><a href="shop-banner-right-sidebar-col-3.html">Banner right sidebar 3
                                            column</a></li>
                                    <li><a href="shop-banner-right-sidebar-col-4.html">Banner right sidebar 4
                                            column</a></li>
                                    <li><a href="shop-banner-full-width.html">Banner Full width 4 column</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:void(0)">Columns Variation</a>
                                <ul class="sub-menu">
                                    <li><a href="shop-full-width-col-3.html">3 Columns full width</a></li>
                                    <li><a href="shop-full-width-col-4.html">4 Columns full width</a></li>
                                    <li><a href="shop-full-width-col-5.html">5 Columns full width</a></li>
                                    <li><a href="shop-full-width-col-6.html">6 Columns full width</a></li>
                                    <li><a href="shop-banner-full-width-col-3.html">Banner 3 Columns</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:void(0)">List Variation</a>
                                <ul class="sub-menu">
                                    <li><a href="shop-list-left-sidebar.html">Shop left sidebar</a></li>
                                    <li><a href="shop-list-right-sidebar.html">Shop right sidebar</a></li>
                                    <li><a href="shop-list-banner-left-sidebar.html">Banner left sidebar</a></li>
                                    <li><a href="shop-list-banner-right-sidebar.html">Banner right sidebar</a></li>
                                    <li><a href="shop-list-full-col-2.html">Full width 2 columns</a></li>
                                </ul>
                            </li>
                            <li><a class="p-0" href="shop-left-sidebar-col-3.html"><img class="img-responsive"
                                        src="assets/images/menu-banner/1.jpg" alt="" /></a>
                            </li>
                        </ul>
                    </li>
                    <li><a href="javascript:void(0)">Products</a>
                        <ul class="sub-menu">
                            <li><a href="javascript:void(0)">Product page</a>
                                <ul class="sub-menu">
                                    <li><a href="product-left-sidebar.html">Product left sidebar</a></li>
                                    <li><a href="product-right-sidebar.html">Product right sidebar</a></li>
                                </ul>
                            </li>
                            <li><a href="javascript:void(0)">Product 360</a>
                                <ul class="sub-menu">
                                    <li><a href="product-360-left-sidebar.html">360 left sidebar</a></li>
                                    <li><a href="product-360-right-sidebar.html">360 right sidebar</a></li>
                                </ul>
                            </li>
                            <li><a href="javascript:void(0)">Product vodeo</a>
                                <ul class="sub-menu">
                                    <li><a href="product-video-left-sidebar.html">vodeo left sidebar</a></li>
                                    <li><a href="product-video-right-sidebar.html">vodeo right sidebar</a></li>
                                </ul>
                            </li>
                            <li><a href="javascript:void(0)">Product gallery</a>
                                <ul class="sub-menu">
                                    <li><a href="product-gallery-left-sidebar.html">Gallery left sidebar</a></li>
                                    <li><a href="product-gallery-right-sidebar.html">Gallery right sidebar</a></li>
                                </ul>
                            </li>
                            <li><a href="product-full-width.html">Product full width</a></li>
                            <li><a href="product-360-full-width.html">360 full width</a></li>
                            <li><a href="product-video-full-width.html">Video full width</a></li>
                            <li><a href="product-gallery-full-width.html">Gallery full width</a></li>
                        </ul>
                    </li>
                    <li><a href="javascript:void(0)">Others</a>
                        <ul class="sub-menu">
                            <li><a href="javascript:void(0)">Mail Confirmation</a>
                                <ul class="sub-menu">
                                    <li><a href="email-template-confirm-1.html">Mail Confirmation 1</a></li>
                                    <li><a href="email-template-confirm-2.html">Mail Confirmation 2</a></li>
                                    <li><a href="email-template-confirm-3.html">Mail Confirmation 3</a></li>
                                    <li><a href="email-template-confirm-4.html">Mail Confirmation 4</a></li>
                                    <li><a href="email-template-confirm-5.html">Mail Confirmation 5</a></li>
                                </ul>
                            </li>
                            <li><a href="javascript:void(0)">Mail Reset password</a>
                                <ul class="sub-menu">
                                    <li><a href="email-template-forgot-password-1.html">Reset password 1</a></li>
                                    <li><a href="email-template-forgot-password-2.html">Reset password 2</a></li>
                                    <li><a href="email-template-forgot-password-3.html">Reset password 3</a></li>
                                    <li><a href="email-template-forgot-password-4.html">Reset password 4</a></li>
                                    <li><a href="email-template-forgot-password-5.html">Reset password 5</a></li>
                                </ul>
                            </li>
                            <li><a href="javascript:void(0)">Mail Promotional</a>
                                <ul class="sub-menu">
                                    <li><a href="email-template-offers-1.html">Offer Mail 1</a></li>
                                    <li><a href="email-template-offers-2.html">Offer Mail 2</a></li>
                                    <li><a href="email-template-offers-3.html">Offer Mail 3</a></li>
                                    <li><a href="email-template-offers-4.html">Offer Mail 4</a></li>
                                    <li><a href="email-template-offers-5.html">Offer Mail 5</a></li>
                                    <li><a href="email-template-offers-6.html">Offer Mail 6</a></li>
                                    <li><a href="email-template-offers-7.html">Offer Mail 7</a></li>
                                    <li><a href="email-template-offers-8.html">Offer Mail 8</a></li>
                                </ul>
                            </li>
                            <li><a href="javascript:void(0)">Vendor Account Pages</a>
                                <ul class="sub-menu">
                                    <li><a href="vendor-dashboard.html">Vendor Dashboard</a></li>
                                    <li><a href="vendor-profile.html">Vendor Profile</a></li>
                                    <li><a href="vendor-uploads.html">Vendor Uploads</a></li>
                                    <li><a href="vendor-settings.html">Vendor Settings</a></li>
                                </ul>
                            </li>
                            <li><a href="javascript:void(0)">User Account Pages</a>
                                <ul class="sub-menu">
                                    <li><a href="user-profile.html">User Profile</a></li>
                                    <li><a href="user-history.html">User History</a></li>
                                    <li><a href="wishlist.html">Wishlist</a></li>
                                    <li><a href="track-order.html">Track Order</a></li>
                                    <li><a href="user-invoice.html">User Invoice</a></li>
                                </ul>
                            </li>
                            <li><a href="javascript:void(0)">Construction Pages</a>
                                <ul class="sub-menu">
                                    <li><a href="404-error-page.html">404 Error Page</a></li>
                                    <li><a href="under-maintenance.html">Maintenance Page</a></li>
                                    <li><a href="coming-soon.html">Comming Soon Page</a></li>
                                </ul>
                            </li>
                            <li><a href="javascript:void(0)">Vendor Catalog Pages</a>
                                <ul class="sub-menu">
                                    <li><a href="catalog-single-vendor.html">Catalog Single Vendor</a></li>
                                    <li><a href="catalog-multi-vendor.html">Catalog Multi Vendor</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href="javascript:void(0)">Pages</a>
                        <ul class="sub-menu">
                            <li><a href="about-us.html">About Us</a></li>
                            <li><a href="contact-us.html">Contact Us</a></li>
                            <li><a href="cart.html">Cart</a></li>
                            <li><a href="checkout.html">Checkout</a></li>
                            <li><a href="compare.html">Compare</a></li>
                            <li><a href="faq.html">FAQ</a></li>
                            <li><a href="login.html">Login</a></li>
                            <li><a href="register.html">Register</a></li>
                            <li><a href="track-order.html">Track Order</a></li>
                            <li><a href="terms-condition.html">Terms Condition</a></li>
                            <li><a href="privacy-policy.html">Privacy Policy</a></li>
                        </ul>
                    </li>
                    <li class="dropdown"><a href="javascript:void(0)">Blog</a>
                        <ul class="sub-menu">
                            <li><a href="blog-left-sidebar.html">Blog left sidebar</a></li>
                            <li><a href="blog-right-sidebar.html">Blog right sidebar</a></li>
                            <li><a href="blog-detail-left-sidebar.html">Blog detail left sidebar</a></li>
                            <li><a href="blog-detail-right-sidebar.html">Blog detail right sidebar</a></li>
                            <li><a href="blog-full-width.html">Blog full width</a></li>
                            <li><a href="blog-detail-full-width.html">Blog detail full width</a></li>
                        </ul>
                    </li>
                    <li class="dropdown"><a href="javascript:void(0)">Elements</a>
                        <ul class="sub-menu">
                            <li><a href="elemets-products.html">Products</a></li>
                            <li><a href="elemets-typography.html">Typography</a></li>
                            <li><a href="elemets-title.html">Titles</a></li>
                            <li><a href="elemets-categories.html">Categories</a></li>
                            <li><a href="elemets-buttons.html">Buttons</a></li>
                            <li><a href="elemets-tabs.html">Tabs</a></li>
                            <li><a href="elemets-accordions.html">Accordions</a></li>
                            <li><a href="elemets-blog.html">Blogs</a></li>
                        </ul>
                    </li>
                    <li><a href="offer.html">Hot Offers</a></li>
                </ul>
            </div>
            <div class="header-res-lan-curr">
                <div class="header-top-lan-curr">
                   
                    <div class="header-top-lan dropdown">
                        <button class="dropdown-toggle text-upper" data-bs-toggle="dropdown">Language <i
                                class="ecicon eci-caret-down" aria-hidden="true"></i></button>
                        <ul class="dropdown-menu">
                            <li class="active"><a class="dropdown-item" href="#">English</a></li>
                            <li><a class="dropdown-item" href="#">Italiano</a></li>
                        </ul>
                    </div>
                     
                    <div class="header-top-curr dropdown">
                        <button class="dropdown-toggle text-upper" data-bs-toggle="dropdown">Currency <i
                                class="ecicon eci-caret-down" aria-hidden="true"></i></button>
                        <ul class="dropdown-menu">
                            <li class="active"><a class="dropdown-item" href="#">USD $</a></li>
                            <li><a class="dropdown-item" href="#">EUR €</a></li>
                        </ul>
                    </div>
                    
                </div>
                 
                <div class="header-res-social">
                    <div class="header-top-social">
                        <ul class="mb-0">
                            <li class="list-inline-item"><a class="hdr-facebook" href="#"><i class="ecicon eci-facebook"></i></a></li>
                            <li class="list-inline-item"><a class="hdr-twitter" href="#"><i class="ecicon eci-twitter"></i></a></li>
                            <li class="list-inline-item"><a class="hdr-instagram" href="#"><i class="ecicon eci-instagram"></i></a></li>
                            <li class="list-inline-item"><a class="hdr-linkedin" href="#"><i class="ecicon eci-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    
</header>
  )
}

export default Header