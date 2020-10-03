import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem, Button, 
    Modal, ModalBody, ModalHeader, Label, Row, Col} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >=len);

class CommentForm extends Component {
    constructor(props){
        super();
        this.state = {
            isModalOpen: false,
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    toggleModal(){
        this.setState({isModalOpen : !this.state.isModalOpen});
    }
    handleSubmit(values){
        console.log("Current State is : " + JSON.stringify(values));
        alert("Current State is : " + JSON.stringify(values));
    }
    render(){
        return(
            <div>
                <Button outline onClick={this.toggleModal}>
                    <span className='fa fa-pencil fa-lg'> Submit Comment</span>
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                                <Label htmlFor='rating'>Rating</Label>
                                <Control.select model='.rating' 
                                    name='rating'
                                    className='form-control'>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                                <Label htmlFor='name' className='mt-2'>Your Name</Label>
                                <Control.text model='.name' 
                                    id='name' 
                                    name='name'
                                    className = 'form-control'
                                    validators = {{
                                        minLength: minLength(3), 
                                        maxLength: maxLength(15)
                                    }}/>
                                <Errors
                                    className = 'text-danger'
                                    model = '.name'
                                    show ='touched'
                                    messages = {{
                                        minLength : 'Must be greater than 2 characters',
                                        maxLength : 'Must be 15 characters or less'
                                    }}
                                />
                                <Label htmlFor='comment' className='mt-2'>Comment</Label>
                                <Control.textarea 
                                    model='.comment' 
                                    id='comment' 
                                    name='comment'
                                    className='form-control'
                                    rows='6'/>
                            <Button type='submit' value='submit' color='primary'
                            className='mt-3'>
                                Submit
                            </Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}


function RenderDish({dish}){
    if(dish!=null){
        return(
            <div className='col-12 col-md-5 m-1'>
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }else{
        return(
            <div></div>
        );
    }
}


function RenderComments({comments}){
    if(comments != null){
        const viewComments = comments.map((comment)=>{
            return(
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US',
                    {year : 'numeric', month : 'short', day: '2-digit'})
                    .format(new Date(Date.parse(comment.date)))}</p>
                </li>
            );
        });
        return(
            <div className='col-12 col-md-5 m-1'>
                <h4>Comments</h4>
                <ul className='list-unstyled'>
                { viewComments }
                </ul>
                <CommentForm />
            </div>
        );
    }
    else{
        return(
            <div>
                <CommentForm />
            </div>
        );
    }
}


const DishDetail = (props) => {
    if(props.dish == null){
        return(
            <div></div>
        );
    }else{
        return(
            <div className='container'>
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h3>{props.dish.name}</h3>
                        <hr/>
                    </div>
                </div>
                <div className='row'>
                    <RenderDish dish={props.dish}/>
                    <RenderComments comments={props.comments}/>
                </div>
            </div>
        );
    }
}

export default DishDetail;