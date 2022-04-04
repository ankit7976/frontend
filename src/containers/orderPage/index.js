import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { getOrders } from '../../actions/user.action';
import { genratefileName } from '../../urlConfig';

const OrderPage = () => {
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch();
   
    useEffect(() => {
       
        dispatch(getOrders())
       
    }, [])

    console.log(user.orders)

    return (
        <>
        <section className="ec-page-content section-space-p">

            <div className="container">
                <div className="row">
                    <div className="ec-cart-leftside col-lg-12 col-md-12 ">

                        <div className="ec-cart-content">
                            <div className="ec-cart-inner">
                                <div className="row">

                                    <div className="table-content cart-table-content">
                                        <table>
                                            
                                            <tbody>
                                                {user.orders.map((order) => {
                                                    return ( order.items.map((item) => 
                                                        <tr >
                                                            <td data-label="Product" className="ec-cart-pro-name"><a
                                                                href="product-left-sidebar.html"><img className="ec-cart-pro-img mr-4"
                                                                    src={genratefileName(item.productId.productPictures[0].img)}
                                                                    alt="" /><NavLink to={`/order_details/${order._id}`}>{ item.productId.name}</NavLink></a></td>
                                                            <td data-label="Price" className="ec-cart-pro-price"><span
                                                                className="amount">{item.payablePrice}</span></td>

                                                           
                                                            <td data-label="Total" className="ec-cart-pro-subtotal">₹ {order.paymentStatus}</td>

                                                        </tr>
                                                    ))
                                                })}
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </section>
        </>
    )
}

export default OrderPage