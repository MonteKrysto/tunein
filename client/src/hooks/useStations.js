import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

/**
 * A hook to get all the stations using react-query.
 * The results are then cached for faster page loads
 */
export const useStations = () => {
	return useQuery("statsions", async () => {
		const { data } = await axios(
			"https://s3-us-west-1.amazonaws.com/cdn-web.tunein.com/stations.json"
		);
		return data.data;
	});
};
