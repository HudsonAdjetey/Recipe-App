import React from 'react'
import { adImages } from '../../container/images/image'
import { MdOutlineConnectWithoutContact } from 'react-icons/md'


const Banner = () => {
  return (
    <div className='cont_banner' >
        <p className="bannerContHead">
            Are you ready?
        </p>
        <div className="discover_flex">
            <h2>Discover the upcoming premium features</h2>
            <img src={adImages.cele} alt="celebration banner" />
        </div>
        <button className="subscribe_banner" disabled={true} >
            Subscribe
            <MdOutlineConnectWithoutContact className='icon_cont' />
        </button>
    </div>
  )
}

export default Banner