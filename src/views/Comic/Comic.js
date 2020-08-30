import React, { Fragment, useContext, useEffect } from "react";
import { AppContext } from "../../store/appContext.js";
import { useLocation } from "react-router-dom";
import { ContentComic, FullDescription, Container, Img, H1 } from "./Styled.js";
import { published } from "../../utils/published";

const Comic = (props) => {
	const { store, actions } = useContext(AppContext);
	const location = useLocation();
	const urlComicMarvel = location.pathname.slice(11);
	useEffect(() => {
		if (store.comicsToRender.lenght > 0) {
			actions.setComicToRender(store.comicToRender.index, false);
		} else {
			actions.fetchGetComics(urlComicMarvel.replace("http://", "https://"));
		}
	}, []);

	return (
		<Fragment>
			<ContentComic>
				{store.comicsToRender.length ? (
					<Fragment>
						<Container>
							<Img src={store.comicsToRender[store.comicToRender.index].cover} />
						</Container>
						<Container>
							<FullDescription>
								<h1>{store.comicsToRender[store.comicToRender.index].title}</h1>

								<h2>Published: {published(store.comicsToRender[store.comicToRender.index].date)}</h2>

								{store.comicsToRender[store.comicToRender.index].creators.items.map((creator) => {
									return (
										<Fragment key={Math.random()}>
											<h2>
												{creator.role[0].toUpperCase() + creator.role.slice(1)}: {creator.name}
											</h2>
										</Fragment>
									);
								})}

								<p>{store.comicsToRender[store.comicToRender.index].description}</p>
							</FullDescription>
						</Container>
					</Fragment>
				) : (
					<H1>
						{"Don't despair your comic is coming... If it's taking too long, make sure the url is correct"}
					</H1>
				)}
			</ContentComic>
		</Fragment>
	);
};

export default Comic;
