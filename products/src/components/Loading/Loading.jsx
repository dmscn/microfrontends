import React from "react"
import { Box, Spinner } from "@chakra-ui/react"

export default function Loading() {
	return (
		<Box display="flex" w="100" h="100vh" justifyContent="center" alignItems="center" >
			<Spinner size="xl" />
		</Box>
	)
}
