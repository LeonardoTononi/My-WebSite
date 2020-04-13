import styled from 'styled-components';

export const AboutContainer = styled.section`
	position: relative;
	padding: 0 2rem;
	display: grid;
	place-content: center;
	align-items: center;
	max-width: 900px;
	margin: 0 auto;
	grid-template-areas: "text1" "img" "text2";

	@media (min-width: 1400px) {
		grid-template-areas: "img" "text1" "text2";

		img {
			width: 200px;
			height: 200px;
			position: absolute;
			bottom: -8rem;
			left: -16rem;
		}
	}
`;

export const Text = styled.p`
	color: #61626d;
	padding: 2rem 0;
	text-align: start;
	font-weight: 200;
	line-height: 35px;
	font-size: 1.3rem;

	&:first-of-type {
		grid-area: text1;
	}

	&:last-of-type {
		grid-area: text2;
	}

	@media (min-width: 600px) {
		line-height: 2.7rem;
		padding-bottom: 0;
	}
`;

export const ImageStyled = styled.img`
	place-self: center;
	grid-area: img;
	width: 280px;
	border-radius: 38% 75% 44% 98%;
	height: 280px;
	object-fit: cover;
	background-color: #c1d6ff;
	padding: 1rem;

	@media (min-width: 600px) {
		margin: 3rem 0;
	}
`;
export const Title = styled.h3`
	max-width: 900px;
	margin: 0 auto;
	font-size: 2.5rem;
	text-align: start;
	padding: 3rem 2rem;
	width: 100%;

	@media only screen and (min-width: 600px) {
		padding-top: 25rem;
	}
`;
