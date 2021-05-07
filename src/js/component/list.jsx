import React, { useState, Fragment, useEffect } from "react";
import Task from "./task.jsx";
import Button from "./button.jsx";

function List() {
	//le paso el valor del input en forma de string
	const [tasKey, setTasKey] = useState("");
	//usestate para recoger el valor en un array
	const [tasksArray, setTasksArray] = useState([]);
	// para el boton
	const [bot, setBot] = useState();

	//le paso el numero del elemento a eliminar
	//const [tasKey, setTasx    Key] = seState([]);

	return (
		<Fragment>
			<input
				type="text"
				placeholder="what do you need?"
				onKeyPress={event => {
					if (event.key === "Enter") {
						setTasKey([...tasKey, event.target.value]);
					}
				}}
			/>
			<div>
				<Task value={tasKey} />
			</div>
			<div>
				<Button option={tasksArray} />
			</div>
		</Fragment>
	);
}
export default List;
