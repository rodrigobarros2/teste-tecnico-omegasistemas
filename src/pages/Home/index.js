/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';

function Home() {
	const [states, setStates] = useState([]);

	useEffect(() => {
		async function loadApiCovid() {
			try {
				const response = await fetch(
					'https://covid19-brazil-api.now.sh/api/report/v1'
				);
				const { data } = await response.json();
				console.log(data);
				setStates(data);
			} catch (error) {
				console.log('Errou');
			}
		}
		loadApiCovid();
	}, []);

	return (
		<>
			{states.map((state) => (
				<div key={state.uid}>
					<h1>{state.cases}</h1>
				</div>
			))}
		</>
	);
}

export default Home;
