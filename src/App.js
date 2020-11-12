import React, { Component } from 'react';
import './App.css';
import Input from "./components/input";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addTodo, changeInput, deleteTodo, doneTodo} from "./store/actionCreators";
import List from "./components/list";

class App extends Component {
  render() {
    const {addTodo, doneTodo, deleteTodo, todos, changeInput, inputValue} = this.props;
    const handleInput = value => addTodo(value);
    const handleDone = id => doneTodo(id);
    const handleDelete = id => deleteTodo(id);
    return (
      <>
        <List source={todos} handleDone={handleDone} handleDelete={handleDelete}/>
        <Input inputValue={inputValue} changeInput={changeInput} handleAdd={handleInput}/>
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
    changeInput: bindActionCreators(changeInput, dispatch),
  }
}

const WrappedApp = connect(mapStateToProps, mapDispatchToProps)(App)

export default WrappedApp;
