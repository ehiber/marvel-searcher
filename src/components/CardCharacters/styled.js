import styled from "styled-components";

export const Card = styled.div`
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
	text-shadow: 2px 5px 1px black;
`;

export const Name = styled.h1`
	font-size: 1.5em;
	text-shadow: -1px 2px 1px black;
	position: absolute;
	top: 300px;
	left: 15px;
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
		box-shadow: 1px 15px 60px ${(props) => props.theme.text};
    }

    @media (max-width: 280px) {
        width : 200
        height : 330px;
      }
`;
