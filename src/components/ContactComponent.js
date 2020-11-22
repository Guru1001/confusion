import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row} from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaFax } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { urlRoot } from '../shared/baseUrl';
import Iframe from 'react-iframe';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >=len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9._]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {
    constructor(props){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values){
        console.log("Current State is : " + JSON.stringify(values));
        this.props.postFeedback(values.firstname,values.lastname, values.telnum,
            values.email, values.agree, values.contactType, values.message);
        this.props.resetFeedbackForm();
    }

    render(){
        return(
            <div className="container">
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link className="link-style" to={urlRoot + '/home'}>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h3>Contact Us</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1 mt-4 mt-sm-2">
                            <h5>Our Address</h5>
                            <address>
                            Apollo Bandar<br/>
                            Colaba, Mumbai - 400001<br/>
                            India<br/>
                            <FaPhoneAlt/> : +9152 1234 5678<br/>
                            <FaFax/> : +9152 8765 4321<br/>
                            <FiMail/> : 
                            <a className="link-style" href="mailto:confusion@food.net">
                            &nbsp;confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1 mt-4 mt-sm-2">
                        <h5>Map of our Location</h5>
                        <div
                            style={{
                                borderRadius:10,
                                overflow:"hidden"
                            }}
                        >
                            <Iframe
                                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241550.01593242184!2d72.69310231640624!3d18.921698199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1c06fffffff%3A0xc0290485a4d73f57!2sThe%20Taj%20Mahal%20Palace%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1606060315045!5m2!1sen!2sin"
                                width="100%"
                                height="200px"
                                overflow="hidden"
                                frameBorder="0"
                            />
                        </div>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1 mt-4 mt-sm-2">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" 
                            href="tel:+85212345678">
                                <i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info" href='./contactus'>
                                <i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" 
                            href="mailto:confusion@food.net">
                                <i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className='row row-content'>
                    <div className='col-12'>
                        <h3>Send us Your Feedback</h3>
                    </div>
                    <div className='col-12 col-md-9'>
                        <Form model='feedback' onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className='form-group'>
                                <Label htmlFor='firstname' md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model='.firstname' id='firstname' 
                                    name='firstname' 
                                    placeholder='First Name'
                                    className='form-control'
                                    validators = {{
                                        required, 
                                        minLength: minLength(3), 
                                        maxLength: maxLength(15)
                                    }}/>
                                    <Errors
                                        className = 'text-danger'
                                        model = '.firstname'
                                        show ='touched'
                                        messages = {{
                                            required : 'Required',
                                            minLength : 'Must be greater than 2 characters',
                                            maxLength : 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor='lastname' md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model='.lastname' id='lastname' 
                                    name='lastname' 
                                    placeholder='Last Name'
                                    className='form-control'
                                    validators = {{
                                        required, 
                                        minLength: minLength(3), 
                                        maxLength: maxLength(15)
                                    }}/>
                                    <Errors
                                        className = 'text-danger'
                                        model = '.lastname'
                                        show ='touched'
                                        messages = {{
                                            required : 'Required',
                                            minLength : 'Must be greater than 2 characters',
                                            maxLength : 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor='telnum' md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Control.text model='.telnum' id='telnum' 
                                    name='telnum' 
                                    placeholder='Contact Tel.'
                                    className='form-control'
                                    validators = {{
                                        required, 
                                        minLength: minLength(10), 
                                        maxLength: maxLength(10), 
                                        isNumber
                                    }}/>
                                    <Errors
                                        className = 'text-danger'
                                        model = '.telnum'
                                        show ='touched'
                                        messages = {{
                                            required : 'Required',
                                            minLength : 'Contact must be of 10 digits',
                                            maxLength : 'Contact must be of 10 digits',
                                            isNumber : 'Contact must be a number',
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor='email' md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model='.email' id='email' 
                                    name='email' 
                                    placeholder='Email'
                                    className = 'form-control'
                                    validators = {{
                                        required,  
                                        validEmail
                                    }}/>
                                    <Errors
                                        className = 'text-danger'
                                        model = '.email'
                                        show ='touched'
                                        messages = {{
                                            required : 'Required',
                                            validEmail : 'Invalid email address',
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Col md={{size:6, offset:2}}>
                                    <div className='form-check'>
                                        <Label check>
                                            <Control.checkbox model='.agree' 
                                                name='agree'
                                                className='form-check-input'/>{' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{size:3, offset:1}}>
                                    <Control.select model='.contactType' 
                                        name='contactType'
                                        className='form-control'>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Label htmlFor='message' md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model='.message' id='message' 
                                        className='form-control'
                                        name='message' rows='12'/>
                                </Col>
                            </Row>
                            <Row className='form-group'>
                                <Col md={{size:10, offset:2}}>
                                    <Button type='submit' className="background-dark">
                                        Send Feedback
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;