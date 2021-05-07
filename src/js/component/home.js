import React from "react";
import List from "./list.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="text-center mt-5">
			<h1>To do list </h1>
			<List />
		</div>
	);
}
