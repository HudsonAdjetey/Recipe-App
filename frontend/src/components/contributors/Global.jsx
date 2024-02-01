import React from 'react'
import ContributorsCard from './ContributorsCard'
import { adImages } from '../../container/images/image'




const Global = () => {
  return (
    <div className='cardHolder_cont' >
        <h2>Our Global Contributors</h2>
        <ContributorsCard img={adImages.smilga} name={'John Smilga'} handler={'smilga_john'} contri={'12,456'} rep={'6'} country={"US"} job={"Software Developer"} />
        <ContributorsCard img={adImages.Harry} name={"Japheth Akomah"} handler={"akomah_slen"} country={"GH"} contri={"980"} rep={"4"} job={"User Interface Experience"} />
        <ContributorsCard  img={adImages.Hinson} name={"King Hinson"} handler={"hinson"} country={"UK"} contri={"2,343"} rep={"3"}  job={"Software Developer"}/>
        <ContributorsCard  img={adImages.Mercy} name={"Freeman Mensah"} handler={"abena_freeman"} country={"GH"} contri={"2,343"} rep={"9"}  job={"User Interface Researcher"}/>
    </div>
  )
}

export default Global