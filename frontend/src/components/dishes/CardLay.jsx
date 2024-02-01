import React from 'react'
import { testFood } from '../../container/images/image'
import {AiOutlinePlus, AiFillFire, AiFillClockCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom'



const CardLay = () => {
  return (
    <div className="addDishBth_card ">
    <img src={testFood.tryFoodImg} alt="" />
    <p className="nameLayCard">Chicken with beans
    <br />
        <span className="miniLay">Lunch</span>
    </p>

    <div className="totalRatings_Lay">
        <p>Total ratings <span>( 4.5 )</span></p>
    </div>

    <div className="relateIcons_lay">
        <p>
            <AiFillFire className='fire' /> <span>238kCal</span>
        </p>
        <p>
            <AiFillClockCircle className='clock' /> <span>38mins</span>
        </p>
    </div>
    <div className="btn_lay">
    <div className="linkBannerBtn">
                        <Link to={`/dish/9`} className='liBanner' >View Details</Link>
                        <AiOutlinePlus className='bnIcons' />
                    </div>
    </div>
</div>
  )
}

export default CardLay