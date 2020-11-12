import {DONE_TODO, ADD_TODO, DELETE_TODO, CHANGE_VALUE} from "./actions";

const initState = {todos:
		[
			{name: 'Learn redux', done: true, id: 1},
			{name: 'Learn react', done: false, id: 2},
			{name: 'Learn react-redux', done: false, id: 3},
		]
}

export function reducer(state = initState, action) {
	switch (action.type) {
		case ADD_TODO:
			return {...state, inputValue: '', todos: [...state.todos, {name: action.payload.name, done: false, id: action.payload.id}]};
		case DONE_TODO:
			return {...state, todos: state.todos.map((prop) => prop.id === action.payload ? {...prop, done: !prop.done} : prop)};
		case DELETE_TODO:
			return {...state, todos: state.todos.filter((prop) => prop.id !== action.payload)}
		case CHANGE_VALUE:
			return {...state, inputValue: action.payload};
		default:
			return state;
	}
}
