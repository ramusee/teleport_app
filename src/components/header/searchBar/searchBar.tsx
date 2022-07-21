import React, {FC, FormEvent, useEffect, useState} from 'react';
import s from "../header.module.scss"
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {mainSlice} from "../../../store/slices/mainSlice";
import {fetchLocations} from "../../../store/actions/locationActions";

const SearchBar: FC = () => {
	const [inputValue, setInputValue] = useState('')
	useEffect(()=> {
		dispatch(fetchLocations())
	},[])
	
	const dispatch = useAppDispatch()
	const {setSearch} = mainSlice.actions
	const {error, isLoading, searchCities} = useAppSelector(state => state.mainReducer)
	
	const submitHandler = (e: FormEvent) => {
		e.preventDefault()
		dispatch(setSearch(inputValue))
		setInputValue('')
	}
	return (
		<form className={s.form}
			  onSubmit={(e)=> submitHandler(e)}
		>
			<input className={s.input}
				value={inputValue}
				   onChange={(e)=> setInputValue(e.target.value)}
				   type="text"
				   placeholder="Поиск города"
			/>
			<ul className={s.result}> {
				searchCities.map(city=> (
					<li key={city.matching_full_name}>{city.matching_full_name}</li>
				))
			}
			</ul>
		</form>
	);
};

export {SearchBar};