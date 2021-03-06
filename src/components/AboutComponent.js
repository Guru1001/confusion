import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseUrl, urlRoot } from '../shared/baseUrl';
import { Loading } from './LoadingComponent';
import { Fade, Stagger } from 'react-animation-components';


function RenderLeader({leader,isLoading,errMsg}){
    if(isLoading){
        return(
            <Loading />
        );
    }else if(errMsg){
        return(
            <h3>{errMsg}</h3>
        );
    }else{
        return(
            <div key={leader.id} className="col-12 mt-5">
                <Media tag="li">
                    <Media left middle>
                        <Media object 
                            src={baseUrl + leader.image} 
                            alt={leader.name} 
                            style={{borderRadius : 50}}
                        />
                    </Media>
                    <Media body className="ml-5">
                        <Media heading>{leader.name}</Media>
                            <p>{leader.designation}</p>
                            <p>{leader.description}</p>
                    </Media>
                </Media>
            </div>
        );
    }
}

function About(props) {
    const RenderLeaders = ({leaders, isLoading, errMsg}) =>{
        const leadersList = leaders.map((leader) => {
            return (
                <Fade in>
                    <RenderLeader 
                        leader={leader} 
                        isLoading={props.leaders.isLoading}
                        errMsg = {props.leaders.errMsg}/>
                </Fade>
            );
        });
        if(isLoading)
            return(
                <Loading/>
            );
        else if(errMsg)
            return(
                <h4>{errMsg}</h4>
            );
        else return(
            <Media list>
                <Stagger in> 
                    {leadersList}
                </Stagger>
            </Media>
        );
    }

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link className="link-style" to={ urlRoot + "/home"}>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Our History</h2>
                    <p>Started in 2010, Ristorante Fusion Taj quickly established 
                        itself as a culinary icon par excellence in India. 
                        With its unique brand of world fusion cuisine that can 
                        be found nowhere else, it enjoys patronage from the 
                        A-list clientele in India.  Featuring four of the 
                        best three-star Michelin chefs in the world, you never 
                        know what will arrive on your plate the next time you 
                        visit us.</p>
                    <p>The restaurant traces its humble beginnings to 
                        <em>The Frying Pan</em>, a successful chain started by 
                        our CEO, Mr. Peter Pan, that featured for the first time 
                        the world's best cuisines in a pan.</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="background-dark text-white">
                            Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">3 Feb. 2013</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">Tata Groups</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$1,250,375</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">258</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">You better cut the pizza in 
                                    four pieces because I'm not hungry enough 
                                    to eat six.</p>
                                <footer className="blockquote-footer">Yogi Berra,
                                <cite title="Source Title">The Wit and Wisdom 
                                    of Yogi Berra, P. Pepe, 
                                    Diversion Books, 2014</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>Corporate Leadership</h2>
                </div>
                <div className="col-12">
                    <RenderLeaders 
                        leaders={props.leaders.leaders}
                        isLoading={props.leaders.isLoading}
                        errMsg={props.leaders.errMsg}/>
                </div>
            </div>
        </div>
    );
}

export default About;    