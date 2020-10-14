import React from "react";
import { Box } from "@chakra-ui/core";
import { Link } from "react-router-dom";

/**
 * A card component to show the available station details
 * @param {string} to - The route
 * @param {object} children - The elements of the card body
 */
const Card = ({ to, children, ...rest }) => {
	return (
		<Link to={to}>
			<Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden" {...rest}>
				{children}
			</Box>
		</Link>
	);
};

export { Card };
