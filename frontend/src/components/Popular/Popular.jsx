import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaGreaterThan } from 'react-icons/fa6'
import { food } from '../../constants/cardselect'
import DishCard from '../card/DishCard'
import PopularHeader from './PopularHeader'
import Category from './Category'
import LayCards from './LayCards'


const colFood = [...food]
const storeFood = colFood.splice(0, 3)
const Popular = () => {
    const [store, setStore ] = useState(storeFood)


  return (
    <section id='popular' >
        <div className="popularHeader">
           <PopularHeader header={"Popular Dishes"} spanHeader={"Popular"} text={"Dishes are created every single week"} />
           <div className="linkContainerPopular">
            <Link to={"/dishes"} className='linkContainerPopular_link'>View more <FaGreaterThan className='gtIcon' /> </Link>
           </div>
        </div>

        {/* DISPLAY CARDS */}
        <div className="popularCardContainer" >
            {store.map((item, index)=>{
                return(
                    <DishCard item={item} key={index + 1} />
                )
            })}
        </div>

        {/* AVAILABLE CATEGORIES */}
            <div className="availCate">
            <div className="popularHeader catePopular">
                <PopularHeader header={"Available Categories"} spanHeader={"Two New"} text={"food class varieties have been added"} /> 
            </div>
                <Category />
            </div>


    </section>
  )
}

export default Popular