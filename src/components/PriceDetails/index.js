import React from 'react'

const PriceDetails = (props) => {
  return (
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
            <span class="text-right">₹ {props.totalPrice}</span>
           
        </div>
    </div>
    </div>
</div>
  )
}

export default PriceDetails