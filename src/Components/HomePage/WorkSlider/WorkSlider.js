import React from 'react';
import './WorkSlider.css';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import carousel1 from '../../../images/carousel-1.png'; 
import carousel2 from '../../../images/carousel-2.png'; 
import carousel3 from '../../../images/carousel-3.png'; 
import carousel4 from '../../../images/carousel-4.png'; 
import carousel5 from '../../../images/carousel-5.png'; 

const WorkSlider = () => {
    return (
        <div className="WorkSlider container-fluid">
            <div className="row">
                <div className="col-md-12 text-center mb-4">
                    <h2>Here are some of <span>our work</span></h2>
                </div>
            </div>

            <div className="container">
            <div className="row">
                <div className="col-md-12">
                <OwlCarousel
          className="owl-theme"
          loop
          margin={10} 
          autoplay={true}
          items={2}
          padding={10}
          stagePadding={100}
           
          >
              <div class="item">
                <img src={carousel1} alt={carousel1} style={{'width': '400px'}}></img>
              </div>
              <div class="item">
              <img src={carousel2} alt={carousel2} style={{'width': '400px'}}></img>
              </div>
              <div class="item">
              <img src={carousel3} alt={carousel3} style={{'width': '400px'}}></img>
              </div>
              <div class="item">
              <img src={carousel4} alt={carousel4} style={{'width': '400px'}}></img>
              </div>
              <div class="item">
              <img src={carousel5} alt={carousel5} style={{'width': '400px'}}></img>
              </div> 
          </OwlCarousel>

                </div>
            </div>
        </div>
    </div>
    );
};

export default WorkSlider;