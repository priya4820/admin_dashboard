import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Header2 from '../component/Header2'
 class Webpage3 extends Component {
  render() {
    return (
      
      <div>
        <Header2 />
        <div className='main'>

          <Container>
            <Row>

              <Col className='main1'>

                <h1>A world of customers
                  now within your reach</h1>


              </Col>
              <Col className='main2'>
                <form>
                  <h4>Sign Up Now</h4><br />
                  <input type='radio' className='radio1' />
                  <lable for='Bussiness'>Bussiness</lable>
                  <input type='radio' className='radio2' />
                  <lable for='Individual'>Individual</lable><br /><br />
                  <input type='text' className='input2' placeholder='Name' />
                  <input type='text' placeholder='Last Name' className='input1' /><br /><br />
                  <input type='Email' size="46" className='input3' placeholder='Email' /><br /><br />
                  <input type='password' size="46" className='input3' placeholder='Password' /><br /><br />
                  <input type='password' size="46" className='input3' placeholder='Conform Password' /><br /><br />
                  <input type='text' size="46" className='input3' placeholder='Telephone' /><br /><br />
                  <input type='radio' className='radio1' />
                  <lable for='msg'>Opt in to receive SMS messages and calls</lable><br /><br />
                  <label>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</label><br /><br />
                  <label>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</label><br /><br />
                  <button>Next</button>
                  <a href='#'>already have a acoount?</a>
                  <a href='#'>sign in</a>
                </form>
              </Col>

            </Row>
          </Container>
        </div>
        <div className='main3'>
          <Container>
            <Row>
              <Col>
                <h1>
                  Work When You want
                </h1>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='main4'>
          <Container>
            <Row>
              <Col >
                <img src="https://icons.iconarchive.com/icons/umar123/mantra/32/User-icon.png" />
                <h3>Reach More Customer</h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Col>
              <Col>
                <img src="https://icons.iconarchive.com/icons/umar123/mantra/32/User-icon.png" /><br />
                <h3>Reach More Customer</h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Col>
              <Col>
                <img src="https://icons.iconarchive.com/icons/umar123/mantra/32/User-icon.png" />
                <h3>Reach More Customer</h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Col>

            </Row>
          </Container>
        </div>
        <div className='main5'>
          <Container>
            <Row>
              <Col>
                <h3>
                  Your Local Services, Delivered!
                </h3>

                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </Col>
              <Col>
                <img src="https://previews.123rf.com/images/wavebreakmediamicro/wavebreakmediamicro1502/wavebreakmediamicro150202274/36349715-mechanic-mit-tablet-zum-auto-an-der-reparaturwerkstatt-reparieren.jpg" />
              </Col>
            </Row>
          </Container>
        </div>
        <div className='main6'>
          <Container>
            <Row>
              <Col>
                <h2>How MySquard works for service partners</h2>
              </Col>
            </Row>
          </Container>
        </div><br /><br />
        <div>
          <Container>
            <Row>
              <Col>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDsx8XcaFsqMYVSxb40Rg2pfQAY_NSaykjGjdwv0rYVuizucToAtClu6Y1wnCOnTSCTTM&usqp=CAU' /><br /><br />
                <h4>Customer Order</h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Col>
              <Col>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDsx8XcaFsqMYVSxb40Rg2pfQAY_NSaykjGjdwv0rYVuizucToAtClu6Y1wnCOnTSCTTM&usqp=CAU' /><br /><br />
                <h4>Prepair Order</h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Col>
              <Col>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDsx8XcaFsqMYVSxb40Rg2pfQAY_NSaykjGjdwv0rYVuizucToAtClu6Y1wnCOnTSCTTM&usqp=CAU' /><br /><br />
                <h4>Service partners arrive</h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Col>
            </Row>
          </Container>
        </div>
        <div className='main7'>
          <Container>
            <Row>
              <h4>
                About Us
              </h4><br /><br />
              <h6>
                Blog
              </h6>
              <h6>
                Help center
              </h6>
              <h6>
                Contact us
              </h6>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}
export default Webpage3;