/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { Container, ContainerCovid, Counter } from './styles';

function Locality() {
	const [selectValue, setSelectValue] = useState();
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

	function handleSelection() {
		console.log(selectValue);
	}

	return (
		<>
			<Container>
				<select
					name="select"
					value={selectValue}
					onChange={(e) => setSelectValue(e.target.value)}
				>
					<option selected="selected" hidden="hidden">
						selecione o seu estado
					</option>
					{infoCovids.map((infoCovid) => (
						<>
							<option value={infoCovid.uf}>
								{infoCovid.state}
							</option>
						</>
					))}
				</select>

				<button type="button" onClick={handleSelection}>
					Buscar estatísticas
				</button>
			</Container>

			<ContainerCovid>
				<Counter>
					<div className="grid-container">
						<div className="last-update">Ultima atualização</div>
						<div className="cases">Casos</div>
						<div className="recovered">Recuperados</div>
						<div className="suspects">Suspeitos</div>
						<div className="deaths">Mortes</div>
					</div>
				</Counter>
			</ContainerCovid>
		</>
	);
}

export default Locality;
