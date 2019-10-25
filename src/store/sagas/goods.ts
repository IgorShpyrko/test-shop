import { takeEvery, all, put } from 'redux-saga/effects';
import goodsService from 'services/goods';
import actionTypes from 'store/types';

function* getGoodsWorker(): Generator {
  try {
    const res = yield goodsService.get();
    yield put({
      type: actionTypes.setGoods,
      payload: res,
    });
  } catch (err) {
    console.error(err);
  }
}

function* watchGetGoods(): Generator {
  yield takeEvery(actionTypes.getGoods, getGoodsWorker);
}

export default function* rootGoodsSaga(): Generator {
  yield all([
    watchGetGoods(),
  ]);
}
