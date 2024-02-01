import React from 'react'
import { adImages } from '../../container/images/image'

const Info = () => {
  return (
    <div className='contri_info_container' >
        {/* firstSet */}
        <img src={adImages.signature} alt="contribution signature" />

        <div className="keynoteInfo">
            <div className="header_keyNote">
                <img src={adImages.diamond} alt="" />
                <div className="keyNote_text">
                    <h3>Our Keynote Priority To Our Users</h3>
                    <p>Our top notch priority is to ensure the good health condition of our users by providing them with the best dish for easy preparation accessibility</p>
                </div>

            </div>
            <img src={adImages.keyCards} alt="keynote cards" />
        </div>
    </div>
  )
}

export default Info