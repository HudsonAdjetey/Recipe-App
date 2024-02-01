import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsFilterLeft } from 'react-icons/bs'
import Empty from '../Popular/Empty'
import LayCards from '../Popular/LayCards'
import CardLay from './CardLay'
import { cateIcons } from '../../container/images/image'
import { Link, useNavigate } from 'react-router-dom'
import { food } from '../../constants/cardselect'


const colfood = [...food]
const storeFood = colfood.slice(0, 3)

const Dishes = () => {
    const [store, setStore] = useState(storeFood)
    const navigate = useNavigate()
  return (
    <section id='dishes' >
        <div className="dishes_container">
            <div className="dishes_header">
                <div className="prev_btn" onClick={()=>{
                    navigate(-1)
                }} >
                    <img src={cateIcons.prev} width={24} alt="" />
                    <span>Prev</span>
                </div>
                <div className="search_input_dish">
                    <input type="text" placeholder='Spicy, Chilly' />
                    <AiOutlineSearch className='sDish' />
                </div>
            </div>

            <div className="category_dish">
                <p className='dish__cate' >Categories</p>
                <div className="filtered">
                    <span>Filter by</span>
                    <BsFilterLeft /> 

                    <ul className='cate_choice' >
                        <li>Breakfast</li>
                        <li>Lunch</li>
                        <li>Supper</li>
                        <li>Drinks</li>
                    </ul>
                </div>
            </div>

                    <div className="em_allDish">
                        <Link to={"/create"}>
                        <Empty />
                        </Link>
                    <div className="allDishes">
                {/* Empty */}
                {/* GRID */}
                {
                    store.map((item, index)=>{
                        return (
                <CardLay />
                        )
                    })
                }
            </div>
                    </div>
        </div>
    </section>
  )
}

export default Dishes