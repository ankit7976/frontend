import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getOrder } from '../../actions'

const OrderDetailsPage = () => {
  const { orderId } = useParams()
  const dispatch = useDispatch()
  const orderDetails = useSelector(state => state.user.orderDetails)
  useEffect(() => {
    const payload = {
      orderId: orderId
    }
    console.log(payload)
    dispatch(getOrder(payload))
  }, [])


  const formatDate2 = (date) => {
    const month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    if (date) {
      const d = new Date(date);
      return `${month[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
    }
  };

  const iconsArr = [
    '../assets/images/icons/track_2.png',
    '../assets/images/icons/track_3.png',
   '../assets/images/icons/track_4.png',
    '../assets/images/icons/track_5.png'
  ]

  if (!(orderDetails && orderDetails.address)) {
    return null;
  }

  return (
    <div>




      <section className="ec-page-content section-space-p">
        <div className="container">

          <div className="ec-trackorder-content col-md-12">
            <div className="ec-trackorder-inner">


              {orderDetails.items.map((item, index) => (
                <div key={index}
                  style={{ padding: "20px 0", margin: "10px 0" }}
                >
                    <h2 className="ec-order-id">order </h2>
                    <div className='row'>
                  <div className="flexRow col-sm-6">
                
                    <div className="delItemImgContainer">
                      <img src={item.productId.productPictures[0].img} alt="" />
                    </div>
                    <div style={{ width: "250px" }}>
                      <div className="delItemName">{item.productId.name}</div>
                      <div>{item.payablePrice} </div>
                    </div>
                  </div>

                  <div className="ec-trackorder-top col-sm-6">

                    <div className="ec-order-detail">
                      <h6>Delivery Address</h6>
                      <div>{orderDetails.address.name}</div>
                      <span>{orderDetails.address.mobileNumber}</span>
                      <div>{orderDetails.address.address}</div>
                      <div style={{ fontWeight: "500", fontSize: 14 }}>
                    {orderDetails.orderStatus[3].isCompleted &&
                      `Delivered on ${formatDate2(orderDetails.orderStatus[3].date)}`}
                  </div>
                    </div>
                  </div>

                  </div>
               





                  <div className="ec-trackorder-bottom">
                  
                    <div className="ec-progress-track">
                      <ul id="ec-progressbar">

                        {orderDetails.orderStatus.map((status,statusind) => (



                          <li key={statusind} className={`step0 ${status.isCompleted ? "active" : ""
                            }`} ><span className="ec-track-icon"> <img
                              src={iconsArr[statusind]} alt="track_order" /></span><span
                                className="ec-progressbar-track"></span><span className="ec-track-title">order
                              <br />{status.type}</span></li>



                        ))}



                       

                      </ul>
                    </div>
                  </div>



                </div>
              ))}




            </div>
          </div>

        </div>
      </section>


    </div>
  )
}

export default OrderDetailsPage