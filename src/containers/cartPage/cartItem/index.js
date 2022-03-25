import React, { useState } from 'react'
import { genratefileName } from '../../../urlConfig';

const CartItem = (props) => {
const {_id,name,price,img} = props.cartItem;

const [qty,setQty] = useState(props.cartItem.qty)
const onQtyIncrement = ()=>{

    setQty(qty + 1)
    props.QtyIncrement(_id,qty + 1 )
}

const onQtyDescrement = ()=>{
    if(qty <= 1) return;
    setQty(qty -1)
    props.QtyDescrement(_id,qty -1)
}

  return (
    <tr  >
    <td data-label="Product" className="ec-cart-pro-name"><a
        href="product-left-sidebar.html"><img className="ec-cart-pro-img mr-4"
            src={genratefileName(img)}
            alt="" />{name}</a></td>
    <td data-label="Price" className="ec-cart-pro-price"><span
        className="amount">₹ {price}</span></td>
    <td data-label="Quantity" className="ec-cart-pro-qty"
        style={{ textalign: 'center' }}>
        <div className="cart-qty-plus-minus">
            <span onClick={onQtyDescrement}>-</span>
            <input className="cart-plus-minus" type="text"
                name="cartqtybutton" value={qty} readOnly />
                  <span onClick={onQtyIncrement}>+</span>
        </div>
    </td>
    <td data-label="Total" className="ec-cart-pro-subtotal">₹ {price}</td>
    <td data-label="Remove" className="ec-cart-pro-remove">
        <a href="#"><i className="ecicon eci-trash-o"></i></a>
    </td>
</tr>

  )
}

export default CartItem