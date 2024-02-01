import React from 'react'
import Banner from './Banner'
import Global from './Global'
import Info from './Info'

const Contributors = () => {
  return (
    <section id='contributors' >
        <div className="topFirstContainer">
            <Banner />
            <Global />
        </div>
        <Info />
    </section>
  )
}

export default Contributors 