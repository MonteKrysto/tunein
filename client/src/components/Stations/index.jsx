import React from "react";
import { Badge, Box, Image } from "@chakra-ui/core";
import { Card } from "../Card";
import { Search } from '../Search';

/**
 * Render a grid of all the stations
 * @param {object} data - The data object to iterate over
 */
const Stations = ({ data }) => {
	/**
	 * Render the background color of the badge depending on the calcluated
	 * value to the nearst 25
	 * @param {number} score
	 */
	const calculateScoreColor = (score) => {
		const colors = {
			25: "red.300",
			50: "orange.300",
			75: "yellow.300",
			100: "green.300",
		};
		return colors[25 * Math.round(score / 25)];
	};

	return (
		<>
			{data &&
				data.map((d) => (
					<Card key={d.id} data={d} to={`/detail/${d.id}`}>
						<Box d="flex" mt="10" justifyContent="center" width="100%">
							<Image size="150px" src={d.imgUrl} alt={d.name} />
						</Box>
						<Box p="6">
							<Box d="flex" alignItems="baseline">
								{d.tags &&
									d.tags.map((tag, idx) => (
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
								{d.description}
							</Box>
							<Box d="flex" mt="2" alignItems="center">
								<Box
									as="span"
									p="1"
									ml="2"
									bg={calculateScoreColor(d.popularity)}
									fontSize="sm"
								>
									Popularity {d.popularity}
								</Box>
								<Box
									as="span"
									p="1"
									ml="2"
									bg={calculateScoreColor(d.reliability)}
									fontSize="sm"
								>
									Reliability {d.reliability}
								</Box>
							</Box>
						</Box>
					</Card>
				))}
		</>
	);
};

export { Stations };
