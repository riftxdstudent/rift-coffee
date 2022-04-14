import React from 'react'
import Coffee from '../../content/image/coffee3.jpg'
import './Market.css'
import 'animate.css'

const Market = () => {
  return (
    <div className='m'>
        <div className='m-left'>
          left
        </div>

        <div className='m-right'>
          <img src={Coffee} className='m-img'></img>
        </div>
    </div>
  )
}

export default Market