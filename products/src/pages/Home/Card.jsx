import React from "react"
import PropTypes from "prop-types"
import { Box, Image, Text } from "@chakra-ui/react"

export default function Card({ product }) {
	const { title, price, description, imageUrl } = product
	return (
		<Box w="300px" borderWidth="1px" borderRadius="lg" overflow="hidden" bg="white">
			<Image src={imageUrl} alt={title}/>
			<Box padding='20px'>
				<Text as="h3" fontSize="lg" fontWeight="600">{title}</Text>
				<Text fontSize="sm">{price}</Text>
				<Text fontSize="sm" color="gray.400">{description}</Text>
			</Box>
		</Box>
	)
}

Card.propTypes = {
	product: PropTypes.shape({
		title: PropTypes.string.isRequired,
		price: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		imageUrl: PropTypes.string.isRequired,
	}).isRequired,
}