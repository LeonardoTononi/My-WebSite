import styled from 'styled-components';

export const ArticleContainer = styled.article`
	position: relative;
	max-width: 1000px;
	margin: 0 auto;
	padding: 6rem 2rem;
	border-radius: 20px;
	display: grid;
	grid-gap: 1rem;
	justify-content: start;
	align-content: center;
	align-items: center;

	@media only screen and (min-width: 800px) {
		padding: 15rem 2rem 6rem 2rem;
	}

	img {
		width: 200px;
		height: 200px;
		position: absolute;
		left: 2rem;
		top: -7rem;

		@media only screen and (min-width: 800px) {
			width: 350px;
			height: 350px;
			top: -12rem;
			left: 5rem;
		}
	}

	header {
		@media only screen and (min-width: 800px) {
			padding-left: 2rem;
		}

		h3 {
			font-family: "Playfair Display";
			font-weight: bold;
			font-size: 3rem;
			letter-spacing: 0.05em;
			color: #3f3d56;
		}
		small {
			font-weight: normal;
			line-height: 3rem;
			font-size: 1rem;
			letter-spacing: 0.05em;
			color: rgba(63, 61, 86, 0.6);
		}
	}

	section {
		@media only screen and (min-width: 800px) {
			padding-left: 2rem;
		}

		h1,
		h2,
		h3,
		h4,
		h5 {
			font-family: "Playfair Display";
		}

		h2 {
			line-height: 3rem;
			font-size: 2.5rem;
		}
		h3 {
			line-height: 2.5rem;
			font-size: 2rem;
		}

		p {
			font-size: 1.4rem;
			letter-spacing: 0.05em;
			color: rgba(63, 61, 86, 0.6);
			padding: 3rem 0;
		}

		li {
			font-size: 1.4rem;
			margin: 0 2rem;
			letter-spacing: 0.05em;
			color: rgba(63, 61, 86, 0.9);
			font-weight: bold;
		}

		blockquote {
			p {
				padding-left: 2rem;
				line-height: 2.4rem;
				font-size: 1.6rem;
				color: rgba(63, 61, 86, 0.8);
				border: none;
			}
		}
	}
`;

export const End = styled.div`
	padding: 0 2rem 3rem 2rem;
	max-width: 800px;
	margin: 0 auto;
	p {
		font-size: 3rem;
		font-weight: bold;
		line-height: 2.5rem;
		letter-spacing: 0.05em;
		color: rgba(63, 61, 86);
	}
`;
