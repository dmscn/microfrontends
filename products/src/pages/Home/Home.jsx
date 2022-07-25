import React from "react"
import Card from "./Card"
import { Wrap } from "@chakra-ui/react"

import useProducts from "../../hooks/useProducts"
import Loading from "../../components/Loading/Loading"
import Error from "../../components/Error"


export default function Home() {
	const { isLoading, error, data } = useProducts()

	if(isLoading) return <Loading/>
	if(error) return <Error/>


	return (
		<Wrap spacing="20px" p="20px" justify="space-evenly" bg="gray.50" shouldWrapChildren>
			{data.map(p => <Card key={p.title} product={p}/> )}
		</Wrap>
	)
}