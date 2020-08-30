import types from '../actions/types';

export default (state = false, action) => {
    switch(action.type){
        case types.work_flag:
            return action.payload;
        case types.rest_flag:
            return action.payload;
        default:
            return state;
    }
}