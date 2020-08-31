import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 50px;
	padding-top: 13px;
	background-color: ${(props) => props.theme.bg};
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
	border-color: ${(props) => props.theme.placeholder};
	font-size: medium;
	background: ${(props) => props.theme.bg};
	color: ${(props) => props.theme.text};

	::placeholder {
		font-size: 2hv;
		color: ${(props) => props.theme.placeholder};
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

export const Icon = styled.div`
	padding: 10px 80px;
	display: flex;

	@media (max-width: 500px) {
		padding: 10px 20px;
	}
`;

export const StyledLink = styled(Link)`
	i {
		color: ${(props) => props.theme.icon};
	}
`;

export const IconTheme = styled.i`
	padding: 0 15px;
	color: ${(props) => props.theme.text};
`;
