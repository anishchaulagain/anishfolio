import React from 'react'
import Intro from '../_components/About/Intro'
import WhatIdo from '../_components/About/WhatIdo'
import MyJourney from '../_components/About/MyJourney'
import WhatsNext from '../_components/About/WhatsNext'
import Testimonial from '../_components/services/Testimonial'
import Education from '../_components/About/Education'

const About = () => {
  return (
    <div className='mt-20 md:mt-32'>
        <Intro/>
        <WhatIdo/>
        <Education/>
        
        <MyJourney/>
        <WhatsNext/>
    </div>
  )
}

export default About