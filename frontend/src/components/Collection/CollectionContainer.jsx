import { useState } from 'react'
import testFood from '../../assets/ICONS/testFood.png'
import {AiTwotoneFire} from 'react-icons/ai'
import {BsFillClockFill} from 'react-icons/bs'
/* 
    //Container 1
    ## Header
    ## Description
    ## Details
    //Container 1

    //Container 2
    ## Calories = 
    ## Cooking Time
    // Container 2

    // Container 3
    ## Meal
    ## Ingredient Palette
    // Container 3

    CONCLUSION
    (CONTAINER 1 + CONTAINER 2) --- (CONTAINER 3)
*/


const CollectionContainer = ({head, sub, desc, cal, time, imgUrl, ingredients}) => {
    const [hold, setHold] = useState(ingredients)
  return (
    <div className='colCon-flex' >
        {/* CONTAINER A */}
        <div className="containCol-Desc">
            <div className="headerDesc">
                <h3>{head}</h3>
                <span className="subHead">
                    {sub}
                </span>

                <p>{desc}
                </p>
            </div>
                <div className="calCooking">
                    <p>
                        <AiTwotoneFire /> <br />
                        <span>{cal}kCal</span>
                    </p>
                    <p>
                        <BsFillClockFill/> <br />
                        <span>{time}mins</span>
                    </p>
                </div>
        </div>
        {/* CONTAINER B */}
        <div className="containCol-Ingredients">
            <img src={imgUrl} alt="" />
            <div id="ingredients" className="containerPres">
                <h4>Ingredients</h4>
                <ul>
                    {ingredients.length !==0 ? ingredients.map((recipe, index)=>{
                        return(
                            <li key={Math.random()}>{recipe}</li>
                        )
                    })
                    : <li>{ingredients}</li> }
                    
                </ul>
            </div>
        </div>
    </div>
  )
}

export default CollectionContainer