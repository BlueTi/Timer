import types from './types';

export function setWorkMinute(minutes){
    return {
        type: types.work_minutes,
        payload: minutes
    };
}

export function setRestMinute(minutes){
    return {
        type: types.rest_minutes,
        payload: minutes
    };
}