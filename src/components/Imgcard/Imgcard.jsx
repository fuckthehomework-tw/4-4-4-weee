import React from 'react'

const Imgcard = ({pic,text}) => {
  return (
   <>
        <img src={pic} alt="rgreg" />
        <h1>{text}</h1>
   </>
  )
}

export default Imgcard