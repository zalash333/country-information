import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

export default (extra, preloadedState = null) => {
  const middlewares = [thunk.withExtraArgument(extra)];

  if (preloadedState) {
    return createStore(
      rootReducer,
      preloadedState,
      applyMiddleware(...middlewares),
    );
  }

  return createStore(
    rootReducer,
    applyMiddleware(...middlewares),
  );
};
