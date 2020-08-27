import styled from "styled-components";

export const Navbar = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 50px;
	margin-top: 13px;
	background-color: white;
	border-bottom: 2px rgb(235, 235, 235) solid;
`;

export const InputHeroe = styled.input`
	width: 100%;
	outline: none;
	height: 30px;
	margin-right: 50px;
	padding-left: 20px;
	border-top: 0ch;
	border-bottom: 0ch;
	border-right: 0ch;
	border-color: rgba(224, 224, 224, 0.1);
	font-size: medium;

	::placeholder {
		font-size: 2hv;
		color: rgb(224, 224, 224);
	}

	@media (max-width: 500px) {
		width: 70%;
	}
`;

export const IconNavbar = styled.img`
	width: 100px;
	height: 80px;
	margin: -20px 0 0 17px;
	padding-right: 20px;
	@media (max-width: 500px) {
		margin: 0 0 0 10px;
		width: 50px;
		height: 40px;
		padding-right: 5px;
	}
`;

export const Icon = styled.i`
	color: rgb(138, 138, 138);
	padding: 10px 80px;
	@media (max-width: 500px) {
		padding: 10px 20px;
	}
`;
