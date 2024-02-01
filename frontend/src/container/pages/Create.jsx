import React, { useState } from 'react'
import { cateIcons } from '../images/image'
import { useSelector } from 'react-redux'

const Create = () => {
    const { userInfo } = useSelector((store)=> store.auth)
    const [collectData, setDataCollection] = useState({
        dish: '',
        description:'',
        category: "",
        calories: 0,
        cookingTime: 0,
        ingredient: [ ],
        instructions: [],
        createdBy: userInfo._id

    })

    const handleChange = (e) => {
        const {value, name} = e.target
        setDataCollection({...collectData, [name]: e.target.value})
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(collectData)
    }
    const addInstruction = ()=>{
        setDataCollection({...collectData, instructions:[...collectData.instructions, ""]})
    }
    const addIngredient = ()=> {
        setDataCollection({...collectData, ingredient: [...collectData.ingredient, ""]})
    }
    
    const handleInstructionChange = (event, index) => {
        const { value } = event.target
        let instructions = collectData.instructions
        instructions[index] = value
        // setDataCollection(prevState =>{return {...prevState , instructions}})
        setDataCollection({...collectData, instructions})
    }

    const handleIngredientChange = (event, index)=>{
        const { value } = event.target
        let ingredient = collectData.ingredient;
        ingredient[index] = value
        setDataCollection({...collectData, ingredient})
    }



  return (
    <section id='create' >
        <div className="create__container_main">
            <h3>Create a dish</h3>
            
            <div className="form__create_dish">
                <form id='createDish' onSubmit={handleSubmit} >
                    <div className="file_input">
                        <img src={cateIcons.upload} alt="" />
                    </div>

                    <div className="create_inputs">
                        <input type="text" name="dish" id="" placeholder='Dish name' value={collectData.name} onChange={handleChange}  required/>
                        <input type="text" name="description" id="" placeholder='Description' value={collectData.description} onChange={handleChange} />
                        
                        <select name="category" id="selectCategory" onChange={handleChange} >
                            <option value=""  >Select Category</option>
                            <option value="breakfast">Breakfast</option>
                            <option value="lunch">Lunch</option>
                            <option value="supper">Supper</option>
                        </select>

                        <div className="dishInput_flex">
                            <input type="number" placeholder='calories' min={1} name='calories' onChange={handleChange} required />
                            <input type="number" placeholder='Cooking Time' min={1} name='cookingTime' onChange={handleChange} required />
                        </div>

                        <div className="map__inputs">
                            {

                                collectData.ingredient.map((item, index)=>{
                                    return (
                                        <input type="text" key={index} value={item} onChange={(event)=>handleIngredientChange(event, index)} placeholder={`Ingredient ${index + 1}`} required />
                                    )
                                })
                            }

                            <button onClick={addIngredient} type='button' > <span>+</span> Add Recipe</button>
                        </div>

                        <div className="map__inputs">

                            {
                                collectData.instructions.map((item, index)=>{
                                    return(
                                <input type="text" placeholder='Instructions' value={item} key={index} onChange={(event)=>handleInstructionChange(event, index)} required />

                                    )
                                })
                            }
                            <button onClick={addInstruction} type='button' > <span>+</span> Add Instructions</button>
                        </div>

                        <button type="submit" className='submit_Create' >Create Dish</button>

                    </div>
                </form>
            </div>
        </div>


    </section>
  )
}

export default Create