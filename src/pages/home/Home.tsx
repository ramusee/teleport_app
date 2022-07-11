import React from 'react';
import s from './home.module.scss'
import {Link} from "react-router-dom";

const Home = () => {
	return (
		<div className={s.page}>
			<Link to="/location/123">location</Link>
		</div>
	);
};

export {Home};