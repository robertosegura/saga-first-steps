import { take, fork, put, call } from 'redux-saga/effects';
import { IMAGES } from '../constants';
import { fetchImageStats } from '../api';
import { loadImageStats, setImageStats, setImageStatsError } from '../actions';

function* handleStatsRequest(id) {
    // Iterate to retry on error
    // for (let i = 0; i < 3; i++) {
    try {
        yield put(loadImageStats(id));
        const response = yield call(fetchImageStats, id);
        yield put(setImageStats(id, response.downloads.total));
        // return true;
    } catch (error) {
        yield put(setImageStatsError(id));
    }
    // }

    // yield put(setImageStatsError(id));
}

export default function* watchStatsRequests() {
    while (true) {
        // Just execute on every load_success
        const { images } = yield take(IMAGES.LOAD_SUCCESS);

        for (const image of images) {
            // fork is a non blocking action
            yield fork(handleStatsRequest, image.id);
        }
    }
}
