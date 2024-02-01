import React, { useState } from 'react'
import '../styles/globalAuth.css'
import Nav from '../../components/Navbar/Nav'
import {BiMenuAltRight}  from 'react-icons/bi'
import Slider from '../../components/iconsLoader/Slider'
import HomeBanner from '../../components/HomeBanner/HomeBanner'
import Popular from '../../components/Popular/Popular'
import Contact from '../../components/contact/Contact'
import Contributors from '../../components/contributors/Contributors'




const Home = () => {
  const [toggle, setToggle] = useState(true)

  const handleClick = ()=>{
      setToggle(!toggle);
  }






  

  return (
    < main>
      <BiMenuAltRight onClick={handleClick} className={!toggle ? "menu hide mobile": 'menu right mobile'} />
        <Slider  />
        <Nav  toggle={toggle}  handleClick={handleClick} />
        <HomeBanner />
        <Popular />
        <Contributors />
        <Contact />
      
    </main>
  )
}

export default Home  











/* 

import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import VideoThumbnail from '../../components/youTube/videoThumbnail';


const Home = () => {
    const [isPlaying, setIsPlaying] = useState(false)
    
    const handleClick = () => {
        setIsPlaying(true);
    }
  return (
    <div>
        {isPlaying === true ? ( 
            <div className='player' >
                <ReactPlayer  url={"https://www.youtube.com/watch?v=fKwRSRsYyX4"} pip={true} muted={false} controls={true} playing={true} onDuration={true} />
            </div>

        ): (
            <h2>Hello</h2>
        )}

        <button onClick={()=>setIsPlaying(true)} >
            <VideoThumbnail  videoId={"fKwRSRsYyX4"}  />
        </button>
        <button onClick={handleClick} >Play Now</button>
        <button onClick={()=>setIsPlaying(false)} >Quit</button>
    </div>
  )
}

export default Home


*/