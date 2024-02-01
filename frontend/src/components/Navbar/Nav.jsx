import React, { useEffect, useState } from 'react'
import Profile from '../../assets/ICONS/profile.svg'
import '../../container/styles/globalAuth.css'
import logo from '../../assets/bg/logo.svg'

import { BiUser, BiCollection, BiSolidBookContent, BiLogOutCircle, BiMenuAltRight  }  from 'react-icons/bi'
import {IoCreateOutline} from 'react-icons/io5'




import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { useLogoutMutation } from '../../slices/usersApiSlice'
import { clearCredentials } from '../../slices/authSlice'
import { useCookies } from 'react-cookie'



const Nav = ({toggle, handleClick}) => {
/* const [cookies, setCookie] = useCookies(['jwt'])
console.log(cookies.jwt) */

    const { userInfo } = useSelector((store)=> store.auth)
    const navigate = useNavigate()

    const [logout, {isLoading}] = useLogoutMutation()
    const dispatch = useDispatch()
    
   const clearUserInfo = async() => {
        try {
            await logout().unwrap()
            dispatch(clearCredentials())
            navigate('/login')
        } catch (error) {
            console.log(error)
        }
    }



  return (
    <div>
    <div className='nav__container mobile ' id={toggle ? "active" : "navbar"}  >
        <nav className='navbar '>
        <BiMenuAltRight onClick={handleClick} className='menu' id='menu' />
            <div className="logo__container">
                <img src={logo} alt="" className='logo' />
            </div>
            <div className="profile__container" >
                <img src={Profile} alt="" />
                <p>{userInfo.name}</p>
            </div>
            <div className="icon">
                <Link to={"/profile"} className="icon__container " >
                    <BiUser />
                <p>View Profile</p>
                </Link>
            </div>
            <div className="icon">
            <Link to={"/collection"} className="icon__container " >
                <BiCollection  className='classic_icon' />
                <p>View Collection</p>
                </Link>
            </div>
            <div className="icon">
            <Link to={"/create"} className="icon__container " >
                <IoCreateOutline className='classic_icon'/>
                <p>Create Dish</p>
                </Link>
            </div>
            <div className="icon">
            <Link to={"/blog"} className="icon__container" >
                <BiSolidBookContent className='classic_icon'/>
                <p>Blog</p>
                </Link>
            </div>
            <div className="icon logout" onClick={()=>clearUserInfo()}>
                    <p className='icon__container logout'  >
                <BiLogOutCircle className='classic_icon '   />
                <span>Logout</span>

                    </p> 
            </div>
        </nav>

        {/* header */}
 
    </div>
    <header className="header desktop">
        
      <ul className='listLinks' >
    <li>
        <a href="#" className='linkDes' >Home</a>
    </li>
    <li>
        <a href="#popular" className='linkDes' >Popular</a>
    </li>
    <li>
        <a href="#contributors"  className='linkDes' >Contributors</a>
    </li>
    <li>
        <a href="#contact" className='linkDes' >Contact</a>
    </li>
    <li>
        <Link to={"/create"} className='linkDes' >Create</Link>
    </li>
    <li>
        <Link to={"/dishes"} className='linkDes' >Dishes</Link>
    </li>
    <li>
        <Link to={"/collection"} className='linkDes' >Collections</Link>
    </li>


    <li className='account_drop' >
           { {userInfo} ? userInfo.name :  <Link to={"/login"} className='linkDes' >Login</Link>}
        {userInfo && 
                    <div className='drop_hide' >  
                    <ul  >
                    <Link to={"/profile"} className="icon__container " >
                    <BiUser />
                <p>View Profile</p>
                </Link>
                        <li onClick={()=>clearUserInfo()} className='icon__container'  style={{display: "flex"}} >
                        <BiLogOutCircle className='classic_icon'   />
                            Logout</li>
                    </ul>
                    </div>
        }
    </li>
        </ul>
      
        </header>
</div>
  )
}






export default Nav