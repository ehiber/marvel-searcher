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

export const ContentModal = styled.div`
	position: relative;
	background-color: ${(props) => props.theme.bg};
	margin: auto;
	width: 60%;
	box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.4);
	color: ${(props) => props.theme.text};

	h2 {
		margin-top: 40px;
		padding: 30px;
		font-size: 3vh;
		font-weight: bold;
	}

	@media screen and (max-width: 900px) {
		width: 75%;
	}
	@media screen and (max-width: 450px) {
		width: 95%;
	}
`;

ContentModal.defaultProps = {
	theme: {
		bg: "white",
		text: "black",
	},
};

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

	:hover {
		cursor: pointer;
		box-shadow: 5px 20px 60px 20px black;
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
		font-weight: bold;
	}
`;

export const Icon = styled.i`
	font-size: 1em;
`;
