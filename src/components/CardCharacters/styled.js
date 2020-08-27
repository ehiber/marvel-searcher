import styled from "styled-components";

export const Card = styled.div`
	font-size: 1.5vh;
	font-family: "Roboto", sans-serif;
	color: white;
	margin: 0.1em;
	padding: 0.3em;
	display: flex;
`;

export const Icon = styled.i`
	font-size: 1.3em;
	color: white;
	position: absolute;
	top: 15px;
	left: 215px;
	@media (max-width: 280px) {
		left: 180px;
	}
`;

export const Name = styled.h1`
	text-shadow: 2px 2px 3px black;
	position: absolute;
	top: 330px;
	left: 20px;
`;

export const Container = styled.div`
	position: relative;
	display: inline-block;
	text-align: center;
`;

export const Img = styled.img`

    border-radius : 3px;
    width : 250px;
    height : 380px;
    
    :hover{
        cursor: pointer;
    }

    @media (max-width: 280px) {
        width : 200
        height : 330px;
      }
`;
