// import React, { Component } from 'react'
// import { Col, Container, Row } from 'reactstrap'
// import Footer from '../component/Footer'
// import Header from '../component/Header'


// class Webpage2 extends Component {
//   render() {
//     return (
//       <div>
//          <Header />

//           <div class='main'>
//               <Container>
//                   <Row>
//                       <Col>
//                        <h2>Contact JSH Web Designs</h2>
//                       </Col>
//                   </Row>
//               </Container>
//           </div>
//           <div className='main2'>
//             <Container>
//               <Row>
//                 <Col>
//                     <h5>Whether you’re requesting information about Web Design, SEO, Social Media or one of our other services or a current client of JSH Web Designs feel free to Call us at (865) 407-0006. We are in the office between the hours of 9:00am to 9:00pm Eastern Time or Feel Free to Contact Us Below and we will respond as soon as possible.</h5><br/>
//                     <h4>To Schidule Your Metting Or Phone Call Click Here</h4><br/>


//                 </Col>

//               </Row>
//             </Container>
//           </div>
//           <div className='main2'>
//             <Container>
//               <Row>

//                 Contact Information ---------------------------------------------------------------------------------------------------------- Send Email ------------------------------------------------------------------------------------
//               </Row>
//             </Container>
//           </div>
//           <div className='main3'>
//             <Container>
//               <Row>
//                 <Col>
//                <h7> Location:</h7><br/>
//                    <h9>Knoxville, Tennessee</h9><br/><br/>
//                         <h7>Phone Number:</h7><br/>
//                              <h9>(865) 407-0006</h9><br/><br/>
//                              <h7>Email:</h7><br/>
//                          <h9>info@jshwebdesigns.com</h9><br/><br/>
//                          <h7>We are open:</h7><br/>
//                          <h9>Monday – Friday 9 AM – 9 PM</h9>
//                 </Col>
//                 <Col>
//                 <input type='text' placeholder='Name *' size="40"/><br/><br/>
//                 <input type='text' placeholder='Email *' size="40"/><br/><br/>
//                 <input type='text' placeholder='Telyphone *' size="40"/><br/><br/>
//                 <input type='text' placeholder='Company *' size="40"/><br/><br/>
//                 <input type='text' placeholder='Website' size="40"/><br/><br/>
//                 <textarea type='text' placeholder='Message'/><br/><br/>
//                 <button >
//                   send message
//                 </button>
//                 </Col>
//               </Row>
//             </Container>
//           </div>


//              <Footer />
//       </div>
//     );
//   }
// }
//export default Webpage2;

import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap'
import {Link} from 'react-router-dom'
import Footer from '../component/Footer';

import Header1 from '../component/Header1';

function Webpage2() {
  return (
    <div>

      <Header1 />
      <div class='main'>
        <Container>
  

          <Row>
            <Col>
              <h2>Contact JSH Web Designs</h2>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='main2'>
        <Container>
          <Row>
            <Col>
              <h5>Whether you’re requesting information about Web Design, SEO, Social Media or one of our other services or a current client of JSH Web Designs feel free to Call us at (865) 407-0006. We are in the office between the hours of 9:00am to 9:00pm Eastern Time or Feel Free to Contact Us Below and we will respond as soon as possible.</h5><br />
              <h4>To Schidule Your Metting Or Phone Call <a href='#'>Click Here</a></h4><br />


            </Col>

          </Row>
        </Container>
      </div>
      <div className='main2'>
        <Container>
          <Row>
            <Col>
              <h4 className='text'>Contact Information</h4> 
            </Col>
            <Col>
              <h4 className='text1'> Send Email </h4>
            </Col>
             
          
          </Row>
        </Container>
      </div>
      <div className='main3'>
        <Container>
          <Row>
            <Col>
              <h7> Location:</h7><br />
              <h9>Knoxville, Tennessee</h9><br /><br />
              <h7>Phone Number:</h7><br />
              <h9>(865) 407-0006</h9><br /><br />
              <h7>Email:</h7><br />
              <h9>info@jshwebdesigns.com</h9><br /><br />
              <h7>We are open:</h7><br />
              <h9>Monday – Friday 9 AM – 9 PM</h9>
            </Col>
            <Col>
              <input type='text' placeholder='Name *' size="40" /><br /><br />
              <input type='text' placeholder='Email *' size="40" /><br /><br />
              <input type='text' placeholder='Telyphone *' size="40" /><br /><br />
              <input type='text' placeholder='Company *' size="40" /><br /><br />
              <input type='text' placeholder='Website' size="40" /><br /><br />
              <textarea type='text' placeholder='Message' /><br /><br />
              <button >
                send message
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </div>
  );
}
export default Webpage2;