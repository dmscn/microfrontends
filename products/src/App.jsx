import React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import Home from "./pages/Home"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import "reset-css"

const queryClient = new QueryClient()

export default function App() {
	return(
		<QueryClientProvider client={queryClient}>
			<ChakraProvider>
				<Home />
			</ChakraProvider>
		</QueryClientProvider>
	)
  
}