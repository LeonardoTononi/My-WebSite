import styled from 'styled-components';

export const ArticleContainer = styled.article`
	position: relative;
	max-width: 1000px;
	padding: 6rem 2rem;
	border-radius: 20px;
	display: grid;
	grid-gap: 1rem;
	justify-content: start;
	align-content: center;
	align-items: center;
	grid-template-areas: "img" "header" "sub";

	@media only screen and (min-width: 800px) {
		grid-template-areas: "img header header" "img sub sub";
		height: 40vh;
	}

	img {
		grid-area: img;
		width: 200px;
		height: 200px;
		position: absolute;
		bottom: 1.5rem;

		@media only screen and (min-width: 800px) {
			position: initial;
		}
	}
`;

export const ArticleStyled = styled.section`
	p {
		font-size: 1.4rem;
		letter-spacing: 0.05em;
		color: rgba(63, 61, 86, 0.85);
	}
`;
