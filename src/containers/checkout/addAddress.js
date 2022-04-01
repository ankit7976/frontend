import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addAddress, getAddress } from '../../actions/user.action';
import userReducer from '../../reducers/user.reducer';

const AddressForm = (props) => {
    const { initialData } = props;
    const [name, setNmae] = useState(initialData ? initialData.name :'');
    const [mobileNumber, setmobileNumber] = useState(initialData ? initialData.mobileNumber :'');
    const [pinCode, setPincode] = useState(initialData ? initialData.pinCode :'');
    const [locality, setlocality] = useState(initialData ? initialData.locality :'');
    const [address, setAddress] = useState(initialData ? initialData.address :'');
    const [cityDistrictTown, setcityDistrictTown] = useState(initialData ? initialData.cityDistrictTown :'');
    const [state, setState] = useState(initialData ? initialData.state :'');
    const [landmark, setlandmark] = useState(initialData ? initialData.landmark :'');
    const [alternatePhone, setalternatePhone] = useState(initialData ? initialData.alternatePhone :'');
    const [addressType, setaddressType] = useState(initialData ? initialData.addressType :'');
    const [submitFlag, setSubmitFlag] = useState(false)
    const [id, setId] = useState(initialData ? initialData._id : "");
    const user = useSelector(state => state.user)

    const dispatch = useDispatch()

    const onAddressSubmit = (e) => {
        const payload = {
            address: {
              name,
              mobileNumber,
              pinCode,
              locality,
              address,
              cityDistrictTown,
              state,
              landmark,
              alternatePhone,
              addressType,
            },
          };
          console.log(payload);
          if (id) {
            payload.address._id = id;
          }
        dispatch(addAddress(payload))
        setSubmitFlag(true);
    }

    useEffect(() => {
        console.log("addressCount", user.address);
        if (submitFlag) {
          console.log("where are we", user);
          let _address = {};
          if (id) {
            _address = {
              _id: id,
              name,
              mobileNumber,
              pinCode,
              locality,
              address,
              cityDistrictTown,
              state,
              landmark,
              alternatePhone,
              addressType,
            };
          } else {
            _address = user.address.slice(user.address.length - 1)[0];
          }
    
          props.onSubmitForm(_address);
        }
    }, [user.address])

    const renderAddressForm = () => {
        return (

            <div className="ec-bl-block-content">
              

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


        );
    };


    if (props.withoutLayout) {
        return (
            <div className="ec-checkout-wrap margin-bottom-30 padding-bottom-3">
                <div className="ec-checkout-block ec-check-bill">
                    <h3 className="ec-checkout-title">Edit Address</h3>
                    {renderAddressForm()}
                </div>
            </div>
        )
    }

    return (


        <div className="ec-checkout-wrap margin-bottom-30 padding-bottom-3">
            <div className="ec-checkout-block ec-check-bill">
                <h3 className="ec-checkout-title">Add New Address</h3>
                {renderAddressForm()}
            </div>

        </div>





    );
};



export default AddressForm