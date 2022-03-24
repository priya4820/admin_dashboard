import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import Header from '../component/Header'
export default class Login extends Component {
  render() {
    return (
     
      <div> <Link to="/login"></Link> 
     
      <div>
      <div className='header1'>
          <Container>
            <Row>
              <Col>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlBOJGs7fU4RevlqwBfWPHOzsyhqhm5H3VKe20QVAGdAumsuiGgK7uHlOmPPx8eHmlSqQ&usqp=CAU' />
                8769567845

                <img src='https://i.pinimg.com/originals/8b/d1/d8/8bd1d81da10b7fe507cef7809ff6204e.png' />
                info@jshwebdesigns.com

              </Col>
              <Col>

              </Col>
              <Col>
                <img src='https://listimg.pinclipart.com/picdir/s/364-3648099_facebook-logo-red-transparent-fb-icon-white-png.png' />
                <img src='https://i.pinimg.com/736x/cd/8c/0b/cd8c0bb076599cf13dacbd04e1dcb65c.jpg' />
                <img src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png' />
              </Col>
            </Row>
          </Container>
        </div>
        <div className='header2'>
          <Container>

            <Row>
              <Col>
                <img src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7a3ec529632909.55fc107b84b8c.png' />
                JSN<br />




              </Col>
              <Col>
                <div >
               
        
               <a href='#'/> <button className='btn'>HOME</button>
                <a href='#'/> <button className='btn'>ABOUT</button>
                <a href='#'/> <button className='btn'>PORTFOLIO</button>
                <a href='#'/> <button className='btn'>CONTACT US</button>

              
               
    
  

                </div>
              </Col>
             
             
            
            </Row>
          </Container>
          </div>
                  
   
        <div>
       
        </div>
         <div className='login'>
           <Container>
             <Row>
           <form >
             <label> Email-id : </label>
              <input type="text"placeholder='Email-id'/><br/><br/>
              <label>Password : </label>
              <input type="password"placeholder='Password'/><br/><br/>
              <button>Sign in</button><span>&nbsp;&nbsp;</span>
              <button>Sign Up</button>
           </form>
           </Row>
           </Container>
          </div>  
          </div>
   </div>
     
    )
  }
}
