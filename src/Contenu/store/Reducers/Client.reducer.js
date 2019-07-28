import * as Actions from '../Actions';
const initialState = {
    data: null,
}
const clientReducer = function (state = initialState, action) {
    switch (action.type) {

        case Actions.SAVE_CLIENT:
            {
                return {
                    ...state,
                    data: action.payload
                };
            }
        case Actions.GET_CLIENT:
            {
                return {
                    ...state,
                    data: action.payload
                };
            }


        default:
            {
                return state;
            }
    }
};

export default clientReducer;
