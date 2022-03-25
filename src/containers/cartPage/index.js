import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../actions/cart.action';
import CartItem from './cartItem';

const CartPage = () => {

  const cart = useSelector(state => state.cart)
 const dispatch = useDispatch()
 const [cartItems,seCartItem] = useState(cart.cartItems)
 
 useEffect(()=>{
    seCartItem(cart.cartItems)
 },[cart.cartItems])

    const QtyIncrement = (_id,qty)=>{
        console.log({_id,qty})
        const {name,img,price} = cartItems[_id]
        dispatch(addToCart({_id,name,img,price},1)) 
    }
    const QtyDescrement = (_id,qty)=>{
        const {name,img,price} = cartItems[_id]
        dispatch(addToCart({_id,name,img,price},-1))      
    }

    return (

            <section className="ec-page-content section-space-p">
                <div className="container">
                    <div className="row">
                        <div className="ec-cart-leftside col-lg-12 col-md-12 ">

                            <div className="ec-cart-content">
                                <div className="ec-cart-inner">
                                    <div className="row">
                                        <form action="#">
                                            <div className="table-content cart-table-content">
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
                                                        {Object.keys(cartItems).map((key, index) => (
                                                        
                                                       
                                                             <CartItem 
                                                             key={index}
                                                             cartItem={cartItems[key]}
                                                             QtyIncrement={QtyIncrement}
                                                             QtyDescrement={QtyDescrement}
                                                             />
                                                           
                                                        ))}



                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="ec-cart-update-bottom">
                                                        <a href="#">Continue Shopping</a>
                                                        <button className="btn btn-primary">Check Out</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* <div className="ec-cart-rightside col-lg-4 col-md-12">
                    <div className="ec-sidebar-wrap">
                      
                        <div className="ec-sidebar-block">
                            <div className="ec-sb-title">
                                <h3 className="ec-sidebar-title">Summary</h3>
                            </div>
                            <div className="ec-sb-block-content">
                                <h4 className="ec-ship-title">Estimate Shipping</h4>
                                <div className="ec-cart-form">
                                    <p>Enter your destination to get a shipping estimate</p>
                                    <form action="#" method="post">
                                        <span className="ec-cart-wrap">
                                            <label>Country *</label>
                                            <span className="ec-cart-select-inner">
                                                <select name="ec_cart_country" id="ec-cart-select-country"
                                                    className="ec-cart-select">
                                                    <option selected="" disabled="">United States</option>
                                                    <option value="1">Country 1</option>
                                                    <option value="2">Country 2</option>
                                                    <option value="3">Country 3</option>
                                                    <option value="4">Country 4</option>
                                                    <option value="5">Country 5</option>
                                                </select>
                                            </span>
                                        </span>
                                        <span className="ec-cart-wrap">
                                            <label>State/Province</label>
                                            <span className="ec-cart-select-inner">
                                                <select name="ec_cart_state" id="ec-cart-select-state"
                                                    className="ec-cart-select">
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
                                        <span className="ec-cart-wrap">
                                            <label>Zip/Postal Code</label>
                                            <input type="text" name="postalcode" placeholder="Zip/Postal Code" />
                                        </span>
                                    </form>
                                </div>
                            </div>

                            <div className="ec-sb-block-content">
                                <div className="ec-cart-summary-bottom">
                                    <div className="ec-cart-summary">
                                        <div>
                                            <span className="text-left">Sub-Total</span>
                                            <span className="text-right">$80.00</span>
                                        </div>
                                        <div>
                                            <span className="text-left">Delivery Charges</span>
                                            <span className="text-right">$80.00</span>
                                        </div>
                                        <div>
                                            <span className="text-left">Coupan Discount</span>
                                            <span className="text-right"><a className="ec-cart-coupan">Apply Coupan</a></span>
                                        </div>
                                        <div className="ec-cart-coupan-content">
                                            <form className="ec-cart-coupan-form" name="ec-cart-coupan-form" method="post"
                                                action="#">
                                                <input className="ec-coupan" type="text" required=""
                                                    placeholder="Enter Your Coupan Code" name="ec-coupan" value="" />
                                                <button className="ec-coupan-btn button btn-primary" type="submit"
                                                    name="subscribe" value="">Apply</button>
                                            </form>
                                        </div>
                                        <div className="ec-cart-summary-total">
                                            <span className="text-left">Total Amount</span>
                                            <span className="text-right">$80.00</span>
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