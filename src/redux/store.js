/* eslint-disable no-unused-vars */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

export default function configureStore(initialState) {
  const composeEnhancers = (process.env.NODE_ENV === 'development') ? (
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // options like actionSanitizer, stateSanitizer
      }) : compose) : compose;

  const enhancer = composeEnhancers(
    applyMiddleware(thunk),
  );

  return createStore(
    rootReducer,
    initialState,
    enhancer,
  );
}
