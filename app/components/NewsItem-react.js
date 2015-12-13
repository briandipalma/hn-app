/* @flow */

import React from "react";

import NewsItemTitle from "./NewsItemTitle-react";
import NewsItemMetadata from "./NewsItemMetadata-react";

const NewsItem = (): ReactElement => {
	return (
		<div>
			<span>
				{1}
			</span>
			<button>
				{"Up."}
			</button>
			<NewsItemTitle />
			<NewsItemMetadata />
		</div>
	);
};

export default NewsItem;
