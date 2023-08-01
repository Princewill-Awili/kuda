import React from 'react'
import './animecompa.css'

import { images } from '../../data'
import {
  FaPiggyBank as SaveIcon,
  FaNetworkWired as NetworkIcon,
} from "react-icons/fa";
import { BsCreditCardFill as CardIcon, BsSendFill  as SendIcon} from "react-icons/bs";


const [kudaphone] = images;

const AnimeCompA = () => {
  return (
    <div className='animecompa'>
      <div className='animecontainer'>
        <div className='ringA'>
          <img src={kudaphone} alt='phone' className='kudaphone' />
        </div>
        <div className='ringB'>
          <div className='rotatingBubble'>
            <SaveIcon className='rotatingIcon' />
          </div>
        </div>
        <div className='ringC'>
          <div className='rotatingBubble'>
            <SaveIcon className='rotatingIcon' />
          </div>
          <div className='rotatingBubbleB'>
            <NetworkIcon className='rotatingIcon' />
          </div>
        </div>
        <div className='ringD'>
          <div className='rotatingBubble'>
            <CardIcon className='rotatingIcon' />
          </div>
          <div className='rotatingBubbleC'>
            <SendIcon className='rotatingIcon' />
          </div>
          <div className='rotatingBubbleD'>
            <NetworkIcon className='rotatingIcon' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimeCompA