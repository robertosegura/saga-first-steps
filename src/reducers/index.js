import { combineReducers } from 'redux';
import imagesReducer from '../reducers/imagesReducer';
import loadingReducer from '../reducers/loadingReducer';
import errorReducer from '../reducers/errorReducer';
import pageReducer from '../reducers/pageReducer';
import statsReducer from '../reducers/statsReducer';

const rootReducer = combineReducers({
    images: imagesReducer,
    isLoading: loadingReducer,
    error: errorReducer,
    page: pageReducer,
    imageStats: statsReducer,
});

export default rootReducer;
