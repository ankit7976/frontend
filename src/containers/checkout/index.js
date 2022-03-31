import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAddress, getAddress } from '../../actions/user.action';
import AddNewAddressComp from './addAddress';


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


const CheckOut = () => {


    const [addNewAddress, setAddnewAddress] = useState(false)
    const user = useSelector(state => state.user);
    const auth = useSelector(state => state.auth);
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch();
    const [address, setAddress] = useState([])
    const [confirmAddress, setConfirmAddress] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState(null);

    useEffect(() => {
        auth.authenticate && dispatch(getAddress())
    }, [auth.authenticate])

    useEffect(() => {
        const address = user.address.map(adr => ({ ...adr, selected: false, edit: true }))
        setAddress(address)
    }, [user.address])


    const selectAddress = (addr) => {
        ///console.log(adr)
        const updatedAddress = address.map(adr => adr._id === addr._id ? { ...adr, selected: true } : { ...adr, selected: false })
        setAddress(updatedAddress);
    }

    const enableAddressEditForm = (addr)=>{
        const updatedAddress = address.map((adr => adr._id === addr._id ? {...adr,edit:true} : {...adr,edit:false}))
        setAddress(updatedAddress);
    }
    const confirmDeleveryAddress = (addr) => {
        setSelectedAddress(addr);
        setConfirmAddress(true);
    }



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
                                    title={'DELEVERY PROCESS'}
                                    active={!confirmAddress && auth.authenticate}
                                    body={
                                        <div>

                                            {
                                                confirmAddress ? <div className=""><span>{selectedAddress.address}</span><span>{selectedAddress.pinCode}</span></div>
                                                    : address.map(adr =>
                                                        <div key={adr._id} className='ec-checkout-wrap'>
                                                            <div className='addresContainer flexrowitem'>
                                                                <div className='addressInfo'>

                                                                    <input type='radio' onClick={() => selectAddress(adr)} name="address" />

                                                                    {!adr.edit ? (
                                                                        <>
                                                                            <span>{adr.name}</span>
                                                                            <span>{adr.addressType}</span>
                                                                            <span>{adr.mobileNumber}</span>

                                                                            <div>
                                                                                {adr.address}
                                                                            </div>

                                                                            {adr.selected && <button onClick={() => confirmDeleveryAddress(adr)} className="btn btn-warning">DELEVERY HERE</button>}

                                                                            {adr.selected && <button className="btn btn-primary" onClick={()=> enableAddressEditForm(adr)}>edit</button>}</>
                                                                    ): (<div className='edit_form'>EDIT FORM</div>)}




                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                            }
                                        </div>
                                    } />

                                {confirmAddress ? null : addNewAddress ?
                                    <AddNewAddressComp /> :
                                    <CheckoutStape
                                        stapNumber={'3'}
                                        title={'Add New Address'}
                                        active={addNewAddress}
                                        onClick={() => setAddnewAddress(true)} />

                                }



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
                                        <div>
                                            <span class="text-left">Delivery Charges</span>
                                            <span class="text-right">$80.00</span>
                                        </div>
                                        <div>
                                            <span class="text-left">Coupan Discount</span>
                                            <span class="text-right"><a class="ec-checkout-coupan">Apply Coupan</a></span>
                                        </div>
                                        <div class="ec-checkout-coupan-content">
                                            <form class="ec-checkout-coupan-form" name="ec-checkout-coupan-form" method="post" action="#">
                                                <input class="ec-coupan" type="text" required="" placeholder="Enter Your Coupan Code" name="ec-coupan" value="" />
                                                <button class="ec-coupan-btn button btn-primary" type="submit" name="subscribe" value="">Apply</button>
                                            </form>
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