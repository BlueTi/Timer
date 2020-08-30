import types from './types';

export function setWorkFlag(flag){
    return {
        type: types.work_flag,
        payload: flag
    };
}

export function setRestFlag(flag){
    return {
        type: types.rest_flag,
        payload: flag
    };
}