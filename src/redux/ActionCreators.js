import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const postComment = (dishId, rating, author, comment) => (dispatch) =>{
    const newComment = {
        rating : rating,
        author : author,
        comment: comment,
    }
    newComment.date = new Date().toISOString();
    return fetch( baseUrl +"dishes/"+ dishId + "/comments", {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            'Content-Type' : 'application/json',
        },
        credentials: 'same-origin',
    })
    .then(response => {
        if(response.ok)return response;
        else{
            let error = new Error('Error '+ response.status
                                + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    }, error => {
        throw new Error(error.message);
    })
    .then(response => response.json())
    .then(comment => dispatch(addComment(comment)))
    .catch(error => {
        console.log("Post error : " + error.message);
        alert('Your comment could not be posted\nError: '+ error.message);
    });
}

export const addComment = (comment) => ({
    type : ActionTypes.ADD_COMMENT,
    payload: comment,
});

export const postFeedback = (firstname, lastname, telnum, email, agree, contacttype, message) => (dispatch) =>{
    const newFeedback = {
        firstname : firstname,
        lastname : lastname,
        telnum : telnum,
        email : email,
        agree : agree,
        contacttype: contacttype,
        message : message,
    }
    newFeedback.date = new Date().toISOString();
    return fetch(baseUrl + 'feedback', {
        method: 'POST',
        body: JSON.stringify(newFeedback),
        headers: {
            'Content-Type' : 'application/json',
        },
        credentials: 'same-origin',
    })
    .then(response => {
        if(response.ok)return response;
        else{
            let error = new Error('Error '+ response.status
                                + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    }, error => {
        throw new Error(error.message);
    })
    .then(response => response.json())
    .then(feedback => addFeedback(feedback))
    .catch(error => {
        console.log("Post error : " + error.message);
        alert('Your feedback could not be posted\nError: '+ error.message);
    });
}

export const addFeedback = (feedback) => {
    alert('Feedback successfully submitted' +
        '\nId     : ' + feedback.id +
        '\nName   : ' + feedback.firstname + ' ' + feedback.lastname +
        '\nTelnum : ' + feedback.telnum + 
        '\nEmail  : ' + feedback.email +
        '\nAgree  : ' + feedback.agree +
        '\nContact: ' + feedback.contacttype+ 
        '\nMessage: ' + feedback.message);
}

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));
    return fetch(baseUrl + "dishes")
        .then(response => {
            if(response.ok)return response;
            else{
                let error = new Error('Error '+ response.status
                                    + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }, error => {
            throw new Error(error.message);
        })
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => {
            dispatch(dishesFailed(error.message));
        });
}

export const dishesLoading = () => ({
    type : ActionTypes.DISHES_LOADING,
});

export const dishesFailed = (errmsg) => ({
    type : ActionTypes.DISHES_FAILED,
    payload : errmsg
})

export const addDishes = (dishes) => ({
    type : ActionTypes.ADD_DISHES,
    payload : dishes,
})


// export const fetchComments = () => (dispatch) => {
//     return fetch(baseUrl + 'comments')
//         .then(response => {
//             console.log(response);
//             if(response.ok)return response;
//             else{
//                 let error = new Error('Error '+ response.status
//                                     + ': ' + response.statusText);
//                 error.response = response;
//                 throw error;
//             }
//         }, error => {
//             throw new Error(error.message);
//         })
//         .then(response => response.json())
//         .then(comments => dispatch(addComments(comments)))
//         .catch(error => {
//             dispatch(commentsFailed(error.message));
//         });
// }
// export const commentsFailed = (errmsg) => ({
//     type : ActionTypes.COMMENTS_FAILED,
//     payload : errmsg
// })
// export const addComments = (comments) => ({
//     type : ActionTypes.ADD_COMMENTS,
//     payload : comments,
// })


export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));
    return fetch(baseUrl + 'promotions')
        .then(response => {
            if(response.ok)return response;
            else{
                let error = new Error('Error '+ response.status
                                    + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }, error => {
            throw new Error(error.message);
        })
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)))
        .catch(error => {
            dispatch(promosFailed(error.message));
        });
}

export const promosLoading = () => ({
    type : ActionTypes.PROMOS_LOADING,
});

export const promosFailed = (errmsg) => ({
    type : ActionTypes.PROMOS_FAILED,
    payload : errmsg
})

export const addPromos = (promos) => ({
    type : ActionTypes.ADD_PROMOS,
    payload : promos,
})


export const fetchLeaders = () => (dispatch) => {
    dispatch(leadersLoading(true));
    return fetch(baseUrl + 'leaders')
        .then(response => {
            if(response.ok)return response;
            else{
                let error = new Error('Error '+ response.status
                                    + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }, error => {
            throw new Error(error.message);
        })
        .then(response => response.json())
        .then(leaders => dispatch(addLeaders(leaders)))
        .catch(error => {
            dispatch(promosFailed(error.message));
        });
}

export const leadersLoading = () => ({
    type : ActionTypes.LEADERS_LOADING,
});

export const leadersFailed = (errmsg) => ({
    type : ActionTypes.LEADERS_FAILED,
    payload : errmsg
})

export const addLeaders = (leaders) => ({
    type : ActionTypes.ADD_LEADERS,
    payload : leaders,
})