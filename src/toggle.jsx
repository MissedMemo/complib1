import React, { useState } from 'react';
 
const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false)

  const toggle = () => {
    setIsToggled( t => !t )
  }

  return <div className='toggle'>
    <button onClick={toggle} >{ isToggled ? 'Stop': 'Start' }</button>
  </div>
}

export default ToggleButton;