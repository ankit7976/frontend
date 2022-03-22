import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom';
import { getProductPage } from '../../../actions';
import getParams from '../../../utils/getParams';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const ProductPage = () => {

    const dispatch = useDispatch();
    const product = useSelector(state => state.product);
    const { search } = useLocation();
    const { page } = product;
    useEffect(() => {

        const param = getParams(search);
        const payload = {
            param
        }

        dispatch(getProductPage(payload))

    }, [search])

    return (


        <>
        <div className='container'>
            <h3 style={{margin:'40px 0px',fontWeight:'bold'}}>{page.title}</h3>
            </div>
            <Carousel
                renderThumbs={() => { }}
            >

                {page.banners && page.banners.map((banner, index) =>
                    <a key={index} href={banner.navigateTo} style={{ display: "block" }}>
                        <img src={banner.img} />

                    </a>

                )}

            </Carousel>
<div className='container'>
            <div className='type-page-products'>
                {page.products && page.products.map((product, index) =>

                    <a kry={index} href={product.navigateTo}>
                        <img src={product.img} />
                    </a>
                )}

            </div>
            </div>

        </>
    )
}

export default ProductPage