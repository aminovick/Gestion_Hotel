import axios from 'axios';

export const GET_HOTEL = 'GET_HOTEL';
export const ADD_TO_CART = 'ADD_TO_CART';
export const SELECT_HOTEL = 'SELECT_HOTEL';
export const ADD_QTE = 'ADD_QTE';
export function getHotel() {

    const request = axios.get('http://localhost:3001/Hotels');

    return (dispatch) =>
        request.then((response) => {
            return dispatch({
                type: GET_HOTEL,
                payload: response.data

            })

        }
        );
}

export function addHotelToCart(hotelId) {
    return (dispatch) => {
        dispatch(selectHotel(hotelId));
        return dispatch({
            type: ADD_TO_CART,
            payload: {
                hotelId,
                qte: 1
            }
        });
    }
}

export function selectHotel(hotelId) {
    return {
        type: SELECT_HOTEL,
        payload: hotelId
    }
}

export function addQteHotel(hotelId, qte) {
    return {
        type: ADD_QTE,
        payload: {
            hotelId,
            qte
        }
    }
}