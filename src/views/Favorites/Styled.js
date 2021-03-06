import styled from "styled-components";

export const AllCards = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	flex-flow: wrap;
`;

export const Container = styled.div`
	padding: 50px;
	background-color: ${(props) => props.theme.bg};
	height: 100%;
`;
