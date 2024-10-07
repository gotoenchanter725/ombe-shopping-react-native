// import { applyMiddleware, createStore } from 'redux';
// import rootReducer from '../reducer/index';
// import thunk from 'redux-thunk';

// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;


import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducer';

const store = configureStore({ reducer: rootReducer })

export default store;