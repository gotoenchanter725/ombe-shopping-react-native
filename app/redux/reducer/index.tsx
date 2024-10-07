import { combineReducers } from 'redux';
import drawerReducer from './drawerReducer';
import cartReducer from './cartReducer';
import wishListReducer from './wishListReducer';

const rootReducer = combineReducers({
    drawer: drawerReducer,
    cart: cartReducer,
    wishList : wishListReducer
});

export default rootReducer;