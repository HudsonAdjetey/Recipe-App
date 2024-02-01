import React from 'react'



const ContributorsCard = ({img, name, handler, country, job, contri, rep}) => {
  return (
    <div className='cardMain_cont' >
        <img src={img} alt="" />
        <div className="cardCont_info">
            <div className="name_info_cont">
                <p>{name}<br />
                    <span>@{handler}</span>
                </p>
                <span className='country' >{country}</span>
            </div>
            <p className="job_title">{job}</p>
            <p className="totalContribution">
                {contri} Contributions in {rep} Repositories
            </p>
        </div>
    </div>
  )
}

export default ContributorsCard