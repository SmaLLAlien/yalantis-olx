import { takeEvery, put, select } from 'redux-saga/effects';
import { ORIGINS_REQUESTED } from '../actionsTypes';
import { URLs } from '../../../../global/constants';
import { normalizeOrigins } from '../../../../helpers/helpers';
import { loading, loadingFailed, loadingSucceeded } from '../actions/products';
import { productInstanceApi } from '../../../../core/api';
import { getOriginsUrlState } from '../selectors/pageSelectors';
import { originsLoaded } from '../actions/origins';

function* fetchOrigins() {
  yield put(loading());

  try {
    const { data } = yield productInstanceApi.get(URLs.ORIGINS);
    yield put(loadingSucceeded());

    let items = yield normalizeOrigins(data.items);
    const searchValues = yield select(getOriginsUrlState);

    items = yield items.map((origin) => {
      if (searchValues.indexOf(origin.value) !== -1) {
        const temp = { ...origin };
        temp.checked = true;
        return temp;
      }
      return origin;
    });

    yield put(originsLoaded(items));
  } catch (error) {
    if (error.message) {
      yield put(loadingFailed(error.message));
    }
    yield put(loadingFailed('Something is wrong, please try again later'));
  }
}

export default function* watcherOrigins() {
  yield takeEvery(ORIGINS_REQUESTED, fetchOrigins);
}
