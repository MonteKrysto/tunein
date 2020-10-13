import React from "react";
import { Badge, Box, Image } from "@chakra-ui/core";
import { Link } from "react-router-dom";

/**
 * A card component to show the available station details
 * @param {object} data - The station details
 */
const Card = ({ data }) => {
	const calculateScoreColor = (score) => {
		const colors = {
			25: "red.300",
			50: "orange.300",
			75: "yellow.300",
			100: "green.300",
		};
		console.log("color: ", colors[25 * Math.round(score / 25)]);
		return colors[25 * Math.round(score / 25)];
	};
	return (
		<Link to="/detail">
			<Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
				<Box d="flex" mt="10" justifyContent="center" with="100%">
					<Image size="150px" src={data.imgUrl} alt={data.name} />
				</Box>
				<Box p="6">
					<Box d="flex" alignItems="baseline">
						{data.tags &&
							data.tags.map((tag, idx) => (
								<Badge
									key={idx}
									ml="3"
									rounded="full"
									px="2"
									variantColor="teal"
								>
									{tag}
								</Badge>
							))}
					</Box>

					<Box
						mt="1"
						fontWeight="semibold"
						as="h4"
						lineHeight="tight"
						isTruncated
					>
						{data.description}
					</Box>
					<Box d="flex" mt="2" alignItems="center">
						<Box
							as="span"
							p="1"
							ml="2"
							bg={calculateScoreColor(data.popularity)}
							fontSize="sm"
						>
							Popularity {data.popularity}
						</Box>
						<Box
							as="span"
							p="1"
							ml="2"
							bg={calculateScoreColor(data.reliability)}
							fontSize="sm"
						>
							Reliability {data.reliability}
						</Box>
					</Box>
				</Box>
			</Box>
		</Link>
	);
};

export { Card };
