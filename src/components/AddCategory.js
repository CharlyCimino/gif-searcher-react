import React, { useState } from 'react'

export const AddCategory = () => {
	const [inputValue, setInputValue] = useState('Hola')

	const handleInputChange = e => {
		setInputValue(e.target.value);
	}

	const handleSubmit = e => {
		e.preventDefault();
		console.log('Hecho');
	}
	return (
		<form onSubmit={handleSubmit}>
			<input type="text" value={inputValue} onChange={handleInputChange} />
			<h2>Add Category</h2>
		</form>
	)
}
