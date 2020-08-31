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

export const H1 = styled.h1`

    text-aling:center;
    -webkit-animation-duration: 1.3s;
    animation-duration: 1.3s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    animation-name: flash;
    animation-iteration-count: infinite;
    color: ${(props) => props.theme.text};

    @-webkit-keyframes flash {
        0%, 50%, 100% {
            opacity: 1;
        }   
        25%, 75% {
            opacity: 0;
        }
    }
    @keyframes flash {
        0%, 50%, 100% {
            opacity: 1; 
        }
        25%, 75% {
            opacity: 0;
        }

`;

H1.defaultProps = {
	theme: {
		text: "black"
	}
};
