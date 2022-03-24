import React, { Component } from 'react'
import { Col, Container, Form, Row } from 'reactstrap'
import Sidebar from './Sidebar'

export default class EditEmployee extends Component {
    render() {
        return (
            <div>
                <Sidebar />
                <div className='container'>
                    <div class="col-lg-7 col-md-6 col-sm-12">
                        <h2>
                            Edit Employee
                        </h2>
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item">
                                <a href="/"><i class="zmdi zmdi-home"></i> Home</a>
                            </li>
                            <li class="breadcrumb-item active">
                                Edit Employee
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='body'>
                    <Container>
                      
                        <Row>
                            <Col>
                                <div className='card p-5  '>

                                    <Form>
                                        <Row>
                                            <Col>
                                                <label>Employee Name :</label><br />
                                                <input type="text" className='my-2 input_type' size='30' />
                                            </Col>
                                            <Col>
                                                <label>Employee Address :</label><br />
                                                <input type="text" className='my-2 input_type' size='30' />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <label>Partner Payment Status :</label><br />
                                                <input type="text" className='my-2 input_type' size='30' />
                                            </Col>
                                            <Col>
                                                <label>Commision Percentage :</label><br />
                                                <input type="text" className='my-2 input_type' size='30' />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <label>Phone:</label><br />
                                                <input type="text" className='my-2 input_type' size='30' />
                                            </Col>
                                            <Col>
                                                <label>Country :</label><br />
                                                <input type="text" className='my-2 input_type' size='30' />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <label>State :</label><br />
                                                <input type="text" className='my-2 input_type' size='30' />
                                            </Col>
                                            <Col>
                                                <label>Zip Code :</label><br />
                                                <input type="text" className='my-2 input_type' size='30' />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <label>Birth Date :</label><br />
                                                <input type="date" className='my-2 input_type' size='30' />
                                            </Col>
                                            <Col>
                                                <label>Email :</label><br />
                                                <input type="text" className='my-2 input_type' size='30' />
                                            </Col>
                                        </Row>
                                    </Form>
                                </div>

                            </Col>
                        </Row>
                    </Container>
                </div>

            </div>
        )
    }
}
