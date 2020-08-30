import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { AppContext } from "../../store/appContext.js";
import { Modal, Flex, ContenidoModal, Close, ModalHeader, OneComic, ImgComic, Text, Icon, HeadText } from "./Styled";
import { Redirect } from "react-router-dom";
import { truncateString } from "../../utils/truncateString";
import { useFavorite } from "../../utils/useFavorite";

const ModalComics = ({ nameCharacter, handleOuterClick = () => {} }) => {
	const { store, actions } = useContext(AppContext);
	const oneComic = (comic) => comic;

	const handleRenderComic = (e, index) => {
		actions.setComicToRender(index, true);
	};

	return (
		<Fragment>
			<Modal className="modal">
				<Flex>
					<ContenidoModal>
						<ModalHeader>
							<h2>{nameCharacter}</h2>
							<Close
								onClick={(e) => {
									handleOuterClick(e);
								}}>
								&times;
							</Close>
						</ModalHeader>
						<br />
						<div>
							{store.comicsToRender.length > 0 ? (
								store.comicsToRender.map((comic, index) => {
									const { favorite, handleChangeFavorite } = useFavorite("comics", comic);
									return (
										<Fragment key={comic.id}>
											<OneComic
												onClick={(e) => {
													handleRenderComic(e, index);
												}}>
												<ImgComic src={comic.cover} />

												<Text>
													<h3>
														{comic.title}
														<span onClick={handleChangeFavorite}>
															{favorite ? (
																<Icon className="fas fa-star" />
															) : (
																<Icon className="far fa-star" />
															)}
														</span>
													</h3>

													<p>{truncateString(comic.description)}</p>
												</Text>

												{store.comicToRender.redirect && <Redirect to="/one-comic" />}
											</OneComic>
										</Fragment>
									);
								})
							) : (
								<h2>No comics available at the moment</h2>
							)}
						</div>
					</ContenidoModal>
				</Flex>
			</Modal>
		</Fragment>
	);
};

export default ModalComics;

ModalComics.propTypes = {
	nameCharacter: PropTypes.string,
	handleOuterClick: PropTypes.func,
};
