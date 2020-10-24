import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifSearcherApp = () => {

	const [categories, setCategories] = useState(['Musica', 'Futbol', 'Peliculas']);

	return (
		<>
			<h2>GifSearcherApp</h2>
			<AddCategory setCategories={setCategories} />
			<hr />

			<ol>
				{
					categories.map(cat => <li key={cat}> {cat}</li>)
				}
			</ol>
		</>
	);
};