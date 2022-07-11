import React from 'react';
import {Link} from "react-router-dom";
import s from './header.module.scss'

const Header = () => {
	return (
		<header>
			<Link to="/">
				<img className={s.logo}
					 src="https://developers.teleport.org/assets/logo.e663724a.svg"
					 alt="Телепорт"/>
			</Link>
		</header>
	);
};

export {Header};