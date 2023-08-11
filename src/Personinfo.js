import React from 'react'

const Personinfo = (props) => {
  return (
    <div className='person'>
      <img  src={props.image} />
      <div>
        <h4>{props.name}</h4>
        <p>{props.age}</p>
      </div>
    </div>
  )
}

export default Personinfo