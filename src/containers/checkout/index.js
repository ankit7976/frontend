import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getCartItem } from '../../actions/cart.action';
import { addAddress, getAddress } from '../../actions/user.action';
import CartPage from '../cartPage';
import AddressForm from './addAddress';


const CheckoutStape = (props) => {
    return (
        <div className='checkoutstape'>
            <div onClick={props.onClick} className={`checkoutHeader ${props.active && 'active'}`}>
                <span className='stapNumber'>{props.stapNumber}</span>
                <span className='stapTitle'>{props.title}</span>
            </div>

            {props.body && props.body}


        </div>
    )
}


const Address = ({
    adr,
    selectAddress,
    enableAddressEditForm,
    confirmDeliveryAddress,
    onAddressSubmit,
}) => {
    return (
        <div className="flexRow addressContainer">
            <div className='addressContainer_radio'>
                <input name="address" onClick={() => selectAddress(adr)} type="radio" />
            </div>
            <div className="flexRow sb addressinfo">
                {!adr.edit ? (
                    <div style={{ width: "100%" }}>
                        <div className="addressDetail">
                            <div>
                                <span className="addressName">{adr.name}</span>
                                <span className="addressType">{adr.addressType}</span>
                                <span className="addressMobileNumber">{adr.mobileNumber}</span>
                            </div>

                        </div>
                        <div className="fullAddress">
                            {adr.address} <br /> {`${adr.state} - ${adr.pinCode}`}
                        </div>

                        {adr.selected && (

                            <button onClick={() => enableAddressEditForm(adr)} className="btn btn-warning">EDIT</button>
                        )}
                        {adr.selected && (


                            <button className="btn btn-primary" onClick={() => confirmDeliveryAddress(adr)}>DELIVERY HERE</button>

                        )}
                    </div>
                ) : (
                    <AddressForm
                        withoutLayout={true}
                        onSubmitForm={onAddressSubmit}
                        initialData={adr}
                        onCancel={() => { }}
                    />
                )}
            </div>
        </div>
    )
}


const CheckOut = () => {


    const [addNewAddress, setAddnewAddress] = useState(false)
    const user = useSelector(state => state.user);
    const auth = useSelector(state => state.auth);
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch();
    const [address, setAddress] = useState([])
    const [confirmAddress, setConfirmAddress] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [orderSummary, setOrderSummary] = useState(false)

    const onAddressSubmit = (addr) => {
        setSelectedAddress(addr);
        setConfirmAddress(true);
        setOrderSummary(true)
    };

    const selectAddress = (addr) => {
        ///console.log(adr)
        const updatedAddress = address.map(adr => adr._id === addr._id ? { ...adr, selected: true } : { ...adr, selected: false })
        setAddress(updatedAddress);
    }
    const confirmDeleveryAddress = (addr) => {
        setSelectedAddress(addr);
        setConfirmAddress(true);
        setOrderSummary(true);
    }

    const enableAddressEditForm = (addr) => {
        const updatedAddress = address.map((adr) =>
            adr._id === addr._id ? { ...adr, edit: true } : { ...adr, edit: false }
        );
        setAddress(updatedAddress);
    };


    useEffect(() => {
        auth.authenticate && dispatch(getAddress())
        auth.authenticate && dispatch(getCartItem());
    }, [auth.authenticate])

    useEffect(() => {
        const address = user.address.map(adr => ({ ...adr, selected: false, edit: false }))
        setAddress(address)
    }, [user.address])


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

                                        auth.authenticate ?
                                            <div className='ec-checkout-wrap'>
                                                <div className='loginId'>
                                                    <h5>{auth.user.firstName}</h5>
                                                    <span>{auth.user.email}</span>
                                                </div> </div> :

                                            <div className="ec-checkout-wrap margin-bottom-30 padding-bottom-3">
                                                <div className="ec-checkout-block ec-check-bill">

                                                    <div className="ec-bl-block-content">


                                                        <div className="ec-check-bill-form" style={{ display: 'flex', flexFlow: 'row ' }}>

                                                            <span className="ec-bill-wrap ec-bill-half">
                                                                <label>Name*</label>
                                                                <input type="text" name="name" value='' onChange={() => { }}
                                                                    placeholder="Name your first name" required />
                                                            </span>
                                                            <span className="ec-bill-wrap ec-bill-half">
                                                                <label>Mobile Number*</label>

                                                                <input type="text" name="mobileNumber" value='' onChange={() => { }}
                                                                    placeholder="Enter your mobile number" required />
                                                            </span>


                                                            <span className="ec-check-order-btn" style={{ display: 'block' }}>
                                                                <label>&nbsp;</label>
                                                                <button className="btn btn-primary" onClick={() => { }}>Login Now</button>
                                                            </span>


                                                        </div>

                                                    </div>
                                                </div>

                                            </div>

                                    } />


                                <CheckoutStape
                                    stapNumber={'2'}
                                    title={'DELIVERY ADDRESS'}
                                    active={confirmAddress && auth.authenticate}
                                    body={
                                        <div>
                                            {
                                                confirmAddress ? <div className=""><span>{selectedAddress.address}</span><span>{selectedAddress.pinCode}</span></div>
                                                    : address.map(adr =>
                                                        <Address
                                                            selectAddress={selectAddress}
                                                            enableAddressEditForm={enableAddressEditForm}
                                                            confirmDeliveryAddress={confirmDeleveryAddress}
                                                            onAddressSubmit={onAddressSubmit}
                                                            adr={adr}

                                                        />
                                                    )
                                            }
                                        </div>
                                    } />

                                {confirmAddress ? null : addNewAddress ?
                                    (<AddressForm onSubmitForm={onAddressSubmit} onCancel={() => { }} />) : auth.authenticate ? (

                                        <CheckoutStape
                                            stepNumber={"+"}
                                            title={"ADD NEW ADDRESS"}
                                            active={false}
                                            onClick={() => setAddnewAddress(true)}
                                        />
                                    ) : null}

                                <CheckoutStape
                                    stapNumber={'4'}
                                    title={'Order Summary '}
                                    active={orderSummary}
                                    body={
                                        orderSummary ? <CartPage cartItemsOnly={true} />  : ''
                                    } />



                            </div>
                        </div>

                    </div>
                
                    <div className='ec-checkout-rightside col-lg-4 col-md-12'>
                        <div className='ec-sidebar-wrap'>
                            <div className="ec-sidebar-block">
                                <div class="ec-sb-title">
                                    <h3 class="ec-sidebar-title">Summary<div class="ec-sidebar-res"><i class="ecicon eci-angle-down"></i></div></h3>
                                </div>
                                <div className='ec-sb-block-content ec-sidebar-dropdown'>
                                    <div class="ec-checkout-summary">
                                        <div>
                                            <span class="text-left">Sub-Total</span>
                                            <span class="text-right">$80.00</span>
                                        </div>


                                        <div class="ec-checkout-summary-total">
                                            <span class="text-left">Total Amount</span>
                                            <span class="text-right">

                                                ₹   {Object.keys(cart.cartItems).reduce(function (totalPrice, key) {
                                                    const { price, qty } = cart.cartItems[key];
                                                    return totalPrice + price * qty;
                                                }, 0)}
                                            </span>


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

export default CheckOut