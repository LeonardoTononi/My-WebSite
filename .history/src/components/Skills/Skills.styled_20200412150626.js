import styled, { keyframes } from 'styled-components';

export const SkillsContainer = styled.section`
	padding: 2rem 0.5rem; /* 
  background-color: #F2F3F5; */
	max-width: 1700px;
	margin: 0 auto;

	ul {
		display: grid;
		align-items: center;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));

		li {
			list-style-type: none;
			position: relative;
			margin: 0 2rem;
			font-size: 1.4rem;
			align-items: center;
			font-weight: 300;
			display: flex;
			flex-direction: column;
			justify-content: center;
			cursor: pointer;

			&:hover span {
				visibility: visible;
			}

			span {
				transition: visibility 50ms ease-in;
				visibility: hidden;
				position: absolute;
				top: 7rem;
				background: #3f3d56;
				color: #fff;
				border-radius: 5px;
				padding: .3rem .5rem;
				z-index: 1;
			}

			img {
				margin: 1em;
				width: 35px;
				height: 60px;
				position: relative;
				top: 8px;
			}
		}
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
