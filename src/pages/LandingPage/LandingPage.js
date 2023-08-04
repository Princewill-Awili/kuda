import React,{memo} from 'react'
import './landingpage.css'

import { badges, features } from '../../data'
import AnimeCompA from '../../components/AnimeComponentA/AnimeCompA';
import Feature from '../../components/Feature/Feature';
import DoodleSection from '../../components/DoodleSection/DoodleSection';
import KudaDoodleArt from '../../assets/kudadoodle1.png'
import KudaDoodleArt2 from '../../assets/kudadoodle2.png'
import KudaDoodleArt3 from '../../assets/kudadoodle3.jpg'


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
        <div className='secOneRight'>
          <AnimeCompA />
        </div>
      </section>
      <div className='features'>
        {features.map((feature, index) => (
          <Feature key={index} icon={feature.icon} text={feature.text} />
        ))}
      </div>
      <DoodleSection
        bigTxt='Your phone + Our App + a debit card = A Simpler Life'
        smallTxt="We designed a money app for your lifestyle, and you can get a debit card to go with it. That's all you need to make the right money moves."
        linked
        linkTxt='Open an account in minutes'
        art={KudaDoodleArt}
      />
      <DoodleSection
        inverted
        bigTxt='It’s your money, we just help you manage it.'
        smallTxt='Save it, spend it, send it. It’s up to you. Whatever you choose to do with your money, we’ll make sure it’s done better and free of charge. We take responsibility for that.'
        art={KudaDoodleArt2}
      />
      <DoodleSection
        bigTxt='Save money as you spend it, seriously..'
        smallTxt='You can’t avoid spending. That’s how you pay for your needs. But we can help you put money away every time you pay for something. Just set a percentage to save and watch your money grow.'
        art={KudaDoodleArt2}
        linked
        linkTxt="See all our savings"
      />
    </div>
  );
}

export default memo(LandingPage);