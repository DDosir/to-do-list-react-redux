import React from "react";

const Element = ({name, done, id, handleDone, handleDelete}) => {
	const handleChangeStatus = () => handleDone(id);
	const handleDeleteElem = () => handleDelete(id);
	return (
		<div className={'Element'} key={id}>
			<p onClick={handleChangeStatus}> {done ? '+' : '-'} {name}</p>
			<button onClick={handleDeleteElem}>Del</button>
		</div>
	)
}

export default Element;
