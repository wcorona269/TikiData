import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../reducers/root_reducer';

const store = configureStore({
	reducer: rootReducer
})

export default store;