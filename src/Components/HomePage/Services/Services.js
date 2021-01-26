import React from 'react'; 
import SingleService from './SingleService/SingleService';

const Services = () => {
    const services = [
        {
            'title': 'Web & Mobile Design',
            'icon' : 'service1.png',
            'content' : 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product'
        },
        {
            'title': 'Graphic Design',
            'icon' : 'service2.png', 
            'content' : 'Amazing flyers, social media posts and brand representation that would make your brand stand out.', 
        },
        {
            'title': 'Web development',
            'icon' : 'service3.png',
            'content' : 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general',
        } 
    ];
    return (
        <div style={{'padding': '50px 0px 100px 0px'}}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 text-center mb-5'>
                        <b><h2>Provide awesome <span className='serviceTag' style={{'color': '#7EB45E'}}>services</span></h2></b>
                    </div>
                </div>
                <div className='row'>
                    {
                        services.map(data => <SingleService value={data}></SingleService>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;