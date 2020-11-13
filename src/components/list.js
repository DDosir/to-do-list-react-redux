import React from "react";
import ToDoElement from "./toDoElement";

const List = ({toDoList, handleDelete, handleDone}) => {
	return toDoList.length ?
			<>
				<p className={'element'}>To Do List</p>
				{toDoList.map(({name, done, id}) =>
				<ToDoElement
					className={'element'}
					name={name}
					done={done}
					key={id}
					id={id}
					handleDone={handleDone}
					handleDelete={handleDelete}
				/>)}
			</>
			:
			<p className={'element'}>Empty list. Please add something!</p>
}

export default List;
