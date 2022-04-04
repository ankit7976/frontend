import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { addToCart, getCartItem } from '../../actions/cart.action';
import PriceDetails from '../../components/PriceDetails';
import CartItem from './cartItem';

const CartPage = (props) => {
    const auth = useSelector(state => state.auth)
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const [cartItems, seCartItem] = useState(cart.cartItems)

    useEffect(() => {
        seCartItem(cart.cartItems)


    }, [cart.cartItems])

    console.log('all cart items =>', cart.cartItem)

    useEffect(() => {
        if (auth.authenticate) {
            dispatch(getCartItem())
        }
    }, [auth.authenticate])

    const QtyIncrement = (_id, qty) => {
        console.log({ _id, qty })
        const { name, img, price } = cartItems[_id]
        dispatch(addToCart({ _id, name, img, price }, 1))
    }
    const QtyDescrement = (_id, qty) => {
        const { name, img, price } = cartItems[_id]
        dispatch(addToCart({ _id, name, img, price }, -1))
    }


    

if(props.cartItemsOnly) {
    return (
    

<section className="ec-page-content ">
<div className="container">
    <div className="row">
        <div className="ec-cart-leftside col-lg-12 col-md-12" style={{padding:'0px'}}>

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
                        

                        </form>
                    </div>
                </div>
            </div>

        </div>

      
    </div>
</div>
</section>



    )
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
                                                   
                                                    <NavLink className="btn btn-primary btn-jittery" to={'/checkout'}>Check Out</NavLink>
                                                </div>
                                            </div>
                                        </div>

                                  

                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>

                
                </div>
            </div>
        </section>

    )
}

export default CartPage