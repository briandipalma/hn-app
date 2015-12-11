/* @flow */

import React from "react";

const NewsTitle = () => {
	return (
		<div>
			<a href={"http://google.com"}>
				{"News Title"}
			</a>
			<span>
				{"("}
				<a href={"http://google.com"}>
					{"site"}
				</a>
				{")"}
			</span>
		</div>
	);
};

// App.propTypes = {
// 	name: PropTypes.string
// };

export default NewsTitle;
