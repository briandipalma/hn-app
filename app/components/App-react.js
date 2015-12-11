/* @flow */

import React, {
	Component
} from "react";

import NewsItem from "./NewsItem-react";

class App extends Component {
	render(): ReactElement {
		return (
			<div>
				<NewsItem />
				<NewsItem />
				<NewsItem />
				<NewsItem />
				<NewsItem />
				<NewsItem />
				<NewsItem />
				<NewsItem />
			</div>
		);
	}
}

export default App;
