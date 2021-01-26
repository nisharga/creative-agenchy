import React from 'react';
import './ContactUs.css';
import emailjs from 'emailjs-com';

const ContactUs = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_v14pkud', 'template_74wek79', e.target, 'user_umG9IOvRne0hLKIx8kK5A')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    //   e.target.reset();
      alert('Successfully Send Message')

    }
    return (
        <div className="contactUsSection">
            <div className="container">
                <div className="row contactAreaTop">
                    <div className="col-md-4 mr-5">
                        <div className="contactTitle">
                            <h2>Let us handle your project, professionally</h2>
                            <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                        </div>
                    </div>

                    <div className="col-md-7">
                        <form onSubmit={handleSubmit}>
                            <input type="email" placeholder="Your email address" className="form-control" name="email"></input> <br></br>
                            <input type="text" placeholder="Your Name" className="form-control" name="name"></input>
                            <br></br>
                            <textarea className="form-control" placeholder="Your Message" name="message" rows="8" cols="50"></textarea>
                            <br></br>
                            <input type="submit" value="Send" className="btn" />
                        </form>
                    </div>

                </div>

                <div className="text-center copyright">
                        <p>copyright Organge labs {new Date().getFullYear()}</p> 
                </div>
            </div>
        </div>
    );
};

export default ContactUs;