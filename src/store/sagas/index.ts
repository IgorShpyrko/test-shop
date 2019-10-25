import { all } from 'redux-saga/effects';

import goodsSaga from './goods';

const rootSaga = function* root(): Generator {
  yield all([
    goodsSaga(),
  ]);
};

export default rootSaga;
