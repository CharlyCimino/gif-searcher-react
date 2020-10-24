import { useState, useEffect } from "react"
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category) => {


	const [state, setState] = useState({
		data: [],
		loading: true
	})

	// Similar a componentDidMount
	useEffect(() => {
		getGifs(category).then(imgs => {
			setState({
				data: imgs,
				loading: false
			})
		})
	}, [category]) // El segundo arg es un [] de dependencias
	// Si alguno de los valores pasados como dependencia cambia, se vuelve a ejecutar el useEffect

	return state;
}