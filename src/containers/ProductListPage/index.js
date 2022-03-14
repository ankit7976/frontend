import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductBySlug } from '../../actions'
import Layout from '../../components/Layout'
import { genratefileName } from '../../urlConfig'

const ProductListPage = (props) => {

  const { slug } = useParams();
  const product = useSelector(state => state.product)
  const [priceRange,setPriceRange] = useState({
    under5k:5000,
    under10k:10000,
    under15k:15000,
    under20k:20000,
    under30k:30000
  })
  const dispatch = useDispatch()
  useEffect(() => {
    console.log(slug)
    dispatch(getProductBySlug(slug))
  }, [])

  return (
    <Layout>



      {Object.keys(product.productByPrice).map((key, index) => {

        return (
          <section key={index} class="section ec-product-tab section-space-p" id="collection">
            <div class="container">
              <div class="row">
                <div class="col-md-12 text-center">
                  <div class="section-title">
                   
                    <h2 class="ec-title">{slug }  price range {priceRange[key]}</h2>
                  
                  </div>
                </div>
              </div>
              <div class="row">
                {product.productByPrice[key].map(product =>   
                  <div key={product._id} class="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6  ec-product-content"  >
                    <div class="ec-product-inner">
                      <div class="ec-pro-image-outer">
                        <div class="ec-pro-image">
                          <a href="product-left-sidebar.html" class="image">
                            <img class="main-image"
                              src={genratefileName(product.productPictures[0].img)} alt="Product" />
                            <img class="hover-image"
                              src={genratefileName(product.productPictures[0].img)} alt="Product" />
                          </a>
                          <span class="percentage">{product.offer}%</span>
                          <a href="javascript:void(0)" class="quickview" data-link-action="quickview"
                            title="Quick view" data-bs-toggle="modal"
                            data-bs-target="#ec_quickview_modal"><img
                              src="assets/images/icons/quickview.svg" class="svg_img pro_svg"
                              alt="" /></a>
                          <div class="ec-pro-actions">
                            <a href="compare.html" class="ec-btn-group compare"
                              title="Compare"><img src="assets/images/icons/compare.svg"
                                class="svg_img pro_svg" alt="" /></a>
                            <button title="Add To Cart" class="add-to-cart"><img
                              src="assets/images/icons/cart.svg" class="svg_img pro_svg"
                              alt="" /> Add To Cart</button>
                            <a class="ec-btn-group wishlist" title="Wishlist"><img
                              src="assets/images/icons/wishlist.svg"
                              class="svg_img pro_svg" alt="" /></a>
                          </div>
                        </div>
                      </div>
                      <div class="ec-pro-content">
                        <h5 class="ec-pro-title"><a href="javascript:void(0)">{product.name}</a></h5>
                        <div class="ec-pro-rating">
                          <i class="ecicon eci-star fill"></i>
                          <i class="ecicon eci-star fill"></i>
                          <i class="ecicon eci-star fill"></i>
                          <i class="ecicon eci-star fill"></i>
                          <i class="ecicon eci-star"></i>
                        </div>
                        <span class="ec-price">
                          <span class="old-price">₹5000.00</span>
                          <span class="new-price">₹ {product.price}</span>
                        </span>

                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </section>
        )

      })}











    </Layout >
  )
}

export default ProductListPage