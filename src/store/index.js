import { createStore, compose, applyMiddleware } from 'redux';

import rootReducer from 'src/reducers';
import logMiddleware from '../middleware/logMiddleware';
import ajaxMiddleware from '../middleware/ajaxMiddleware';

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    logMiddleware,
    ajaxMiddleware,
  ),
);

const store = createStore(
  rootReducer,
  // preloadedState,
  enhancers,
);

export default store;