import React, {FC} from 'react';
import './index.scss'
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/home/Home";
import {Header} from "./components/header/Header";
import {City} from "./pages/city/City";

const App: FC = () => {
	return (
		<div>
			<Header/>
			<main>
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/city/:id" element={<City/>}/>
				</Routes>
			</main>
		
		</div>
	);
};

export {App};