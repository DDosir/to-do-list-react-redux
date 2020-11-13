import React, { Component } from 'react';
import './App.css';
import Input from "./components/input";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addTodo, handleInput, deleteTodo, doneTodo} from "./store/actionCreators";
import List from "./components/list";

class App extends Component {
  render() {
    const {addTodo, doneTodo, deleteTodo, todos, handleInput, inputValue} = this.props;
    const handleAdd = value => addTodo(value);
    const handleDone = id => doneTodo(id);
    const handleDelete = id => deleteTodo(id);
    return (
      <>
        <List toDoList={todos} handleDone={handleDone} handleDelete={handleDelete}/>
        <Input inputValue={inputValue} handleInput={handleInput} handleAdd={handleAdd}/>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    inputValue: state.inputValue,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: bindActionCreators(addTodo, dispatch),
    doneTodo: bindActionCreators(doneTodo, dispatch),
    deleteTodo: bindActionCreators(deleteTodo, dispatch),
    handleInput: bindActionCreators(handleInput, dispatch),
  }
}

const WrappedApp = connect(mapStateToProps, mapDispatchToProps)(App)

export default WrappedApp;
