import React from "react"
import { Box, Image, Text } from "@chakra-ui/react"

export default function Card() {
	return (
		<Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
			<Image src="https://loremflickr.com/400/400" alt=""/>
			<Box padding='20px'>
				<Text as="h3" fontSize="lg" fontWeight="600">Product title</Text>
				<Text fontSize="sm">Price</Text>
				<Text fontSize="sm" color="gray.400">Description of the product</Text>
			</Box>
		</Box>
	)
}