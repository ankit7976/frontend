import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductBySlug } from '../../actions'
import Layout from '../../components/Layout'
import { genratefileName } from '../../urlConfig'

const ProductListPage = () => {


  const testarray = ['under 5k','under 10k',
    'under 15k',
    'under 20k',
    'under 30k',
  ]
 

  const product = useSelector(state => state.product)

  ///alert(JSON.stringify(product.productByPrice))

  const { slug } = useParams();
  const oldprice = (newprice)=>{
    const getvalue = parseInt(newprice) + 5000
    return  getvalue
  
  }


  const dispatch = useDispatch()
  useEffect(() => {
  
    dispatch(getProductBySlug(slug))

  
  }, [])

  return (
    <Layout>



      {  Object.keys(product.productByPrice).map((array, index) => {
    
        return (
          <div key={index} className="section ec-product-tab section-space-p">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <div className="section-title">
                   
                    <h2 className="ec-title">{index }  price range { testarray[index]}</h2>
                  
                  </div>
                </div>
              </div>
              <div className="row">

                
                 {product.productByPrice[array].map(product =>   
                  <div key={product._id} className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content"  >
                    <div className="ec-product-inner">
                      <div className="ec-pro-image-outer">
                        <div className="ec-pro-image">
                          <a href="product-left-sidebar.html" className="image">
                            <img className="main-image"
                              src={genratefileName(product.productPictures[0].img)} alt="Product" />
                            <img className="hover-image"
                              src={genratefileName(product.productPictures[0].img)} alt="Product" />
                          </a>
                          <span className="percentage">{product.offer}%</span>
                          <a href="#" className="quickview" data-link-action="quickview"
                            title="Quick view" data-bs-toggle="modal"
                            data-bs-target="#ec_quickview_modal"><img
                              src="assets/images/icons/quickview.svg" className="svg_img pro_svg"
                              alt="" /></a>
                          <div className="ec-pro-actions">
                            <a href="compare.html" className="ec-btn-group compare"
                              title="Compare"><img src="assets/images/icons/compare.svg"
                                className="svg_img pro_svg" alt="" /></a>
                            <button title="Add To Cart" className="add-to-cart"><img
                              src="assets/images/icons/cart.svg" className="svg_img pro_svg"
                              alt="" /> Add To Cart</button>
                            <a className="ec-btn-group wishlist" title="Wishlist"><img
                              src="assets/images/icons/wishlist.svg"
                              className="svg_img pro_svg" alt="" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="ec-pro-content">
                        <h5 className="ec-pro-title"><a href="#">{product.name}</a></h5>
                        <div className="ec-pro-rating">
                          <i className="ecicon eci-star fill"></i>
                          <i className="ecicon eci-star fill"></i>
                          <i className="ecicon eci-star fill"></i>
                          <i className="ecicon eci-star fill"></i>
                          <i className="ecicon eci-star"></i>
                        </div>
                        <span className="ec-price">
                          <span className="old-price">₹ {oldprice(product.price) }</span>
                          <span className="new-price">₹ {product.price}</span>
                        </span>

                      </div>
                    </div>
                  </div>
                )}  
              </div>
            </div>

          </div>
        );

      })
      
      
      }

    </Layout >
  )
}

export default ProductListPage