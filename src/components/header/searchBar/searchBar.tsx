import React, {FC, FormEvent, useState} from 'react';
import s from "../header.module.scss"

const SearchBar: FC = () => {
	const [inputValue, setInputValue] = useState('')
	const submitHandler = (e: FormEvent) => {
		e.preventDefault()
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
				   placeholder="Поиск города"/>
		</form>
	);
};

export {SearchBar};