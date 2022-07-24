import React from "react"
import PropTypes from "prop-types"
import { Box, Heading } from "@chakra-ui/react"

export default function Loading({ message = "Something went wrong..." }) {
	return (
		<Box display="flex" w="100" h="100vh" justifyContent="center" alignItems="center" >
			<Heading as='h1' size='lg'>
				{message}
			</Heading>
		</Box>
	)
}

Loading.propTypes = {
	message: PropTypes.string,
}
