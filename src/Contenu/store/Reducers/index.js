import { combineReducers } from 'redux';
import Client from './Client.reducer';
import Hotel from './Hotel.reducer'
import CART from './Cart.reducer'

const reducer = combineReducers({
    Client,
    Hotel,
    CART
});

export default reducer;
