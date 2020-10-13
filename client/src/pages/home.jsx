import React, { useCallback, useEffect, useState } from "react";
import { Box, Grid } from "@chakra-ui/core";
import { Card } from "../components/Card";
import axios from "axios";

const Home = (props) => {
	const [data, setData] = useState();

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios(
				"https://s3-us-west-1.amazonaws.com/cdn-web.tunein.com/stations.json"
			);
			console.log("result: ", result);
			setData(result.data.data);
		};

		fetchData();
	}, []);

	return (
		<Box d="flex" justifyContent="center" mt="10" width="100%">
			<Grid templateColumns="repeat(3, 1fr)" gap={20}>
				{data && data.map((d) => <Card key={d.id} data={d} />)}
			</Grid>
		</Box>
	);
};

export { Home };
