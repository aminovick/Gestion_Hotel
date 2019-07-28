import * as Actions from '../Actions';
const initialState = {
    data: {},
}
const cartReducer = function (state = initialState, action) {
    switch (action.type) {

        case Actions.ADD_TO_CART:
            {
                return {
                    ...state,
                    data: { ...state.data, [action.payload.hotelId]: action.payload.qte }
                };
            }

        case Actions.ADD_QTE:
            const newQte = action.payload.qte;
            return {
                ...state,
                data: { ...state.data, [action.payload.hotelId]: newQte }
            };

        default:
            {
                return state;
            }
    }
};

export default cartReducer;
