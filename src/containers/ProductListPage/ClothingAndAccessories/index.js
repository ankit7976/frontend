import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getProductBySlug } from '../../../actions'
import { genratefileName } from '../../../urlConfig'

const ClothingAndAccessories = (props) => {

    const testarray = ['under 5k', 'under 10k', 'under 15k', 'under 20k', 'under 30k',]
    const product = useSelector(state => state.product)

    const { slug } = useParams();
    const oldprice = (newprice) => {
        const getvalue = parseInt(newprice) + 5000
        return getvalue
    }

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProductBySlug(slug))
    }, [])


    return (
        <>

<section class="sec-tp el-prod section-space-p">
		<div class="container">
			<div class="row">
				<div class="col-md-12 text-center">
				 
				</div>
			</div>
			<div class="row">
      {product.products.map(product =>  
        
        <div class="col-lg-4 col-md-6 col-sm-6">
				 
        <div class="ec-product-tp">
          <div class="ec-product-image">
            <a href="#">
              <img  src={genratefileName(product.productPictures[0].img)} class="img-center" alt="" />
            </a>
            <span class="ec-product-ribbon">New</span>
            {/* <div class="ec-link-icon">
              <a href="#" data-tip="Add to Wishlist"><img src="assets/images/icons/wishlist.svg"
                  class="svg_img header_svg pro_svg" alt="wishlist" /></a>
              <a href="#" data-tip="Compare"><img src="assets/images/icons/compare.svg"
                  class="svg_img pro_svg" alt="compare" /></a>
              <a href="#" data-tip="Quick View"><img src="assets/images/icons/quickview.svg"
                  class="svg_img pro_svg" alt="quick view" /></a>
            </div> */}
          </div>
          <div class="ec-product-body">
            <h3 class="ec-title"><Link to={`/${product.slug}/${product._id}/p`}>{product.name}</Link></h3>
            <p class="ec-description">
              Lorem Ipsum is simply dummy text.
            </p>
            <ul class="ec-rating">
              <li class="ecicon eci-star fill"></li>
              <li class="ecicon eci-star fill"></li>
              <li class="ecicon eci-star fill"></li>
              <li class="ecicon eci-star fill"></li>
              <li class="ecicon eci-star"></li>
            </ul>
            <div class="ec-price"><span>${product.price * 2}</span> ${product.price}</div>
            <div class="ec-link-btn">
              <a class=" ec-add-to-cart" href={`/${product.slug}/${product._id}/p`}>add to cart</a>
            </div>
          </div>
        </div>
       
      </div>
        )}
			
			</div>
		</div>
	</section>
 
     
     
        </>
    )
}

export default ClothingAndAccessories