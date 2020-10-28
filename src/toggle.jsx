import React, { useState } from 'react';
 
const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false)

  const toggle = () => {
    setIsToggled( t => !t )
  }

  return <div className='toggle'>
    <button onClick={toggle} >{ isToggled ? 'On': 'Off' }</button>
  </div>
}

export default ToggleButton;