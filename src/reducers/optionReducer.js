import types from '../actions/types';

const options = {
    work_flag:false,
    rest_flag:false,
    work_minute:0,
    rest_minute:0,
}
export default (state = options, action) => {
    switch (action.type) {
        case types.work_flag:
            return {
                ... options,
                work_flag: action.payload
            }
        case types.rest_flag:
            return {
                ... options,
                rest_flag: action.payload
            }
        case types.work_minute:
            return {
                ... options,
                work_minute: action.payload
            }
        case types.rest_minute:
            return {
                ... options,
                rest_minute: action.payload
            }
        default:
            return state;
    }
}