import React from "react";
import ToDoElement from "./toDoElement";

const List = ({source, handleDelete, handleDone}) => {
	return source.length ? source.map(({name, done, id}) =>
				<ToDoElement
					name={name}
					done={done}
					key={id}
					id={id}
					handleDone={handleDone}
					handleDelete={handleDelete}
				/>
			)
			:
			<p>Empty list. Please add something!</p>
}

export default List;
