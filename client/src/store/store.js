import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../reducers/counter'
import rootReducer from '../reducers/root_reducer';
// const reducer = {}

const store = configureStore({
	reducer: rootReducer
})

export default store;