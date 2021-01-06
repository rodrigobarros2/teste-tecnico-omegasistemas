/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { Container, LocalityContent, CovidContent, Counter } from './styles';

function Home() {
	const [infoCovids, setInfoCovids] = useState([]);
	const [localities, setLocalities] = useState([]);
	const [selectValue, setSelectValue] = useState();
	const [casos, setCasos] = useState({});

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

	function handleSelection() {
		const casoscovid = infoCovids.find((infos) => infos.uf === selectValue);
		const lastupdate = new Date(casoscovid.datetime);
		casoscovid.datetime = `${
			lastupdate.getDay() <= 9
				? `0${lastupdate.getDay()}`
				: lastupdate.getDay()
		}/${
			lastupdate.getMonth() <= 9
				? `0${lastupdate.getMonth() + 1}`
				: lastupdate.getMonth()
		}/${lastupdate.getFullYear()} às ${
			lastupdate.getHours() <= 9
				? `0${lastupdate.getHours()}`
				: lastupdate.getHours()
		}:${
			lastupdate.getMinutes() <= 9
				? `0${lastupdate.getMinutes()}`
				: lastupdate.getMinutes()
		}`;
		setCasos(casoscovid);
		console.log(casoscovid);
	}

	return (
		<>
			<Container>
				<LocalityContent>
					<select
						name="select"
						value={selectValue}
						onChange={(e) => setSelectValue(e.target.value)}
					>
						<option selected="selected" hidden="hidden">
							selecione o seu estado
						</option>
						{localities.map((localitie) => (
							<>
								<option value={localitie.sigla}>
									{localitie.nome}
								</option>
							</>
						))}
					</select>

					<button type="button" onClick={handleSelection}>
						Buscar estatísticas
					</button>
				</LocalityContent>

				<CovidContent>
					<Counter>
						<div className="grid-container">
							<div className="last-update">
								Ultima atualização
								{casos.datetime}
							</div>
							<div className="cases">
								Casos
								<span>{casos.cases}</span>
							</div>
							<div className="recovered">
								Recuperados
								{casos.refuses}
							</div>
							<div className="suspects">
								Suspeitos
								{casos.suspects}
							</div>
							<div className="deaths">
								Mortes
								{casos.deaths}
							</div>
						</div>
					</Counter>
				</CovidContent>
			</Container>
		</>
	);
}

export default Home;
