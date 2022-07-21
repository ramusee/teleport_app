import React from 'react';
import s from './home.module.scss';
import {Link} from "react-router-dom";
import {useAppSelector} from "../../hooks/redux";

const Home = () => {
	const {error, isLoading, searchCities} = useAppSelector(state => state.mainReducer)
	return (
		<div className={s.page}>
			<Link to="/city/123">City</Link>
		</div>
	);
};

export {Home};