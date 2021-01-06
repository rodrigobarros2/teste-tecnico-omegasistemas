import React from 'react';
import ImgCorona from '../../assets/corona.svg';

import { Container } from './styles';

const Header = () => (
	<Container>
		<h1>Coronavírus Brasil</h1>
		<img src={ImgCorona} alt="Corona Vírus" />
	</Container>
);

export default Header;
