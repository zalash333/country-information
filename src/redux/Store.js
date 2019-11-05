import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

export default (extra, preloadedState = null) => {
  const middlewares = [thunk.withExtraArgument(extra)];

  if (preloadedState) {
    // front
    return createStore(
      rootReducer,
      preloadedState,
      applyMiddleware(...middlewares),
      // composeWithDevTools(applyMiddleware(...middlewares)),
    );
  }

  return createStore(
    // ssr
    rootReducer,
    applyMiddleware(...middlewares),
    // composeWithDevTools(applyMiddleware(...middlewares)),
  );
};
