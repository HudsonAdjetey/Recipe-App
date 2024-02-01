import React from 'react'
import { MdDeleteSweep } from 'react-icons/md'
import { Link } from 'react-router-dom'


const savedCollection = ({data, id}) => {



  return (
    <div className='hSavedCon_main' >
        <div className="savedProfile-1" >
            <img src={data.imageUrl || data.thumbnailUrl} alt="" />
            <div className="savePro-mini">
                <h3>{data.name}</h3><br/>
                <p>{data.instructions || data.desc}</p>
                <Link to={`/dish/${data.id}`}  className='colSave' >
                  view Details
                </Link>
            </div>
        </div>
        <MdDeleteSweep className={"deleteSweep"}  />
    </div>
  )
}

export default savedCollection