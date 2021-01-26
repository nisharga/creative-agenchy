import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import airbnb from '../../../images/logos/airbnb.png';
import google from '../../../images/logos/google.png';
import netflix from '../../../images/logos/netflix.png';
import slack from '../../../images/logos/slack.png';
import uber from '../../../images/logos/uber.png';

const Slider = () => { 
    return (
    <div className="container"> 
      <div className="row"> 
        <div className="col-md-12 slider" style={{'margin': '100px 0px'}}> 

          <OwlCarousel
          className="owl-theme"
          loop
          margin={10} 
          autoplay={true}
          items={5}
          padding={10}
           
          >
              <div class="item">
                <img src={airbnb} alt={airbnb} style={{'width': '150px'}}></img>
              </div>
              <div class="item">
              <img src={google} alt={google} style={{'width': '150px'}}></img>
              </div>
              <div class="item">
              <img src={netflix} alt={netflix} style={{'width': '100px'}}></img>
              </div>
              <div class="item">
              <img src={slack} alt={slack} style={{'width': '150px'}}></img>
              </div>
              <div class="item">
              <img src={uber} alt={uber} style={{'width': '100px'}}></img>
              </div> 
          </OwlCarousel>
        </div>
      </div>
    </div>
    );
};

export default Slider;