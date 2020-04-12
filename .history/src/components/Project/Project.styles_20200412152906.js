import styled from 'styled-components';

export const ProjectContainer = styled.section`
	max-width: 1200px;
	margin: 0 auto;
	display: grid;
	place-content: center;

	@media (min-width: 850px) {
		height: 60vh;
		grid-template-columns: 1fr 1fr;
	}
`;

export const Column = styled.div`place-self: center;`;

export const Title = styled.h3`
	max-width: 900px;
	margin: 0 auto;
	font-size: 2.5rem;
	text-align: start;
	padding: 3rem 2rem;
	width: 100%;

	@media only screen and (min-width: 600px) {
		text-align: end;
		padding-top: 25rem;
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
	}
`;

export const ProjectImageDesk = styled.img`
	position: relative;
	width: 100%;
	max-width: 400px;

	@media (min-width: 850px) {
		width: 100%;
	}
`;

export const Description = styled.p`
	padding: 2rem;
	color: #61626d;
	line-height: 35px;
	font-size: 1.3rem;
	font-weight: 200;
	text-align: start;

	@media (min-width: 600px) {
		line-height: 2.7rem;
	}
`;

export const Tags = styled.div`
	padding: 1rem 2rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;

	p {
		padding: 0 0.5rem;
		font-size: 1.3rem;
		text-align: center;
		border-radius: 40px;
		font-weight: 300;
	}
`;

export const SocialsContainer = styled.div`
	padding: 1rem 0;
	display: inline-flex;
	position: relative;
	left: 2rem;

	a {
		padding: .5rem;
		width: 50px;
		height: 50px;
		color: #fff;
		background-color: #618ee924;
		margin: 0 10px;
		border-radius: 50%;
		cursor: pointer;
	}
`;

export const Space = styled.div`padding: 4rem;`;
