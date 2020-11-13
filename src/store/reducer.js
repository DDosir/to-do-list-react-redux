import {DONE_TODO, ADD_TODO, DELETE_TODO, HANDLE_INPUT} from "./actions";

const initState = {
	inputValue: '',
	todos: [],
}

export function reducer(state = initState, action) {
	switch (action.type) {
		case ADD_TODO:
			return {...state, inputValue: '', todos: [...state.todos,
					{name: action.payload.name, done: false, id: action.payload.id}
					]};
		case DONE_TODO:
			return {...state, todos: state.todos.map((item) => item.id === action.payload
					? {...item, done: !item.done} : item)};
		case DELETE_TODO:
			return {...state, todos: state.todos.filter(({id}) => id !== action.payload)};
		case HANDLE_INPUT:
			return {...state, inputValue: action.payload};
		default:
			return state;
	}
}
