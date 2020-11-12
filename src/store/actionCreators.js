import {ADD_TODO, DELETE_TODO, DONE_TODO} from "./actions";

let id = 3;

export const addTodo = name => ({
		type: ADD_TODO,
		payload: {name,
			id : ++id,
		}
})

export const doneTodo = id => ({
		type: DONE_TODO,
		payload: id,
})

export const deleteTodo = id => ({
	type: DELETE_TODO,
	payload: id,
})

