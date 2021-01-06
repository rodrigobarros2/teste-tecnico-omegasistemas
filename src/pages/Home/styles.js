import styled from 'styled-components';
import { device } from '../../config/breakpoints';

export const Container = styled.div`
	justify-content: center;
	display: flex;
	height: 90%;
	background-color: #3b5998;
	@media ${device.tablet} {
		display: flex;
		flex-direction: column;
		justify-content: end;
	}
`;
export const LocalityContent = styled.div`
	display: flex;
	flex-direction: column;
	margin: 2% 0 0 0;
	width: 25%;
	@media ${device.tablet} {
		margin: 1% auto;
		width: 320px;
	}
	@media ${device.phone} {
		width: 300px;
	}
	select {
		padding: 0 0px 0px 5%;
		height: 70px;
		&:first-child {
			text-transform: uppercase;
		}
	}

	button {
		margin: 4% 0 0 0;
		height: 70px;
	}
`;

export const CovidContent = styled.div`
	display: flex;
	justify-content: center;
	margin: 2% 0 0 5%;
	@media ${device.tablet} {
		margin: 0;
	}
`;
export const Counter = styled.div`
	.grid-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr;
		gap: 20px 20px;
		color: #ffffff;
		grid-template-areas:
			'cases recovered'
			'suspects deaths'
			'last-update last-update';
		div {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			height: 150px;
			width: 200px;
			@media ${device.tablet} {
				height: 100px;
				width: 150px;
			}
			@media ${device.phone} {
				height: 80px;
				width: 140px;
			}

			span {
				margin: 10px 0 0 0;
			}
		}
	}

	.last-update {
		grid-area: last-update;
		color: #707070;
		background-color: #ffffff;
		width: 100% !important;
	}

	.cases {
		grid-area: cases;
		background-color: #2a9d8f;
	}

	.recovered {
		grid-area: recovered;
		background-color: #003049;
	}

	.suspects {
		grid-area: suspects;
		background-color: #457b9d;
	}

	.deaths {
		grid-area: deaths;
		background-color: #e63946;
	}
`;
