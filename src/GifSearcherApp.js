import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifSearcherApp = () => {

	const [categories, setCategories] = useState(['Guitarra electrica']);

	return (
		<>
			<h2>GifSearcherApp</h2>
			<AddCategory setCategories={setCategories} />
			<hr />

			<ol>
				{
					categories.map(cat =>
						<GifGrid key={cat} category={cat} />
					)
				}
			</ol>
		</>
	);
};