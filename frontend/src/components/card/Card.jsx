import { images } from '../../container/images/image'
import testFood from '../../assets/ICONS/testFood.png'
import {AiOutlineLike,AiFillLike, AiOutlineDislike} from 'react-icons/ai'

const Card = () => {
  return (
    <div  >
       
            <div className="card">
                <img src={testFood} alt="" className='leftFood' />
                <div className="card__content">
                    <div className="lead__pro">
                        <div className="title__header">
                            <img src={images.profile} alt="" />
                            <h3>Margaret Kyei</h3>
                        </div>
                    

                    <button className='saveBtn' >Save</button>


                    </div>
                    <p className='desc_title' >Tomato Stew</p>
                    <p className='sub__text' >Lorem ipsum, dolor sit amet hic cum quos natus magnam ratione.</p>
                    <div className="icon_info">
                        <AiOutlineLike className='aiLike' />
                        <AiOutlineDislike className='aiLike' />
                    </div>
    
                </div>
            </div>





    </div>
  )
}

export default Card