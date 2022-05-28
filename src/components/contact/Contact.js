import React from 'react'
import './Contact.css'
import Map from './Map/ContactMap'

const Contact = () => {
  return (
    <div className='c'>
        <div className='c-left'>
          <ContactMap></ContactMap>
        </div>
        <div className='c-right'>kanan</div>
    </div>
  )
}

export default Contact