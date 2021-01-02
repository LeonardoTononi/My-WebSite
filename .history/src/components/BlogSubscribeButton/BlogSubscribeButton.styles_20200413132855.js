import styled from 'styled-components';

export const FormSubscribe = styled.form`
	display: grid;
	grid-gap: 1rem;
	position: relative;
	top: 3rem;

	@media only screen and (min-width: 600px) {
		grid-template-columns: 2fr 1fr;
		grid-gap: .1rem;
	}
`;

export const EmailInput = styled.input`
	border: 2px solid ${({ theme }) => theme.mint};
	border-radius: 15px;
	width: 90%;
	height: 45px;
	outline: none;
	padding: 0 2rem;
`;
export const SubmitInput = styled.input`
	background: ${({ theme }) => theme.mint};
	border: 2px solid ${({ theme }) => theme.mint};
	border-radius: 15px;
	color: #fff;
	width: 90%;
	height: 45px;
	letter-spacing: 0.05em;
	font-size: 1rem;
	outline: none;
	cursor: pointer;
	transition: transform 100ms ease-in-out

	&:hover {
		transform: scale(1.1);
	}
`;

export const SuccessModal = styled.div`
	border-radius: 15px;
	text-align: center;
	font-size: 1.5rem;
	color: ${({ theme }) => theme.mint};
	width: 60%;
	padding: 0.2rem 1rem;
`;
