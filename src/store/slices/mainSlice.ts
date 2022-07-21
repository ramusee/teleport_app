import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICity, IMainSlice} from "../../models/interfaces";


const initialState: IMainSlice = {
	search: '',
	searchCities: [],
	isLoading: false,
	error: ''
};

export const mainSlice = createSlice({
	name: 'main',
	initialState,
	reducers: {
		fetching(state) {
			state.isLoading = true;
		},
		fetchingSuccess(state, action: PayloadAction<ICity[]>) {
			state.isLoading = false;
			state.error = '';
			state.searchCities = action.payload;
		},
		fetchingError(state, action: PayloadAction<string>) {
			state.isLoading = false;
			state.error = action.payload;
		},
		setSearch(state, action: PayloadAction<string>) {
			state.search = action.payload;
		},
	},
});
export default mainSlice.reducer;