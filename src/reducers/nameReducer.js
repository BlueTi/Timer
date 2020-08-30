import types from '../actions/types';

const name = 'testName';
export default (state = name, action) => {
    switch (action.type) {
        case types.Re_Name:
            return action.payload;
        default:
            return state;
    }
}