import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Sidebar from './Sidebar'

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Sidebar />

        <div className='container'>
          <div class="col-lg-7 col-md-6 col-sm-12">
            <h2>
              Dashboard
            </h2>
            <ul class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="/"><i class="zmdi zmdi-home"></i> Home</a>
              </li>

            </ul>

          </div>


        </div>
        <div className='body'>

          <Container>
            <Row>

              <Col>
                <h2>
                  March Order
                </h2>
              </Col>
              <Col>
                <h2>
                  Today Order
                </h2>
              </Col>
            </Row>

            <Row >
              <Col>
                <div className='card text-left p-5 mt-4'>
                  <h6 >
                  TOTAL ORDER
                  </h6>
                 <h4>46</h4> 
                  <label for="file">Total Requirerment ordered of this month</label>
                  <progress id="file" value="50" max="100" > </progress>
                </div>
              </Col>
              <Col>
              <div className='card text-left p-5 mt-4'>
                  <h6>
                  COMPLETED ORDER
                  </h6>
                  <h4>25</h4> 
                  <label for="file">Completed Order of this month</label>
                  <progress id="file" value="70" max="100" > </progress>
                </div>
              </Col>
              <Col>
                <div className='card text-left p-5 mt-4'>
                  <h6>
                  TOTAL ORDER
                  </h6>
                  <h4>0</h4> 
                  <label for="file">Completed Order of this month</label>
                  <progress id="file" value="10" max="100" > </progress>
                </div>
              </Col>
              <Col>
                <div className='card text-left p-5 mt-4'>
                  <h6>
                  COMPLETED ORDER
                  </h6>
                  <h4>0</h4>
                  <label for="file">Completed Order of the today</label>
                  <progress id="file" value="60" max="100" > </progress>
                 
                </div>
              </Col>
            </Row>
            <Row className='mt-5'>
              <Col>
                <div className='card text-left p-5 mt-4'>
                  <h6 >
                  CANCELLED ORDER
                  </h6>
                 <h4>0</h4> 
                  <label for="file">Cancelled Order of this month</label>
                  <progress id="file" value="40" max="100" > </progress>
                 
                </div>
              </Col>
              <Col>
                <div className='card text-left p-5 mt-4'>
                  <h6>
                  ORDER PROCESSING
                  </h6>
                  <h4>0</h4> 
                  <label for="file">Order Processing of this month</label>
                  <progress id="file" value="" max="100" > </progress>
                </div>
              </Col>
              <Col>
                <div className='card text-left p-5 mt-4'>
                  <h6 >
                  CANCELLED ORDER
                  </h6>
                  <h4>0</h4> 
                  <label for="file">Cancelled Order of the today</label>
                  <progress id="file" value="70" max="100" > </progress>
                </div>
              </Col>
              <Col>
                <div className='card text-left p-5 mt-4'>
                  <h6 >
                  ORDER PROCESSING
                  </h6>
                  <h4>0</h4> 
                  <label for="file">Order Processing of the today</label>
                  <progress id="file" value="" max="100" > </progress>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}
