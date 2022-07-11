import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IMainSlice{
	search: string;
}

const initialState: IMainSlice = {
	search: '',
}
export const mainSlice = createSlice({
	name: 'main',
	initialState,
	reducers: {
		setSearch(state, action: PayloadAction<string>) {
			state.search = action.payload
		},
	}
})
export default mainSlice.reducer