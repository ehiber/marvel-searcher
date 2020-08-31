import styled from "styled-components";

export const ContentComic = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;

	@media screen and (max-width: 700px) {
		flex-direction: column;
	}
`;

export const Img = styled.img`
	border-radius: 3px;
	width: 100%;
	height: auto;
`;

export const Container = styled.div`
	font-size: 1.5vh;
	font-family: "Roboto", sans-serif;
	margin: 0.1em;
	padding: 10px;

	display: flex;
	flex-direction: column;
	flex-basis: 100%;
	flex: 1;
`;

export const FullDescription = styled.div`
	text-align: left;
	color: ${(props) => props.theme.text};
	font-weight: bold;

	h1 {
		margin-bottom: 30px;
		font-size: 3em;
	}

	p {
		margin-top: 30px;
		font-size: 2em;
		text-align: justify;
	}
`;

FullDescription.defaultProps = {
	theme: {
		text: "black",
	},
};

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
		text: "black",
	},
};
