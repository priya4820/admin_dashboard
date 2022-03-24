import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import Footer from '../component/Footer';
import Header from '../component/Header';

export default class Webpage extends Component {
    render() {
        return (
            <div>
                <Header />



                <div className='containarimg'>
                    <Container>


                        <h4>
                            WE HELP YOUR BUSINES

                        </h4>
                        <b />
                        <p>
                            It is long Established fact that a reader will be distracted <br />
                            by the readable content page of when looking its layout
                        </p>
                        <button className='butn'>
                            LEARN MORE
                        </button>

                    </Container>
                </div>
                <div className='containertext'>
                    <Container>

                        <h4>
                            OUR PROJECT
                        </h4>
                        <Row>
                            <Col>
                                <img src='https://findicons.com/files/icons/226/christmas/125/star.png' />
                                <h2>
                                    SEO
                                </h2>
                                <p>
                                    It is long Established fact that a reader<br /> will be distracted
                                    by the readable content page <br />of when looking its layout
                                </p>
                            </Col>
                            <Col>
                                <img src='https://findicons.com/files/icons/226/christmas/125/star.png' />
                                <h2>
                                    BRANDING
                                </h2>
                                <p>
                                    It is long Established fact that a reader<br /> will be distracted
                                    by the readable content page <br />of when looking its layout
                                </p>
                            </Col>
                            <Col>
                                <img src='https://findicons.com/files/icons/226/christmas/125/star.png' />
                                <h2>
                                    LOGO
                                </h2>
                                <p>
                                    It is long Established fact that a reader<br /> will be distracted
                                    by the readable content page <br />of when looking its layout
                                </p>
                            </Col>
                        </Row>

                    </Container>

                </div>
                <div className='about'>
                    <Container>
                        <Row>

                            <Col>
                                <h3>
                                    ABOUT
                                </h3>
                                <p>
                                    It is long Established fact that a reader<br /> will be distracted
                                    by the readable content page <br />of when looking its layout
                                </p>
                            </Col>
                            <Col>
                                <img src='https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlc3MlMjBib2FyZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className='subscribe'>
                    <Container>
                        <Row>
                            <Col>
                            </Col>
                            <Col>

                                <input type='text' size="40" placeholder='Email' />
                            </Col>
                            <Col>
                                <button className='butn'>
                                    Subscribe
                                </button>
                            </Col>

                            <Col>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className='contact'>
                    <Container>
                        <Row>
                            <Col sm='5'>
                                <h3>
                                    About Company
                                </h3>
                                <p>
                                    It is long Established fact that a reader<br /> will be distracted
                                    by the readable content page <br />of when looking its layout
                                </p>
                            </Col>
                            <Col sm='4'>
                                <h3>
                                    Quick Links
                                </h3>
                                <p>
                                    Home<br />Product<br />Pricing<br />Contact Us
                                </p>

                            </Col>
                            <Col sm='3'>
                                <h3>
                                    Contact Us
                                </h3>
                                <p>
                                    +91 9876567865<br />info@gmail.com<br />


                                </p>
                                <p>
                                    <img src='https://listimg.pinclipart.com/picdir/s/364-3648099_facebook-logo-red-transparent-fb-icon-white-png.png' /> <img src='https://i.pinimg.com/736x/cd/8c/0b/cd8c0bb076599cf13dacbd04e1dcb65c.jpg' /><img src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png' />
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Footer />
            </div>
        );
    }
}
