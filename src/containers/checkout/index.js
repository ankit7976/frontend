import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAddress } from '../../actions/user.action';


const CheckoutStape = (props) => {
    return (
        <div className='checkoutstape'>
            <div className={`checkoutHeader ${props.active && 'active'}`}>
                <span className='stapNumber'>{props.stapNumber}</span>
                <span className='stapTitle'>{props.title}</span>
            </div>
            <div className='ec-checkout-wrap'>
                {props.body && props.body}
            </div>

        </div>
    )
}


const CheckOut = () => {


    const user = useSelector(state => state.user);
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAddress())
    }, [])


    return (
        <section className="ec-page-content section-space-p checkout_page">

            <div className="container">
                <div className="row">
                    <div className="ec-checkout-leftside col-lg-8 col-md-12 ">

                        <div className="ec-checkout-content">






                            <div className="ec-checkout-inner">
                                <CheckoutStape
                                    stapNumber={'1'}
                                    title={'Login'}
                                    active={auth.authenticate}
                                    body={
                                        <div className='loginId'>
                                            <h5>{auth.user.firstName}</h5>
                                            <span>{auth.user.email}</span>
                                        </div>
                                    } />


                                <CheckoutStape
                                    stapNumber={'2'}
                                    title={'DELEVERY PROCESS'}
                                    active={true}
                                    body={
                                        <div>
                                            { 
                                                user.address.map(adr =>
                                                    <div className='addresContainer flexrowitem'>
                                                    
                                                          
                                                      
                                                        <div className='addressInfo'>
                                                       
                                                        <span class="ec-bill-option">
                                                            <span><input type="radio" id="bill1" name="radio-item" /><label for="bill1">check</label></span>
                                                      </span>
                                                                    <span>{adr.name}</span>
                                                                    <span>{adr.addressType}</span>
                                                                    <span>{adr.mobileNumber}</span>
                                                             
                                                                <div>
                                                                    {adr.address}
                                                                </div>
                                                                <button className="btn btn-warning">DELEVERY HERE</button>

                                                         
                                                        </div>
                                                    </div>
                                                )
                                            }  
                                        </div>
                                    } />

                                <div className="ec-checkout-wrap margin-bottom-30 padding-bottom-3">
                                    <div className="ec-checkout-block ec-check-bill">
                                        <h3 className="ec-checkout-title">Billing Details</h3>
                                        <div className="ec-bl-block-content">
                                            <div className="ec-check-subtitle">Checkout Options</div>
                                            <span className="ec-bill-option">
                                                <span>
                                                    <input type="radio" id="bill1" name="radio-group" />
                                                    <label for="bill1">I want to use an existing address</label>
                                                </span>
                                                <span>
                                                    <input type="radio" id="bill2" name="radio-group" checked />
                                                    <label for="bill2">I want to use new address</label>
                                                </span>
                                            </span>
                                            <div className="ec-check-bill-form">
                                                <form action="#" method="post">
                                                    <span className="ec-bill-wrap ec-bill-half">
                                                        <label>First Name*</label>
                                                        <input type="text" name="firstname"
                                                            placeholder="Enter your first name" required />
                                                    </span>
                                                    <span className="ec-bill-wrap ec-bill-half">
                                                        <label>Last Name*</label>
                                                        <input type="text" name="lastname"
                                                            placeholder="Enter your last name" required />
                                                    </span>
                                                    <span className="ec-bill-wrap">
                                                        <label>Address</label>
                                                        <input type="text" name="address" placeholder="Address Line 1" />
                                                    </span>
                                                    <span className="ec-bill-wrap ec-bill-half">
                                                        <label>City *</label>
                                                        <span className="ec-bl-select-inner">
                                                            <select name="ec_select_city" id="ec-select-city"
                                                                className="ec-bill-select">
                                                                <option selected disabled>City</option>
                                                                <option value="1">City 1</option>
                                                                <option value="2">City 2</option>
                                                                <option value="3">City 3</option>
                                                                <option value="4">City 4</option>
                                                                <option value="5">City 5</option>
                                                            </select>
                                                        </span>
                                                    </span>
                                                    <span className="ec-bill-wrap ec-bill-half">
                                                        <label>Post Code</label>
                                                        <input type="text" name="postalcode" placeholder="Post Code" />
                                                    </span>
                                                    <span className="ec-bill-wrap ec-bill-half">
                                                        <label>Country *</label>
                                                        <span className="ec-bl-select-inner">
                                                            <select name="ec_select_country" id="ec-select-country"
                                                                className="ec-bill-select">
                                                                <option selected disabled>Country</option>
                                                                <option value="1">Country 1</option>
                                                                <option value="2">Country 2</option>
                                                                <option value="3">Country 3</option>
                                                                <option value="4">Country 4</option>
                                                                <option value="5">Country 5</option>
                                                            </select>
                                                        </span>
                                                    </span>
                                                    <span className="ec-bill-wrap ec-bill-half">
                                                        <label>Region State</label>
                                                        <span className="ec-bl-select-inner">
                                                            <select name="ec_select_state" id="ec-select-state"
                                                                className="ec-bill-select">
                                                                <option selected disabled>Region/State</option>
                                                                <option value="1">Region/State 1</option>
                                                                <option value="2">Region/State 2</option>
                                                                <option value="3">Region/State 3</option>
                                                                <option value="4">Region/State 4</option>
                                                                <option value="5">Region/State 5</option>
                                                            </select>
                                                        </span>
                                                    </span>
                                                </form>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                                <span className="ec-check-order-btn">
                                    <a className="btn btn-primary" href="#">Place Order</a>
                                </span>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </section>
    )
}

export default CheckOut