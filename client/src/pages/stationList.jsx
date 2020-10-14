import React, { useEffect, useState } from "react";
import { Box, Grid, Skeleton } from "@chakra-ui/core";
import { useParams } from "react-router-dom";
import { useStations } from "../hooks/useStations";
import { Stations } from "../components/Stations";

const StationList = () => {
	const { tag } = useParams();
	const { data, isFetching } = useStations();
	const [stations, setStations] = useState();

	useEffect(() => {
		if (data) {
			const filteredStations = data.reduce((acc, val) => {
				if (val.tags.includes(tag)) {
					acc.push(val);
				}
				return acc;
			}, []);

			setStations(filteredStations);
		}
	}, [data]);

	return (
		<>
			{stations && (
				<Box d="flex" justifyContent="center" mt="10" width="100%">
					<Skeleton isLoaded={!isFetching}>
						<Grid templateColumns="repeat(3, 1fr)" gap={20}>
							<Stations data={stations} />
						</Grid>
					</Skeleton>
				</Box>
			)}
		</>
	);
};

export { StationList };
