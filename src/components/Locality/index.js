import React, { useState, useEffect } from 'react';
import { Container } from './styles';

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
		<Container>
			<select name="hall">
				{localities.map((localitie) => (
					<>
						<option value="" selected="selected" hidden="hidden">
							selecione o seu estado
						</option>
						<option value="locality">{localitie.nome}</option>
					</>
				))}
			</select>

			<button type="button">Buscar estatísticas</button>
		</Container>
	);
}

export default Testeapi;
