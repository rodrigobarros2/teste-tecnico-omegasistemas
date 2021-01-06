import styled from 'styled-components';

export const Container = styled.div`
	background-color: #f0f2f5;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 10%;

	img {
		margin: 0 0 0 14px;
		width: 30px;
		filter: invert(8%) sepia(100%) saturate(7291%) hue-rotate(254deg)
			brightness(107%) contrast(144%);
	}
`;
