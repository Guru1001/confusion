import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText} from 'reactstrap';

class DishDetail extends Component{
    renderDish(dish){
        if(dish!=null){
            return(
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name}/>
                        <CardBody>
                            <CardTitle>{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
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
    
    renderComments(comments){
        if(comments != null){
            const viewComments = comments.map((comment)=>{
                return(
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US',{year : 'numeric', month : 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                    </li>
                );
            });
            return(
                <div className='col-12 col-md-5 m-1'>
                    <h4>Comments</h4>
                    <ul className='list-unstyled'>
                    { viewComments }
                    </ul>
                </div>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    render(){
        if(this.props.dish == null){
            return(
                <div></div>
            );
        }else{
            return(
                <div className='row'>
                    {this.renderDish(this.props.dish)}
                    {this.renderComments(this.props.dish.comments)}
                </div>
            );
        }
    }
}

export default DishDetail;