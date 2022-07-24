import {
	useQuery,
} from "@tanstack/react-query"


export default function useProducts() {
	return useQuery(["products"], () => {
		return fetch(`${process.env.API_BASE_URL}/products`)
			.then(res => res.json())
			.then(({result}) => result)
	})
}