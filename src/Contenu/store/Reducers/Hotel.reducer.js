import * as Actions from '../Actions';
const initialState = {
    data: [],
    selectedHotel: null,
}
const hotelReducer = function (state = initialState, action) {
    switch (action.type) {

        case Actions.GET_HOTEL:

            let indexedHotels = {};

            action.payload.map((hotel) => {
                indexedHotels[hotel.id] = hotel;
            });
            return {
                ...state,
                data: indexedHotels
            };
        case Actions.SELECT_HOTEL:
            return {
                ...state,
                selectedHotel: action.payload
            };

        default:
            {
                return state;
            }
    }
};

export default hotelReducer;
