/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';

import { Container, Counter } from './styles';

function CovidInformation() {
	const [infoCovids, setInfoCovids] = useState([]);

	useEffect(() => {
		async function loadApi() {
			try {
				const responseApiCovid = await fetch(
					'https://covid19-brazil-api.now.sh/api/report/v1'
				);
				const { data } = await responseApiCovid.json();
				setInfoCovids(data);
			} catch (error) {
				console.log('Casos Não encontrado');
			}
		}
		loadApi();
	}, []);

	return (
		<Container>
			{/* {infoCovids.map((infoCovid) => (
				<div key={infoCovid.uid}>
					<span>{infoCovid.cases}</span>
				</div>
			))} */}
			<Counter>
				<div className="grid-container">
					<div className="last-update">Ultima atualização</div>
					<div className="cases">Casos</div>
					<div className="recovered">Recuperados</div>
					<div className="suspects">Suspeitos</div>
					<div className="deaths">Mortes</div>
				</div>
			</Counter>
		</Container>
	);
}

export default CovidInformation;
