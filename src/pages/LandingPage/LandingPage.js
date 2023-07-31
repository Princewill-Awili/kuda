import React,{memo} from 'react'
import './landingpage.css'

import { badges } from '../../data'

const [ndicBadge,cbnBadge, appleStoreBadge, playStoreBadge] = badges;

const LandingPage = () => {
  return (
    <div className='landingpage'>
      <section className='sectionOne' id='secOne'>
        <div className='secOneLeft'>
          <div className='secOneTxtBox'>
            <h1 className='bigTxt'>The money app for Africans.</h1>
            <p className='medTxt'>
              Make free transfers, enjoy cashless payment options and earn
              interest on your savings with Kuda.
            </p>
            <div className='badges'>
              <div className='topBadge'>
                <img src={ndicBadge} alt='apple' className='apple' />
                <img src={cbnBadge} alt='' className='google' />
              </div>
              <div className='bottomBadge'>
                <p className='sideTxt'>Fully Licensed by the CBN</p>
                <img src={playStoreBadge} alt='google' className='cbn' />
                <p className='sideTxt'>Deposits insured by the</p>
                <img src={appleStoreBadge} alt='apple' className='ndic' />
              </div>
            </div>
          </div>
        </div>
        <div className='secOneRight'></div>
      </section>
      <section className='sectionTwo'>SectionTwo</section>
    </div>
  );
}

export default memo(LandingPage);