import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

import Layout from '../../components/Layout'
import getParams from '../../utils/getParams'
import ProductPage from './productPage'
import ProductStore from './ProductStore'


const ProductListPage = (props) => {

  const RanderProduct = () => {
    const { search } = useLocation();
    const param = getParams(search)
    let content = null;

    switch (param.type) {
      case 'store': content =  <ProductStore {...props} />
      break;
      case 'page' : content =  <ProductPage {...props} />
      break;
      default : content = null
    }

    return content
  }


  return (
    <Layout>
      {RanderProduct()}
    </Layout >
  )
}

export default ProductListPage