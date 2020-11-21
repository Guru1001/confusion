import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, 
    NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, 
    Label, Input } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { baseUrl, urlRoot } from "../shared/baseUrl";
import { FaAddressCard, FaHome, FaSignInAlt } from 'react-icons/fa';
import { RiInformationFill } from 'react-icons/ri';
import { MdRestaurantMenu, MdSystemUpdate } from 'react-icons/md';


class Header extends Component{
    constructor(props){
        super();
        this.state = {
            isNavOpen : false,
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen,
            isModalOpen: false,
        });
    }

    toggleModal(){
        this.setState({
            isModalOpen : !this.state.isModalOpen,
        });
    }

    handleLogin(event){
        this.toggleModal();
        alert("Username: " + this.username.value + "\nPassword: " + this.password.value 
        + "\nRemember: " + this.remember.checked);
        event.preventDefault();
    }

    render(){
        return(
            <React.Fragment>
                <Navbar dark expand='md'>
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav}/>
                        <NavbarBrand className='mr-auto' href={urlRoot+"/home"}>
                            <img src = { process.env.PUBLIC_URL + "/logo.png" } height='30' 
                            width='41' alt='Restorante Con Fusion'/>
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar >
                                <NavItem>
                                    <NavLink className='nav-link' to={urlRoot + '/home'}
                                        style={{fontSize:20}}>
                                        <FaHome style={{verticalAlign:"text-bottom"}}/>
                                        <span> Home</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to={urlRoot + '/aboutus'} 
                                        style={{fontSize:20}}>
                                        <RiInformationFill style={{verticalAlign:"text-bottom"}}/>
                                        <span> About Us</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to={urlRoot + '/menu'}
                                        style={{fontSize:20}}>
                                        <MdRestaurantMenu style={{verticalAlign:"text-bottom"}}/>
                                        <span> Menu</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to={urlRoot + '/contactus'}
                                        style={{fontSize:20}}>
                                        <FaAddressCard style={{verticalAlign:"text-bottom"}}/>
                                        <span> Contact Us</span>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className='ml-auto' navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}
                                        style={{fontSize:20}}>
                                        <FaSignInAlt style={{verticalAlign:"text-bottom"}}/>
                                        <span> Login</span>
                                    </Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron style={{backgroundImage:"url(" + process.env.PUBLIC_URL + "/assets/images/bg.jpg)"}}>
                    <div className='container'>
                        <div className='row row-header'>
                            <div className='col-12 col-sm-6'>
                                <h1>Ristorante <br/>Fusion Taj</h1>
                                <p>We take inspiration from the World's best 
                                    cuisines, and create a unique fusion 
                                    experience. Our lipsmacking creation will 
                                    tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor='username'>Username</Label>
                                <Input type='text' id='username' name='username'
                                innerRef = {(input) => this.username = input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='password'>Password</Label>
                                <Input type='password' id='password' name='password'
                                innerRef = {(input) => this.password = input}/>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type='checkbox' name='remember'
                                    innerRef = {(input) => this.remember = input}/>
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type='submit' value='submit' color='primary'
                            className='mt-3'>
                                Login
                            </Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Header;