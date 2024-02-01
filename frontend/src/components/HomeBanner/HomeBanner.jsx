import React, { useState } from 'react'
import { adImages } from '../../container/images/image'

import { food } from '../../constants/cardselect'
import DishCard from '../card/DishCard'
import LeftHomeBanner from '../card/LeftHomeBanner'
// SETTING UP TWO BIGGER CONTAINERS (LEFT AND RIGHT)
/* 
    LEFT CONTAINER --> Holds another 4 containers
    RIGHT CONTAINER --> Holds `1` container

*/

const colFood = [...food]
const foodSpice = colFood.slice(0,3)

const HomeBanner = () => {
    const [content, setContent] = useState(foodSpice)
    
  return (
    <section id='bannerHomeMain' >
        {/* BROAD CONTAINER */}
        <div className="broadBannerContainer">
        {/* LEFT BANNER CONTAINER */}
        <LeftHomeBanner />
        {/* RIGHT BANNER CONTAINER */}
    
        </div>
        <div className="bannerCardContent">
            {content.map((item, index)=>{
                return(
                    <DishCard item={item}  key={index} />
                )
            })}
        </div>        
    </section>
  )
}

export default HomeBanner