import React from 'react'

const PopularHeader = ({header, spanHeader, text}) => {
  return (
    
    <div className="textPopularHeader">
    <h2>{header}</h2>
     <p className="popularHeaderMini">
         <span>{spanHeader}</span> {text}
     </p>



 </div>
  )
}

export default PopularHeader