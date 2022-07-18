import React from "react"
import Card from "./Card"
import { Box } from "@chakra-ui/react"

const mockedProducts = [
	{
		title: "Product 1",
		price: "$300.00",
		description: "Product description",
		imageUrl: "https://loremflickr.com/400/400",
	},
	{
		title: "Product 2",
		price: "$300.00",
		description: "Product description",
		imageUrl: "https://loremflickr.com/400/400",
	},
	{
		title: "Product 3",
		price: "$300.00",
		description: "Product description",
		imageUrl: "https://loremflickr.com/400/400",
	},
	{
		title: "Product 4",
		price: "$300.00",
		description: "Product description",
		imageUrl: "https://loremflickr.com/400/400",
	},
	{
		title: "Product 5",
		price: "$300.00",
		description: "Product description",
		imageUrl: "https://loremflickr.com/400/400",
	},
	{
		title: "Product 6",
		price: "$300.00",
		description: "Product description",
		imageUrl: "https://loremflickr.com/400/400",
	},
]

export default function Home() {
	return (
		<Box display="flex" gap="20px" flexWrap="wrap" bg="gray.50" w="100%" h="100%">
			{mockedProducts.map(p => <Card key={p.title} product={p}/>)}
		</Box>
	)
}