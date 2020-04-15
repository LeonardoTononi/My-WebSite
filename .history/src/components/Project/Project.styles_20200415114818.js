import styled from 'styled-components';

export const ProjectContainer = styled.section`
	max-width: 1200px;
	margin: 0 auto;
	padding: 3rem 2rem;
	display: grid;
	place-content: center;
	background: #ffffff;
	box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.09);
	border-radius: 20px;

	@media (min-width: 850px) {
		grid-template-columns: 1fr 1fr;
		padding: 5rem 2rem;
	}
`;

export const Column = styled.div`
	place-self: center;
	@media only screen and (min-width: 850px) {
		order: ${({ order1, order2 }) => (order1 ? order1 : order2)};
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
		text-align: end;
		padding: 10rem 5rem 5rem 5rem;
	}
`;

export const ProjectImageMobile = styled.img`
	position: relative;
	left: 12%;
	width: 80%;
	top: 3rem;
	max-width: 400px;

	@media (min-width: 850px) {
		width: 100%;
		transition: transform 400ms ease-in-out;
		&:hover {
			transform: scale(1.2);
		}
	}
`;

export const ProjectImageDesk = styled.img`
	position: relative;
	width: 100%;
	max-width: 600px;

	@media (min-width: 850px) {
		width: 100%;
		transition: transform 400ms ease-in-out;
		&:hover {
			transform: scale(1.2);
		}
	}
`;

export const Description = styled.p`
	padding: 2rem 0;
	color: #61626d;
	line-height: 35px;
	font-size: 1.3rem;
	font-weight: 200;
	text-align: start;
	margin: 0;

	@media only screen and (min-width: 600px) {
		line-height: 2.7rem;
		padding: 2rem;
	}
`;

export const Tags = styled.div`
	padding: 1rem 0;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;

	p {
		background: #f2f3f5;
		padding: 0.1rem 1.5rem;
		margin: 0.5rem;
		font-size: 1rem;
		text-align: center;
		border-radius: 20px;
		font-weight: 400;
	}

	@media only screen and (min-width: 600px) {
		padding: 2rem;
	}
`;

export const SocialsContainer = styled.div`
	padding: 1rem 0;
	display: inline-flex;
	position: relative;

	a {
		padding: .4rem 1rem;
		color: #3f3d56;
		margin: 0 10px;
		cursor: pointer;
		transition: background-color 100ms ease-in;

		&:first-of-type {
			border: 2px solid #3f3d56;
			border-radius: 10px;
		}
	}

	@media only screen and (min-width: 600px) {
		padding: 0 2rem;
	}
`;

export const Space = styled.div`
	/* 	&:last-of-type {
		padding: 0;
	}

	@media only screen and (min-width: 600px) {
		padding: 10rem;

		&:last-of-type {
			padding: 0;
		}
	} */
`;
