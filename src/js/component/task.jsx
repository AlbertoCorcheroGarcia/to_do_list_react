import React from "react";
import PropTypes from "prop-types";

function Task(props) {
	return <div>{props.value}</div>;
}

export default Task;

Task.propTypes = {
	value: PropTypes.string
};
