import React,{ Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { urlRoot } from '../shared/baseUrl';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { postComment,postFeedback, fetchDishes , fetchPromos, fetchLeaders} from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = state => {
    return {
        dishes : state.dishes,
        // comments : state.comments,
        promotions : state.promotions,
        leaders : state.leaders,
    } 
}

const mapDispatchToProps = (dispatch) => ({
    postComment : (dishId, rating, author, comment) => 
        dispatch(postComment(dishId, rating, author, comment)),
    postFeedback: (firstname, lastname, telnum, email, agree, contacttype, message) => 
        dispatch(postFeedback(firstname, lastname, telnum, email, agree, contacttype, message)),
    fetchDishes: () => {dispatch(fetchDishes())},
    resetFeedbackForm: () => {dispatch(actions.reset('feedback'))},
    //fetchComments: () => {dispatch(fetchComments())},
    fetchPromos: () => {dispatch(fetchPromos())},
    fetchLeaders: () =>{dispatch(fetchLeaders())},
})

class Main extends Component{

    componentDidMount(){
        this.props.fetchDishes();
        //this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchLeaders();
    }
    render(){
        const HomePage = () => {
            return(
                <Home dish={this.props.dishes.dishes.filter((dish)=>dish.featured)[0]}
                dishesLoading = {this.props.dishes.isLoading}
                dishesErrMsg = {this.props.dishes.errMsg}
                promotion={this.props.promotions.promotions.filter((promo)=>promo.featured)[0]}
                promosLoading = {this.props.promotions.isLoading}
                promosErrMsg = {this.props.promotions.errMsg}
                leader={this.props.leaders.leaders.filter((leader)=>leader.featured)[0]}
                leadersLoading = {this.props.leaders.isLoading}
                leadersErrMsg = {this.props.leaders.errMsg}
                />
            );
        }

        const DishWithId = ({match}) => {
            return(
                <DishDetail dish={this.props.dishes.dishes.filter(
                    (dish) => dish._id === match.params.dishId)[0]}
                    isLoading = {this.props.dishes.isLoading}
                    errMsg = {this.props.dishes.errMsg}
                    postComment = {this.props.postComment}
                    />
            );
        }

        return (
            <div>
                <Header/>
                    <TransitionGroup>
                        <CSSTransition key={this.props.location.key} classNames='page' timeout={300}>
                            <Switch location={this.props.location}>
                                <Route path={urlRoot+"/home"} component={ HomePage }/>
                                <Route exact path={urlRoot+"/menu"} 
                                component={ ()=> <Menu dishes={this.props.dishes}/>}/>
                                <Route path={urlRoot+"/menu/:dishId"} component={ DishWithId }/>
                                <Route exact path="/contactus"
                                component={ ()=> 
                                    <Contact 
                                        resetFeedbackForm={this.props.resetFeedbackForm}
                                        postFeedback = {this.props.postFeedback}
                                        />}/>
                                <Route exact path={urlRoot+"/aboutus"} 
                                component={() => 
                                    <About 
                                        leaders={this.props.leaders}
                                    />}/>
                                <Redirect to={urlRoot+"/home"}/>
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
