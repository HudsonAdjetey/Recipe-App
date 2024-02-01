import React, { useEffect, useState } from 'react'
import testFood from '../../assets/ICONS/testFood.png'
import { AiOutlineSwapRight } from 'react-icons/ai'
import { food } from '../../constants/cardselect'
import  profile from '../../assets/profile.svg'
import { Link, useNavigate } from 'react-router-dom'
const colFood = [...food]

const SaveDetails = ({data, save, disable}) => {
    const [storeContain, setStore] = useState(data.recipes)
    const [isSaved, setIsSaved] = useState() 

    const navigate = useNavigate()


    const formatNumber = (index) =>{
        return index < 10 ? `0${index}` : `${index}`
    }


    useEffect(()=>{
        if(data.saved === true){
            setIsSaved(true)
        }
    }, [isSaved])


    return (
        <div className='overAllContainer' >
            {/* CONTAINER1 */}
        <div className="leftPaneContainer">
            <p className="b" onClick={()=>{
                navigate(-1)
            }} >Back </p>
            <div className="cooPaneTime">
                <p>
                    Cooking Time <br />
                    <span>{data.cookingTime}min</span>
                </p>
                <p>
                    Calories <br />
                    <span>{data.calories}kCal</span>
                </p>
            </div>
        </div>


            {/* CONTAINER2 */}
            <div className="rightPaneContainer">
                <div className="profilePaneRight">
                    <p>Created By <AiOutlineSwapRight /> </p>

                    <h3 className='profileHeaderRight' >
                        <span>Mercy Kyei</span>
                        <img src={profile} alt="" />
                    </h3>
                </div>
                <div className="middlePaneHeader">
                    <div className="titlePane_button">
                        <h1>{data.name}</h1>
                        <img src={data.imageUrl} alt="" />
                        <button className="saveBtn_pane" disabled={isSaved ? true : false} id={isSaved ? "disa" : "undisa"} >{isSaved ? "Saved" : "Save"}</button>
                    </div>
                    <p className='ratingP' >
                    <span className='ratingName' >Rating</span> <span className='ratingNumber' >(4.5)</span>
                    </p>
                    <p className="typeDish">{data.category}</p>
                </div>

                {/* LATTER CONTAINER */}
                <div className="lastButtomContainer">
                    {
                        storeContain?.map((item, index)=> {
                            return(
                                <ul key={index} className='gridUlPane' >
                                    <li>
                                    <span className='formatNumber' > {formatNumber(index + 1)} </span>
                                        
                                        {item}
                                    
                                    </li>
                                </ul>
                            )
                        })
                    }
                </div>

                {/* HOW TO PREPARE IT */}
                <div className="recipePaneContainer">
                    <h3>Recipes Needed</h3>
                    <div className="recipePaneInfo">
                        <img src={data.imageUrl} alt="" />
                        <ul>
                        {
                            data.recipes.map((item, index)=>{
                                return(
                                    
                                        <li  key={index} >{item}</li>
                                
                                )
                            })
                        }
                            </ul>
                    </div>
                </div>

                <div className="footerPane">
                    <p>Follow us on</p>
                    <span></span>
                    <p>Instagram</p>
                    <p>Contact us on</p>
                    <span></span>
                    <p>+233591962288</p>
                </div>
            </div>
            
        </div>
    )
}

export default SaveDetails 