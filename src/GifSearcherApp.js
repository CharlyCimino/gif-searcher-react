import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifSearcherApp = () => {

	const [categories, setCategories] = useState(['Musica', 'Futbol', 'Peliculas']);

	const handleAdd = () => {
		setCategories([...categories, 'Viajes'])
	}

	return (
		<>
			<h2>GifSearcherApp</h2>
			<AddCategory setCategories={setCategories} />
			<hr />

			<button onClick={handleAdd}>Agregar</button>

			<ol>
				{
					categories.map(cat => <li key={cat}> {cat}</li>)
				}
			</ol>
		</>
	);
};