import React from 'react'
import { adImages } from '../../container/images/image'

const Contact = () => {
  return (
    <section id='contact' >
        <div className="top_header_contact">
            <h1>Contact Us</h1>
            <p>Hey yo!👋 We are all the way from Ghana. Be at ease to reach us from our contact info. Send us your details and your feedback.</p>
        </div>

        <div className="formLeading_container">
            <img src={adImages.reactions} alt="" className='reactions' />
            <div className="form_container">
                <form >
                    <input type="text" placeholder='Your Name' />
                    <input type="email" placeholder='Email Address' />
                    <input type="number" placeholder='Phone Number' />
                    <div className="textArea">
                    <textarea  ></textarea>
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact