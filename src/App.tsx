import React, {FC} from 'react';
import './index.scss'
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/home/Home";
import {Location} from "./pages/location/Location";
import {Header} from "./components/header/Header";

const App: FC = () => {
	return (
		<div>
			<Header/>
			<main>
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/location/:id" element={<Location/>}/>
				</Routes>
			</main>
		
		</div>
	);
};

export {App};