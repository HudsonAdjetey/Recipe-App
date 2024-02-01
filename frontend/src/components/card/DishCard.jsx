import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import { Link } from 'react-router-dom'


const DishCard = ({item}) => {
  return (
    <div className="inBannerCard" >
                        <img src={item.imageUrl} alt="" />
                        <div className="contentBannerCard">
                            <p className="bannerTitleCard">{item.name}
                            <br />
                            <span>{item.category}</span>
                            
                            </p>
                            <p className="ratingNumber">
                                Total Ratings (4.5)
                            </p>
                            <div className="linkBannerBtn">
                                <Link to={`/dish/${item.id}`} className='liBanner' >View Details</Link>
                                <AiOutlinePlus className='bnIcons' />
                            </div>
                        </div>
                    </div>
  )
}

export default DishCard