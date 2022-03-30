import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAddress, getAddress } from '../../actions/user.action';


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

    const [name, setNmae] = useState('');
    const [mobileNumber, setmobileNumber] = useState('');
    const [pinCode, setPincode] = useState('');
    const [locality, setlocality] = useState('');
    const [address, setAddress] = useState('');
    const [cityDistrictTown, setcityDistrictTown] = useState('');
    const [state, setState] = useState('');
    const [landmark, setlandmark] = useState('');
    const [alternatePhone, setalternatePhone] = useState('');
    const [addressType, setaddressType] = useState('');

    const onAddressSubmit = (e)=>{

        const payload = {
            address:{
                name,
                mobileNumber,
                pinCode,
                cityDistrictTown,
                state,
                landmark,
                alternatePhone,
                addressType,
                address

            }
        }

        console.log(payload);
        dispatch(addAddress(payload))

    }


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
                                        <h3 className="ec-checkout-title">Add New Address</h3>
                                        <div className="ec-bl-block-content">
                                            <div className="ec-check-subtitle">Checkout Options</div>
                                            
                                            <div className="ec-check-bill-form" style={{display:'flex', flexFlow: 'row wrap'}}>
                                              
                                                    <span className="ec-bill-wrap ec-bill-half">
                                                        <label>Name*</label>
                                                        <input type="text" name="name" value={name} onChange={(e) => setNmae(e.target.value)}
                                                            placeholder="Name your first name" required />
                                                    </span>
                                                    <span className="ec-bill-wrap ec-bill-half">
                                                        <label>Mobile Number*</label>

                                                        <input type="text" name="mobileNumber" value={mobileNumber} onChange={(e) => setmobileNumber(e.target.value)}
                                                            placeholder="Enter your mobile number" required />
                                                    </span>
                                                    <span className="ec-bill-wrap ec-bill-half">
                                                        <label>Pincode</label>
                                                        <input type="text" name="pinCode" placeholder="pinCode Line 1" value={pinCode} onChange={(e) => setPincode(e.target.value)} />
                                                    </span>
                                                    <span className="ec-bill-wrap ec-bill-half">
                                                        <label>locality</label>
                                                        <input type="text" name="locality" placeholder="Locality Line 1" value={locality} onChange={(e) => setlocality(e.target.value)} />
                                                    </span>
                                                    <span className="ec-bill-wrap">
                                                        <label>Full Address</label>
                                                        <input type="text" name="address" placeholder="Locality Line 1" value={address} onChange={(e) => setAddress(e.target.value)} />
                                                    </span>

                                                    
                                                    <span className="ec-bill-wrap ec-bill-half">
                                                        <label>address</label>
                                                        <input type="text" name="cityDistrictTown" placeholder="cityDistrict Town Line 1" value={cityDistrictTown} onChange={(e) => setcityDistrictTown(e.target.value)} />
                                                    </span>
                                                    <span className="ec-bill-wrap ec-bill-half">
                                                        <label>Address</label>
                                                        <input type="text" name="state" placeholder="State Line 1" value={state} onChange={(e) => setState(e.target.value)} />
                                                    </span>
                                                    <span className="ec-bill-wrap ec-bill-half">
                                                        <label>Address</label>
                                                        <input type="text" name="landmark" placeholder="Landmark Line 1" value={landmark} onChange={(e) => setlandmark(e.target.value)} />
                                                    </span>
                                                    <span className="ec-bill-wrap ec-bill-half">
                                                        <label>Address</label>
                                                        <input type="text" name="alternatePhone" placeholder="Alternate Phone Line 1" value={alternatePhone} onChange={(e) => setalternatePhone(e.target.value)} />
                                                    </span>
                                                    <span className="ec-bill-option">
                                                <span onClick={()=> setaddressType('home')}>
                                                    <input type="radio" id="bill1" name="radio-group"  />
                                                    <label for="bill1">Home</label>
                                                </span>
                                                <span onClick={()=> setaddressType('work')}>
                                                    <input type="radio" id="bill2" name="radio-group"  checked />
                                                    <label for="bill2">Work</label>
                                                </span>
                                            </span>

                                                    <span className="ec-check-order-btn" style={{display:'block'}}>
                                                        <button className="btn btn-primary" onClick={onAddressSubmit}>Submit</button>
                                                    </span>

                                               
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

export default CheckOut