import React from 'react';
import Header from '../../components/Header';
import Locality from '../../components/Locality';

import { Container } from './styles';

function Home() {
	return (
		<>
			<Header />
			<Container>
				<Locality />
			</Container>
		</>
	);
}

export default Home;
