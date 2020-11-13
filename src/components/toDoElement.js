import React from "react";

const ToDoElement = ({name, done, id, handleDone, handleDelete}) => {
	const handleChangeStatus = () => handleDone(id);
	const handleDeleteElem = () => handleDelete(id);
	return (
		<div className={'element'} key={id}>
			<p onClick={handleChangeStatus} className={done ? 'done' : null}>{name}</p>
			<button onClick={handleDeleteElem}>Del</button>
		</div>
	)
}

export default ToDoElement;
