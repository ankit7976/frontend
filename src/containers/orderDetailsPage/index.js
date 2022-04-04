import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getOrder } from '../../actions'

const OrderDetailsPage = () => {
    const {orderId} = useParams()
    const dispatch = useDispatch()
    const orderDetails = useSelector(state => state.user.orderDetails)
useEffect(()=>{
    const payload ={
        orderId:orderId
    }
    console.log(payload)
    dispatch(getOrder(payload))
},[])

  return (
    <div>{JSON.stringify(orderDetails)}</div>
  )
}

export default OrderDetailsPage