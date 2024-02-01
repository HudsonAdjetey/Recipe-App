import React from 'react'
import {BsSearch} from 'react-icons/bs'

const LeftHomeBanner = () => {
  return (
    <div className="leftBannerContainer">
    {/* search Input */}
    <div className="bannerSearch">
    <input type="text" placeholder='Spicy, Chilly, Wonderfully' />
    <BsSearch className='bsSearch' />
    </div>
    {/* TEXT CONTAINER */}
    <div className="bannerTextContainer">
        <p className='bannerHeaderText' >Prepare it the way you want to <span className='midBanner' >Eat</span> it</p>
        <p>Take your summer break by preparing the most heart felt meal, change the tune of your dish, let it smell good!!</p>
    </div>

    {/* BUTTON */}
    <div className="btnBanner">
        <button className='createDishBtn bannerBtn' >Create a dish</button>
        <button className='exploreDishBtn bannerBtn' >Explore</button>
    </div>

    {/* Global users */}
    <div className="globalStats">
        <h3 className="globalUsers">
            Global Users <br />
            <span>200+</span>
        </h3>
        <h3 className="totalUsers">
            Total Recipes <br />
            <span>900+</span>
        </h3>
    </div>
</div>
  )
}

export default LeftHomeBanner