import types from '../actions/types';

export default (state = 0, action) => {
    switch(action.type){
        case types.work_minute:
            return action.payload;
        case types.rest_minute:
            return action.payload;
        default:
            return state;
    }
}