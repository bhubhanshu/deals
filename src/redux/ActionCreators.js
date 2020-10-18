import * as ActionTypes from './ActionTypes';

export const fetchDeals = () => (dispatch) => {
    return fetch('../../webScraper/data.json')
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
        .then(Deals => dispatch(addDeals(Deals)))
        .catch(error => dispatch(DealsFailed(error.message)));
}

export const DealsFailed = (errmess) => ({
    type: ActionTypes.DEALS_FAILED,
    payload: errmess
});

export const addDeals = (Deals) => ({
    type: ActionTypes.ADD_DEALS,
    payload: Deals
});