/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';

function Testeapi() {
	const [localities, setLocalities] = useState([]);

	useEffect(() => {
		async function loadApi() {
			try {
				const responseApiLocalities = await fetch(
					'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
				);
				const data = await responseApiLocalities.json();
				setLocalities(data);
			} catch (error) {
				console.log('Estado Não Encontrado');
			}
		}
		loadApi();
	}, []);

	return (
		<>
			{localities.map((localitie) => (
				<div key={localitie.id}>
					<h2>{localitie.sigla}</h2>
				</div>
			))}
		</>
	);
}

export default Testeapi;
