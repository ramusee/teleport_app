import axios from "../../axios";
import {AppDispatch} from "../store";
import {ServerResponse} from "../../models/interfaces";
import {mainSlice} from "../slices/mainSlice";

export const fetchLocations = () => {
	return async (dispatch: AppDispatch) => {
		try {
			dispatch(mainSlice.actions.fetching)
			const response = await axios.get<ServerResponse>('cities/?search=moscow');
			dispatch(mainSlice.actions.fetchingSuccess(response.data._embedded["city:search-results"]))
		} catch (e) {
			if (e instanceof Error) {
				dispatch(mainSlice.actions.fetchingError(e.message))
			}
		}
	};
};