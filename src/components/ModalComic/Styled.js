import styled from "styled-components";

export const Modal = styled.div`
	display: block;
	position: fixed;
	z-index: 1;
	overflow: auto;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.452);

	@keyframes modal {
		from {
			top: -330px;
			opacity: 0;
		}
		to {
			top: 0;
			opacity: 1;
		}
	}
`;

export const Flex = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const ContenidoModal = styled.div`
	position: relative;
	background-color: #fefefe;
	margin: auto;
	width: 60%;
	box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.4);
	animation-name: modal;
	animation-duration: 1s;

	@media screen and (max-width: 900px) {
		width: 75%;
	}
	@media screen and (max-width: 450px) {
		width: 95%;
	}
`;
export const Close = styled.div`
	margin: 10px 20px 0 0;
	font-size: 30px;
	font-weight: bold;

	:hover {
		color: #7f8c8d;
		text-decoration: none;
		cursor: pointer;
	}
`;

export const ModalHeader = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: white;
	color: black;
	margin: -10px 0;

	h2 {
		margin: 0 0 -40px 30px;
		font-size: 3vh;
	}
`;

export const OneComic = styled.div`
	display: flex;
	flex-flow: row;
	margin: 20px;
	color: black;

	:hover {
		cursor: pointer;
	}
`;

export const ImgComic = styled.img`
	width: 80px;
	height: 120px;
	align-self: center;
`;

export const Text = styled.div`
	text-align: left;
	margin-left: 10px;
	font-size: 2vh;

	p {
		text-align: justify;
		margin: 10px 0;
	}
`;

export const Icon = styled.i`
	font-size: 1.3em;
	color: black;
`;

export const HeadText = styled.div`
	display: flex;
`;
