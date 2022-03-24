import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap'

export default class Header2 extends Component {
  render() {
    return (
      <div>
        <div className='header1'>
          <Container>
            <Row>
              <Col>
                <h2>My Square</h2>
              </Col>
              <Col></Col>
              <Col>
                <button>Have a Acoount?</button>
              </Col>

            </Row>
          </Container>
        </div>
      </div>
    )
  }
}

