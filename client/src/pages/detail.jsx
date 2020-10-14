import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Grid, Image, Text } from "@chakra-ui/core";
import ReactAudioPlayer from "react-audio-player";
import { useStations } from "../hooks/useStations";


/**
 * Render a page that shows the details of the station
 */
const Detail = () => {
	const { id } = useParams();
	const { data } = useStations();
	const [station, setStation] = useState();

	useEffect(() => {
		if (data) {
			setStation(data.find((d) => d.id === id));
		}
	}, [data]);

	return (
		<>
			{station && (
				<Box d="flex" justifyContent="center" mt="10" width="100%">
					<Box d="flex" mt="10" justifyContent="center" width="100%">
						<Grid gap={2}>
							<Image size="150px" src={station.imgUrl} alt={station.name} />
							<Box width="50%">
								<Text fontSize="2xl">{station.name}</Text>
								<Text fontSize="md">{station.description}</Text>
							</Box>
							<ReactAudioPlayer src={station.streamUrl} autoPlay controls />
						</Grid>
					</Box>
				</Box>
			)}
		</>
	);
};

export { Detail };
