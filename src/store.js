// Imports: Dependencies
import { createStore } from 'redux';
import rootReducer from './reducers/';// Imports: Redux Root Saga

// Redux: Store
const store = createStore(
  rootReducer);
// Exports
export {
  store,
}