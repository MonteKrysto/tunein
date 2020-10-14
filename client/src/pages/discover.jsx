import React, { useEffect, useState } from "react";
import { Box, Grid, Text } from "@chakra-ui/core";
import { useStations } from "../hooks/useStations";
import { Card } from "../components/Card";

/**
 * Render a page that shows all the available tags.
 *
 * Clicking on a tag will show all the stations that contain that tag
 */
const Discover = () => {
	const { status, data, error, isFetching } = useStations();
	const [tags, setTags] = useState();

	useEffect(() => {
		if (data) {
			const tempTags = [];
			const allTags = data.map((d) => tempTags.concat(d.tags));
			const uniqueTags = new Set(allTags.flat());
			setTags([...uniqueTags]);
		}
	}, [data]);

	return (
		<>
			<Box d="flex" justifyContent="center" mt="10" width="100%">
				<Grid templateColumns="repeat(3, 1fr)" gap={20}>
					{tags &&
						tags.map((tag, idx) => (
							<Card
								to={`/discover/${tag}`}
								key={idx}
								height="40"
								width="15rem"
								d="flex"
								justifyContent="center"
								alignItems="center"
							>
								<Text fontSize="2xl" textTransform="capitalize">
									{tag}
								</Text>
							</Card>
						))}
				</Grid>
			</Box>
		</>
	);
};

export { Discover };
