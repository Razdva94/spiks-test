import { configureStore } from '@reduxjs/toolkit';
import checkboxSliceReducer from './checkboxSlice';

export default configureStore({
	reducer: {
		checkboxHandler: checkboxSliceReducer,
	},
});
