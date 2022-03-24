import React from 'react'
import { useSelector } from 'react-redux'
import Layout from '../../components/Layout';
import { genratefileName } from '../../urlConfig';

const CartPage = () => {

    const cart = useSelector(state => state.cart)
    const cartItem = cart.cartItems;
    console.log(cartItem);

    return (

   

            <section class="ec-page-content section-space-p">
                <div class="container">
                    <div class="row">
                        <div class="ec-cart-leftside col-lg-12 col-md-12 ">

                            <div class="ec-cart-content">
                                <div class="ec-cart-inner">
                                    <div class="row">
                                        <form action="#">
                                            <div class="table-content cart-table-content">
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th>Product</th>
                                                            <th>Price</th>
                                                            <th style={{ textAlign: "center" }}>Quantity</th>
                                                            <th>Total</th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {Object.keys(cartItem).map((key, index) => (
                                                           
                                                        
                                                                <tr>
                                                                    <td data-label="Product" class="ec-cart-pro-name"><a
                                                                        href="product-left-sidebar.html"><img class="ec-cart-pro-img mr-4"
                                                                            src={genratefileName(cartItem[key].img)}
                                                                            alt="" />{cartItem[key].name}</a></td>
                                                                    <td data-label="Price" class="ec-cart-pro-price"><span
                                                                        class="amount">₹ {cartItem[key].price}</span></td>
                                                                    <td data-label="Quantity" class="ec-cart-pro-qty"
                                                                        style={{ textalign: 'center' }}>
                                                                        <div class="cart-qty-plus-minus">
                                                                            <input class="cart-plus-minus" type="text"
                                                                                name="cartqtybutton" defaultValue={cartItem[key].qty} />
                                                                        </div>
                                                                    </td>
                                                                    <td data-label="Total" class="ec-cart-pro-subtotal">₹ {cartItem[key].price}</td>
                                                                    <td data-label="Remove" class="ec-cart-pro-remove">
                                                                        <a href="#"><i class="ecicon eci-trash-o"></i></a>
                                                                    </td>
                                                                </tr>
                                                     
                                                           
                                                        ))}



                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <div class="ec-cart-update-bottom">
                                                        <a href="#">Continue Shopping</a>
                                                        <button class="btn btn-primary">Check Out</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* <div class="ec-cart-rightside col-lg-4 col-md-12">
                    <div class="ec-sidebar-wrap">
                      
                        <div class="ec-sidebar-block">
                            <div class="ec-sb-title">
                                <h3 class="ec-sidebar-title">Summary</h3>
                            </div>
                            <div class="ec-sb-block-content">
                                <h4 class="ec-ship-title">Estimate Shipping</h4>
                                <div class="ec-cart-form">
                                    <p>Enter your destination to get a shipping estimate</p>
                                    <form action="#" method="post">
                                        <span class="ec-cart-wrap">
                                            <label>Country *</label>
                                            <span class="ec-cart-select-inner">
                                                <select name="ec_cart_country" id="ec-cart-select-country"
                                                    class="ec-cart-select">
                                                    <option selected="" disabled="">United States</option>
                                                    <option value="1">Country 1</option>
                                                    <option value="2">Country 2</option>
                                                    <option value="3">Country 3</option>
                                                    <option value="4">Country 4</option>
                                                    <option value="5">Country 5</option>
                                                </select>
                                            </span>
                                        </span>
                                        <span class="ec-cart-wrap">
                                            <label>State/Province</label>
                                            <span class="ec-cart-select-inner">
                                                <select name="ec_cart_state" id="ec-cart-select-state"
                                                    class="ec-cart-select">
                                                    <option selected="" disabled="">Please Select a region, state
                                                    </option>
                                                    <option value="1">Region/State 1</option>
                                                    <option value="2">Region/State 2</option>
                                                    <option value="3">Region/State 3</option>
                                                    <option value="4">Region/State 4</option>
                                                    <option value="5">Region/State 5</option>
                                                </select>
                                            </span>
                                        </span>
                                        <span class="ec-cart-wrap">
                                            <label>Zip/Postal Code</label>
                                            <input type="text" name="postalcode" placeholder="Zip/Postal Code" />
                                        </span>
                                    </form>
                                </div>
                            </div>

                            <div class="ec-sb-block-content">
                                <div class="ec-cart-summary-bottom">
                                    <div class="ec-cart-summary">
                                        <div>
                                            <span class="text-left">Sub-Total</span>
                                            <span class="text-right">$80.00</span>
                                        </div>
                                        <div>
                                            <span class="text-left">Delivery Charges</span>
                                            <span class="text-right">$80.00</span>
                                        </div>
                                        <div>
                                            <span class="text-left">Coupan Discount</span>
                                            <span class="text-right"><a class="ec-cart-coupan">Apply Coupan</a></span>
                                        </div>
                                        <div class="ec-cart-coupan-content">
                                            <form class="ec-cart-coupan-form" name="ec-cart-coupan-form" method="post"
                                                action="#">
                                                <input class="ec-coupan" type="text" required=""
                                                    placeholder="Enter Your Coupan Code" name="ec-coupan" value="" />
                                                <button class="ec-coupan-btn button btn-primary" type="submit"
                                                    name="subscribe" value="">Apply</button>
                                            </form>
                                        </div>
                                        <div class="ec-cart-summary-total">
                                            <span class="text-left">Total Amount</span>
                                            <span class="text-right">$80.00</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div> */}
                    </div>
                </div>
            </section>
     
    )
}

export default CartPage