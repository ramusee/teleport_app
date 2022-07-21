export interface IMainSlice {
	search: string;
	searchCities: ICity[];
	isLoading: boolean;
	error: string;
}

export interface ICity {
	matching_full_name: string;
	_links: ILink;
}

export interface ServerResponse {
	count: number;
	_embedded: ICities;
}

interface ICities {
	["city:search-results"]: ICity[];
}

interface ILink {
	["city:item"]: {
		href: string;
	};
}