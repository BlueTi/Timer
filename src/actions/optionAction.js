import types from './types';


export function setStartOptions(options) {
    return {
        type: types.start,
        payload: options
    }
}

export function endWork() {
    return {
        type: types.end_work,
    }
}

export function stop() {
    return {
        type: types.stop,
    }
}
