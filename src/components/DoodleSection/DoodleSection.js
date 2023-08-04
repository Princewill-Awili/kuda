import React from 'react'
import './doodlesection.css'
import { Link } from 'react-router-dom'
import {IoIosArrowForward as ArrowRight} from 'react-icons/io'

const DoodleSection = ({inverted,linked,linkTxt,link,bigTxt, smallTxt,art}) => {
     if(inverted){
          return (
            <div className='doodleSection'>
              <div className='doodleArt'>
                <img src={art} alt='artImg' className='art' />
              </div>
              <div className='doodleTxtBox'>
                <h2 className='doodleTxtBig'>{bigTxt}</h2>
                <p className='doodleTxtSmall'>{smallTxt}</p>
                {linked && (
                  <div className='linkContainer'>
                    <Link to={link} className='link'>
                      {linkTxt}
                    </Link>
                    <ArrowRight />
                  </div>
                )}
              </div>
            </div>
          );
     }else{
          return (
            <div className='doodleSection normal'>
              <div className='doodleTxtBox'>
                <h2 className='doodleTxtBig'>{bigTxt}</h2>
                <p className='doodleTxtSmall'>{smallTxt}</p>
                {linked && (
                  <div className='linkContainer'>
                    <Link to={link} className='link'>
                      {linkTxt}
                    </Link>
                    <ArrowRight />
                  </div>
                )}
              </div>
              <div className='doodleArt'>
                <img src={art} alt='artImg' className='art' />
              </div>
            </div>
          );

     }       
     }

export default DoodleSection