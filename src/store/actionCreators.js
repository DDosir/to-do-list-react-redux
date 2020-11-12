import {ADD_TODO, DELETE_TODO, DONE_TODO, CHANGE_INPUT} from "./actions";
import idGenerator from "../utils/idGenerator";

export const addTodo = name => ({
		type: ADD_TODO,
		payload: {
			name,
			id : idGenerator(),
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

export const changeInput = value => ({
	type: CHANGE_INPUT,
	payload: value,
})

