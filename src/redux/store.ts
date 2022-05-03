import {
  combineReducers,
  configureStore,
  MiddlewareArray,
} from '@reduxjs/toolkit';
import firstReducer from './slices/firstSlice';

const rootReducer = combineReducers({
  first: firstReducer,
  //    ... any other reduces come here
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: new MiddlewareArray(), //here would come any middleware with concat()
});
