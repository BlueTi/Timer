import { delay, takeEvery, takeLatest, put } from 'redux-saga/effects';
import types from '../actions/types';
import ActionCreators from '../actions';
// Worker: Increase Counter Async (Delayed By 4 Seconds)
function* WorkFlagSaga() {
  try {
    // Dispatch Action To Redux Store
    yield ActionCreators.setWorkFlag();
  }
  catch (error) {
    console.log(error);
  }
};
// Watcher: Increase Counter Async
export function* watchIncreaseCounter() {
  // Take Last Action Only
  yield takeLatest('INCREASE_COUNTER', increaseCounterAsync);
};