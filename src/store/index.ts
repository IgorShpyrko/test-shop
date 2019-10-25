import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  {},
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

export default store;

sagaMiddleware.run(rootSaga);
