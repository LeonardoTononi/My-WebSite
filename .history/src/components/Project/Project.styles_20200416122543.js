import styled from 'styled-components';
import Img from 'gatsby-image';
export const ProjectContainer = styled.section`
	@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700|Quicksand:400,600&display=swap');
	max-width: 1200px;
	margin: 5rem 1rem;
	padding: 4rem 1rem;
	display: grid;
	place-content: center;
	background: #ffffff;
	box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
	border-radius: 30px;
	transition: background-color 100ms ease-in-out;

	&:hover {
		background-color: rgb(193, 214, 255);
	}

	@media (min-width: 850px) {
		grid-template-columns: 1fr 1fr;
		height: 500px;
		margin: 5rem auto;
		padding: 4rem;
	}
`;

export const ColumnText = styled.div`
	place-self: center;
	position: relative;
	@media only screen and (min-width: 850px) {
		order: ${({ order1, order2 }) => (order1 ? order1 : order2)};
	}
`;
export const ColumnMedia = styled.div`
	place-self: center;
	place-content: center;
	display: grid;
	position: relative;

	@media only screen and (min-width: 850px) {
		order: ${({ order1, order2 }) => (order1 ? order1 : order2)};
		top: 15rem;
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
		font-size: 3.5rem;
		padding: 10rem 5rem 5rem 5rem;
	}
`;

export const ProjectTitle = styled.h4`
	font-family: 'Montserrat', sans-serif;
	font-size: 2.5rem;
	line-height: 55px;
	text-transform: inherit;
	display: flex;
	align-items: center;
	letter-spacing: 0.05em;
	color: #3f3d56;
	font-weight: 600;
	margin: 3rem 0 1rem 0;

	@media only screen and (min-width: 850px) {
		text-align: ${({ alignEnd }) => (alignEnd ? 'end' : 'start')};
	}
`;

export const ProjectNumb = styled.p`
	position: relative;
	font-weight: bold;
	font-size: 200px;
	line-height: 65px;
	letter-spacing: 0.05em;
	color: rgba(14, 14, 14, 0.06);

	@media only screen and (min-width: 850px) {
		text-align: ${({ alignEnd }) => (alignEnd ? 'end' : 'start')};
		left: ${({ alignEnd }) => (alignEnd ? '2rem' : 'start')};
	}
`;

export const ProjectImageMobile = styled(Img)`
	position: relative;
	left: 4%;
	width: 300px;
		@media only screen and (min-width: 850px) {
			width: 500px;
			bottom: 3rem;
		 }
`;

export const ProjectImageDesk = styled(Img)`
	position: relative;
	width: 300px;
	margin: 2rem 0;

	@media only screen and (min-width: 850px) {
		width: 500px;
		margin: 0;
	  bottom: 4rem;
  }
`;

export const Tags = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	padding-top: 1rem;

	@media only screen and (min-width: 850px) {
		justify-content: ${({ alignEnd }) => (alignEnd ? 'flex-end' : 'flex-start')};
	}
`;

export const Tag = styled.p`
	font-family: 'Quicksand', sans-serif;
	background: #f2f3f5;
	padding: 0.1rem 1.5rem;
	height: 40px;
	margin: 0.5rem;
	font-size: 1rem;
	border-radius: 20px;
	font-weight: 400;
	font-style: normal;
	line-height: 45px;
	display: flex;
	align-items: center;
	text-align: center;
	letter-spacing: 0.05em;
`;

export const SocialsContainer = styled.div`
	padding: 1rem 0;
	display: inline-flex;
	justify-content: center;
	position: relative;

	a {
		font-family: 'Montserrat', sans-serif;
		text-transform: uppercase;
		padding: .4rem 1rem;
		color: #3f3d56;
		font-weight: bold;
		margin: 0 10px;
		cursor: pointer;
		transition: background-color 100ms ease-in;

		&:first-of-type {
			border: 3px solid #3f3d56;
			border-radius: 20px;
		}
	}

	@media only screen and (min-width: 850px) {
		padding: 0 2rem;
		position: relative;
		bottom: 2rem;
	}
`;

export const Space = styled.div`
	padding: 2rem;
	@media (min-width: 850px) {
		padding: 15rem;
	}
`;
