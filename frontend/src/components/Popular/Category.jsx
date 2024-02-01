import React from 'react'
import { cateIcons } from '../../container/images/image'

const icons = cateIcons



const Category = () => {
  return (
    <div className='cateFlex'>
    <div className='columnCate' >
        <img src={icons.cateIcons1} alt="" />
        <p>Breakfast</p>
    </div>
    <div className='columnCate' >
        <img src={icons.cateIcons0} alt="" />
        <p>Lunch</p>
    </div>
    <div className='columnCate' >
        <img src={icons.cateIcons2} alt="" />
        <p>Supper</p>
    </div>
    <div className='columnCate' >
        <img src={icons.cateIcons3} alt="" />
        <p>Drink</p>
    </div>
    </div>
  )
}

export default Category