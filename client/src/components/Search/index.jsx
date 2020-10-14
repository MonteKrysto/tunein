import React, { useState, useEffect } from "react";
import { Box, Grid, Input } from "@chakra-ui/core";
import { Link } from "react-router-dom";
import { useStations } from "../../hooks/useStations";

const Search = () => {
	const [searchText, setSearchText] = useState("");
	const [searchResults, setSearchResults] = useState();
	const { data } = useStations();

	const handleChange = (e) => {
		setSearchText(e.target.value);
		if (e.target.value.length > 0) {
			const names = data.reduce((acc, val) => {
				if (val.name.toLowerCase().includes(e.target.value)) {
					acc.push(val);
				}
				return acc;
			}, []);
		
			setSearchResults(names);
		} else {
			setSearchResults("");
		}
	};


	return (
		<>
			{console.log("searchRes: ", searchResults)}
			<Input
				onChange={(e) => handleChange(e)}
				placeholder="Search Stations"
				value={searchText}
				width="25rem"
				mt="10"
			/>
			<Box>
				{searchResults &&
					searchResults.length > 0 &&
					searchResults.map((result) => (
						<Grid templateRows="repeat(1,1fr)">
							<Link to={`/detail/${result.id}`}>{result.name}</Link>
						</Grid>
					))}
			</Box>
		</>
	);
};

export { Search };
