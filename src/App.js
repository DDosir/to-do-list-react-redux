import React, { Component } from 'react';
import './App.css';
import Element from "./components/element";
import Input from "./components/input";
import state from "./store/state";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addTodo, deleteTodo, doneTodo} from "./store/actionCreators";

class App extends Component {
  render() {
    const {addTodo, doneTodo, deleteTodo} = this.props;
    const handleInput = value => addTodo(value);
    const handleDone = id => doneTodo(id);
    const handleDelete = id => deleteTodo(id);
    return (
      <div>
        {state.getState().todos.map(({name, done, id}) =>
            <Element
              name={name}
              done={done}
              key={id}
              id={id}
              handleDone={handleDone}
              handleDelete={handleDelete}
            />)
        }
        <Input handleAdd={handleInput}/>
      </div>
    );
  }
}

const putStateToProps = (state) => {
  return {
    todos: state.todos,
  }
}

const putDispatchToProps = (dispatch) => {
  return {
    addTodo: bindActionCreators(addTodo, dispatch),
    doneTodo: bindActionCreators(doneTodo, dispatch),
    deleteTodo: bindActionCreators(deleteTodo, dispatch)
  }
}

const Wrapped_App = connect(putStateToProps, putDispatchToProps)(App)

export default Wrapped_App;
