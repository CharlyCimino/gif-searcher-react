export const getGifs = async (category) => {
	const apiKey = 'aRYBnVoFvZ6MkWdARb9OwwJXTMQBaD64';
	const catCodificada = encodeURI(category); // 'Guitarra electrica' => Guitarra%20electrica
	const url = `https://api.giphy.com/v1/gifs/search?q=${catCodificada}&limit=10&api_key=${apiKey}`;

	const resp = await fetch(url);
	const { data } = await resp.json();

	const gifs = data.map(img => {
		return {
			id: img.id,
			title: img.title,
			url: img.images?.downsized_medium.url
		}
	})

	return gifs;
}