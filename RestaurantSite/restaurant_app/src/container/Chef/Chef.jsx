import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';


import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef"/>
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word"></SubHeading>
      <h1 className='headtext__cormorant'>What We Belive In</h1>

      <div className='app__chef-content'> 
        <div className='app_chef-content_quote'>
          <img src={images.quote} alt="quote"/>
          <p className='p__opensans'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
        </div>
        <p className='p__opensans'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
      </div>

      <div className='app__chef-sing'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt="sing"/>
      </div>
    </div>


  </div>
);

export default Chef;
  