import React, { Fragment, useContext, useEffect } from "react";
import { AppContext } from "../../store/appContext.js";
import { ContentComic, FullDescription, Container, Img } from "./Styled.js";

const Comic = (props) => {
	const { store, actions } = useContext(AppContext);

	useEffect(() => {
		actions.setComicToRender(store.comicToRender.index, false);
	}, []);

	// Dando formato a la fecha

	const published = (date) => {
		let dateFormat = new Date(date);

		let dateString = dateFormat.toString();

		let finalDate = dateString.slice(4, 10) + "," + dateString.slice(11, 16);

		return finalDate;
	};

	return (
		<Fragment>
			<ContentComic>
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
			</ContentComic>
		</Fragment>
	);
};

export default Comic;
