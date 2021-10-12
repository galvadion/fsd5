import React from 'react'

import promo1 from '../../assets/images/promo1.jpg'
import promo2 from '../../assets/images/promo2.jpg'
import promo3 from '../../assets/images/promo3.jpg'

export const Slider = () => {
    return (
        <div id="slider">

        <section id="slider-wrapper">
            <div id="slider" className="nivoSlider">
                <img style={{display: 'none'}} src={promo1} alt="" title="#htmlcaption-1" />
                <img style={{display: 'none'}} src={promo2} alt="" title="#htmlcaption-2" />
                <img style={{display: 'none'}} src={promo3} alt="" title="#htmlcaption-3" />
            </div>
            <div id="htmlcaption-1" className="nivo-html-caption">
                <h5 className="p2">Welcome to the our E-Shop</h5>
                <p>Put any description here</p>
            </div>
            <div id="htmlcaption-1" className="nivo-html-caption">
                <h5 className="p2">This is promo area</h5>
                <p>Put any description here</p>
            </div>
            <div id="htmlcaption-2" className="nivo-html-caption">
                <h5 className="p2">Where you can add any feature products</h5>
                <p>Put any description here</p>
            </div>
            <div id="htmlcaption-3" className="nivo-html-caption">
                <h5 className="p2">Or something else</h5>
                <p>Put any description here</p>
            </div>
        </section>
    </div>
    )
}