import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl,urlRoot } from '../shared/baseUrl';

function RenderMenuItem({dish, onClick}){
    return(
        <Card>
            <Link to={`${urlRoot}/menu/${dish._id}`}>
                <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name}/>
                <CardImgOverlay>
                    <CardTitle>
                        <span style={{
                            color:"#fff", 
                            background:"rgba(28,33,38,0.6)", 
                            padding:5,
                            borderRadius:50}}>
                            {dish.name}
                        </span>
                        </CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

const Menu = (props) => {
    const menu = props.dishes.dishes.map((dish) => {
        return(
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dish={dish}/>
            </div>
        );
    });
    if(props.dishes.isLoading){
        return(
            <div className='container'>
                <div className='row'>
                    <Loading />
                </div>
            </div>
        );
    }else if(props.dishes.errMsg){
        return(
            <div className='container'>
                <div className='row'>
                    <h4>{props.errMsg}</h4>
                </div>
            </div>
        );
    }else{
        return(
            <div className='container'>
                <div className='row'>
                    <Breadcrumb>
                        <BreadcrumbItem><Link className="link-style" to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className='col-12'>
                        <h3>Menu</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    { menu }
                </div>
            </div>
        );
    }
}

export default Menu;