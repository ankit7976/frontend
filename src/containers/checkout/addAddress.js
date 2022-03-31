import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addAddress, getAddress } from '../../actions/user.action';

const AddNewAddressComp = () => {

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

    const dispatch = useDispatch()

    const onAddressSubmit = (e) => {

        const payload = {
            address: {
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


  return (
    <div className="ec-checkout-wrap margin-bottom-30 padding-bottom-3">
    <div className="ec-checkout-block ec-check-bill">
        <h3 className="ec-checkout-title">Add New Address</h3>
        <div className="ec-bl-block-content">
            <div className="ec-check-subtitle">Checkout Options</div>

            <div className="ec-check-bill-form" style={{ display: 'flex', flexFlow: 'row wrap' }}>

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
                    <span onClick={() => setaddressType('home')}>
                        <input type="radio" id="bill1" name="radio-group" />
                        <label for="bill1">Home</label>
                    </span>
                    <span onClick={() => setaddressType('work')}>
                        <input type="radio" id="bill2" name="radio-group" checked />
                        <label for="bill2">Work</label>
                    </span>
                </span>

                <span className="ec-check-order-btn" style={{ display: 'block' }}>
                    <button className="btn btn-primary" onClick={onAddressSubmit}>Submit</button>
                </span>


            </div>

        </div>
    </div>

</div>
  )
}

export default AddNewAddressComp