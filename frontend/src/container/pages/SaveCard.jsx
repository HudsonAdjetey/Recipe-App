import React, { useEffect, useState } from 'react'
import { food } from '../../constants/cardselect'
import { useParams } from 'react-router-dom'
import SaveDetails from '../../components/card/SaveDetails'

const foodContain = [...food]

const SaveCard = () => {
    const [store, setStore] = useState(foodContain)
    const [save, setSave] = useState()
    const [isSaved, setIsSaved] = useState()
    const [disable, setDisable] = useState(true)
    const {id} = useParams()

    const isValidate = (id)=>{
        store.forEach(item=>{
            if(item.id == Number(id)){
                // return true
                setSave(item)
            }
   
        })
    }

    useEffect(()=>{
        isValidate(id)
    }, [id])

  return (
    <div>{
            save ? <SaveDetails data={save}   />   : <h2 className='noPageId' >NO SAVED DISH WITH THIS ID ({id})</h2>
        }</div>
  )
}

export default SaveCard