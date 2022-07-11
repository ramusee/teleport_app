import React, {FC} from 'react';
import {Link} from "react-router-dom";
import s from './header.module.scss'
import {SearchBar} from "./searchBar/searchBar";

const Header: FC = () => {
	return (
		<header className={s.header}>
			<Link to="/">
				<img className={s.logo}
					 src="https://developers.teleport.org/assets/logo.e663724a.svg"
					 alt="Телепорт"/>
			</Link>
			<SearchBar/>
		</header>
	);
};

export {Header};