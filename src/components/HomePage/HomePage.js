import React from 'react'
import HeroSection from './HeroPage/HeroSection'
import AboutUsSection from './AboutUsSection/AboutUsSection'
import WhatWeOfferSection from './WhatWeOfferSection/WhatWeOfferSection'
import WhyChooseTalvoxSection from './WhyChooseTalvoxSection/WhyChooseTalvoxSection'
import Industries from '../Industries/Industries'
import CorporateGifting from './CorporateGifting/CorporateGifting'


const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutUsSection />
      <WhatWeOfferSection />
      <WhyChooseTalvoxSection />
      <Industries />
      <CorporateGifting />
     
    </div>
  )
}

export default HomePage
