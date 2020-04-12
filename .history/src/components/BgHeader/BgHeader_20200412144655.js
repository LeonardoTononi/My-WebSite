import React from 'react';
import styled from 'styled-components';
import Background from '../../assets/PlayBG.png';

const BackgroundStyle = styled.div`
	display: none;

	img {
		object-fit: cover;
		position: absolute;
		z-index: -1;
		left: 40%;
		bottom: 18%;
	}

	@media (min-width: 900px) {
		display: inline;
		left: 45%;
		bottom: 40%;
	}
`;

const BgHeader = () => (
	<BackgroundStyle>
		<img src={Background} alt='' />
	</BackgroundStyle>
);

export default BgHeader;
