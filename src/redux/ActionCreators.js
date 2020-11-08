import * as ActionTypes from './ActionTypes';

export const fetchDeals = () => (dispatch) => {
    return fetch('https://dd-deals.herokuapp.com/')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(deals => dispatch(addDeals(deals)))
        .catch(error => dispatch(dealsFailed(error.message)));
}

export const dealsFailed = (errmess) => ({
    type: ActionTypes.DEALS_FAILED,
    payload: errmess
});

export const addDeals = (deals) => ({
    type: ActionTypes.ADD_DEALS,
    payload: deals
});