import React from 'react'
import './feature.css'
import {BsSendFill  as SendIcon} from 'react-icons/bs'

const Feature = ({icon,text}) => {
  return (
    <div className='feature'>
     <div className="featureIconHolder">
          {icon}
     </div>
     <h5 className='featureTxt'>{text}</h5>
    </div>
  )
}

export default Feature