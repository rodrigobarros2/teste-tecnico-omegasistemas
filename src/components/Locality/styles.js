import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin: 2% 0 0 0;
	width: 25%;
	select {
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
