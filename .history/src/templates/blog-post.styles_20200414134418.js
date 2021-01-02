import styled from 'styled-components';

export const BlogPostContainer = styled.article`
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

	header {
		@media only screen and (min-width: 800px) {
			padding-left: 2rem;
		}

		h3 {
			font-family: "Playfair Display";
			font-weight: bold;
			font-size: 3rem;
			letter-spacing: 0.05em;
			color: ${({ theme }) => theme.mint};
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
			padding: 1rem 0;
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

export const HeaderImg = styled.img`
	width: 80%;
	height: 80%;
	position: relative;
	object-fit: cover;
	margin: 0;

	@media only screen and (min-width: 800px) {
		width: 100%;
		height: 600px;
		top: -13rem;
	}
`;

export const SubscribeSection = styled.section`
	display: grid;
	position: relative;
	max-width: 1000px;
	margin: 0 auto;
	padding: 4rem 2rem 7rem 2rem;
	border-radius: 20px;
	justify-content: start;
	align-content: center;
	background: rgba(220, 219, 234, 0.3);

	h3 {
		margin: 2rem 0;
		font-size: 4rem;
		letter-spacing: 0.05em;
	}

	h4 {
		margin: 0;
		letter-spacing: 0.07em;
		font-size: 1.6rem;
		line-height: 35px;
		text-transform: initial;
		font-weight: 500;
	}

	p {
		font-size: 1rem;
		letter-spacing: 0.05em;
		margin: 0;
		color: ${({ theme }) => theme.mint};
		opacity: .5;
	}

	@media only screen and (min-width: 600px) {
		h3 {
			margin: 0;
			padding: 1rem 2rem;
			font-size: 5rem;
		}

		h4 {
			padding: 0 2rem;
			font-size: 1.7rem;
		}

		p {
			padding: 0 2rem;
		}

		form {
			padding: 0 2rem;
			max-width: 70%;
		}
	}
`;
