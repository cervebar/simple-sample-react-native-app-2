import {
  combineReducers,
  configureStore,
  MiddlewareArray,
} from '@reduxjs/toolkit';
import firstReducer from './slices/firstSlice';
import secondReducer from './slices/secondSlice';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  first: firstReducer,
  second: secondReducer,
  //    ... any other reduces come here
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: new MiddlewareArray().concat(thunk), //here would come any middleware with concat()
});

export type AppDispatch = typeof store.dispatch;
