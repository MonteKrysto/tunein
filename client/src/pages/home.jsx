import React from "react";
import { Stations } from "../components/Stations";
import { Box, Grid, Skeleton } from "@chakra-ui/core";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import { useStations } from "../hooks/useStations";

// Cache the results
const queryCache = new QueryCache();

/**
 * Display all the available stations
 */
const Home = () => {
	const { data, error, isFetching } = useStations();

  if(error) return <div>Error</div>;
  
	return (
		<ReactQueryCacheProvider queryCache={queryCache}>
			<Box d="flex" justifyContent="center" mt="10" width="100%">
				<Skeleton isLoaded={!isFetching}>
					<Grid templateColumns="repeat(3, 1fr)" gap={20}>
						<Stations data={data} />
					</Grid>
				</Skeleton>
			</Box>
		</ReactQueryCacheProvider>
	);
};

export { Home };
