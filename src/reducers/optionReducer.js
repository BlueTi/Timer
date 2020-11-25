import types from '../actions/types';

const options = {
    work_flag:false,
    rest_flag:false,
    stop_flag:true,
    work_minute:0,
    rest_minute:0,
}
export default (state = options, action) => {
    switch (action.type) {
        case types.start:
            return {
                work_flag:true,
                rest_flag:true,
                stop_flag:false,
                work_minute:action.payload.work_minute,
                rest_minute:action.payload.rest_minute,
            }
        case types.end_rest:
            return{
                ... options,
            }

        case types.end_work:
            return {
                ... state,
                work_flag:false,
            }

        case types.end_rest:
            return {
                ... state,
                rest_flag:false,
            }
        case types.stop:
            return options;

        default:
            return state;
    }
}