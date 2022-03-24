
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap'

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className='header1'>
          <Container>
            <Row>
              <Col>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlBOJGs7fU4RevlqwBfWPHOzsyhqhm5H3VKe20QVAGdAumsuiGgK7uHlOmPPx8eHmlSqQ&usqp=CAU'  />
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

                <Link to="login"><button className='btn'>Login</button></Link>
               
    
  

                </div>
              </Col>
             
             
            
            </Row>
          </Container>
          </div>
      </div>
    );
  }
}




// import React, {Component} from 'react';

// export default class Header1 extends Component {
//     render(){
//         return (
//             <header className="main-header">
//                 <a href="#" className="logo">
//                     <span className="logo-mini"><b>A</b>LT</span>
//                     <span className="logo-lg"><b>Admin</b>LTE</span>
//                 </a>
//                 <nav className="navbar navbar-static-top">
//                     <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
//                         <span className="sr-only">Toggle navigation</span>
//                     </a>
//                     <div className="navbar-custom-menu">
//                         <ul className="nav navbar-nav">
//                             <li className="dropdown messages-menu">
//                                 <a href="#" className="dropdown-toggle" data-toggle="dropdown">
//                                     <i className="fa fa-envelope-o"></i>
//                                     <span className="label label-success">4</span>
//                                 </a>
//                                 <ul className="dropdown-menu">
//                                     <li className="header">You have 4 messages</li>
//                                     <li>
//                                         <ul className="menu">
//                                             <li>
//                                                 <a href="#">
//                                                     <div className="pull-left">
//                                                         <img src="img/user2-160x160.jpg" className="img-circle" alt="User Image" />
//                                                     </div>
//                                                     <h4>
//                                                         Support Team
//                                                         <small><i className="fa fa-clock-o"></i> 5 mins</small>
//                                                     </h4>
//                                                     <p>Why not buy a new awesome theme?</p>
//                                                 </a>
//                                             </li>
//                                         </ul>
//                                     </li>
//                                 </ul>
//                             </li>
//                         </ul>
//                     </div>
//                 </nav>
//             </header>
//         )
//     }
// }