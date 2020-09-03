import types from './types';

export function setWorkFlag(option){
    return {
        type: types.work_flag,
        payload: option
    }
}

export function setRestFlag(option){
    return {
        type: types.rest_flag,
        payload: option
    }
}

export function setWorkMinute(minute){
    return {
        type: types.work_minute,
        payload: minute
    }
}

export function setRestMinute(minute){
    return {
        type: types.rest_minute,
        payload: minute
    }
}
