import React from 'react';
// import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import Slider from 'react-slick';
import Navbar from './navbor';
import systemsImg from'../system.png';

class Home extends React.Component {
    render() {
        // const responseFacebook = (response) => {
        //   console.log(response);
        // }
    
        const responseGoogle = (response) => {
          console.log(response);
        }
    
        const settings = {
          dots: true,
          fade: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        };
        return (
        <div>
            <Navbar/>
            <section style={{background:'#171b23'}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-8">
                    <center>
                        <h1 className="text-white">
                            <strong>
                                A platform to build next generation digital game items
                            </strong>
                        </h1>
                        <div className="row" style={{justifyContent: 'center'}}>
                        <center>
                            <div className="btn btn-primary btn-lg m-3">
                                <a className="btn btn-blue"
                                    id="btn-blue-header">
                                    Explore Demo
                                </a>
                            </div>
                            <div className="btn btn-outline-primary btn-lg m-3">
                                <a className="btn btn-slider btn-white ">
                                    Project CHAOS
                                </a>
                            </div>
                            </center>
                        </div>
                    </center>
                    </div>
                    <div className="col-md-4 d-sm-block" style={{display:'none'}}>
                        <div className="col-md-12">
                            <img src={systemsImg}
                                style={{
                                width: '350px',
                                height: 'auto'
                                }}
                                alt="API Transformer"
                                className="img-responsive" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="mx-auto mt-5">
            <h3>Text the phrase lemon mastiff to (323) 992-0315.</h3>
        </div>
        <div className="mx-auto m-5 slider">
        <Slider {...settings}>
            <div className="slider-ele">
            <div className="p-5 text-left">
            The code to the left is TwiML, the Twilio Markup Language. You use TwiML to tell Twilio how to respond to incoming text messages and phone calls.

            The  TwiML element replies to incoming text messages. Let’s edit this TwiML to personalize the message, like "Hi [your name]!" Spice the message up with an emoji. "Greetings human 🤖".

            Send any message to your phone number and you’ll see your new reply.
            </div>
            <div className="p-5 col-md-6">
                yo2
            </div>
            </div>
            <div className="slider-ele">
            <div className="p-5">

            </div>
            <div className="p-5">
                
            </div>
            </div>
            <div className="slider-ele">
            <div className="p-5">

            </div>
            <div className="p-5">
                
            </div>
            </div>
            <div className="slider-ele">
            <div className="p-5">

            </div>
            <div className="p-5">
                
            </div>
            </div>
        </Slider>
        </div>
        {/* <FacebookLogin
            appId="2407191799512889"
            fields="name,email,picture"
            callback={responseFacebook}
        /> */}
        <GoogleLogin
            clientId= "301742842533-jh7kfo6s2d5bstg0nmc67kg4smea00ma.apps.googleusercontent.com"
            buttonText="LOGIN WITH GOOGLE"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
        />
      </div>
        )
    }
}

export default Home;