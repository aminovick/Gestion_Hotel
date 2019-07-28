import axios from 'axios';

export const SAVE_CLIENT = '[HOTEL] SAVE CLIENT';
export const GET_CLIENT = '[HOTEL] GET CLIENT'
export function saveClient(newData) {

    const request = axios.post('http://localhost:3001/Client', newData);

    return (dispatch) =>
        request.then((response) => {

            return dispatch({
                type: SAVE_CLIENT,
                payload: response.data

            })

        }
        );
}
export function getClient() {

    const request = axios.get('http://localhost:3001/Client');

    return (dispatch) =>
        request.then((response) => {

            return dispatch({
                type: GET_CLIENT,
                payload: response.data

            })

        }
        );
}