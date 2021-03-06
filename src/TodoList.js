import React, { Component, Fragment } from 'react';
import './style.css';
import TodoItem from './TodoItem';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  render() {
    return (
      <Fragment>
        {/* 下面是一个input框 */}
        <div>
          <label htmlFor="insertArea">输入内容</label>
          <input
            id="insertArea"
            className="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    )
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={index}
          item={item}
          index={index}
          deleteItem={this.handleItemClick}
        />
      );
    });
  }

  handleInputChange(e) {
    e.persist();
    const value = e.target.value;
    this.setState(() => ({
      inputValue: value
    }));
  }

  handleBtnClick() {
    this.setState((prevState) => {
      const list = [...prevState.list, prevState.inputValue];
      return {
        list,
        inputValue: ''
      };
    });
  }

  handleItemClick(index) {
    // immutable: state 不允许我们做任何的改变
    // const list = this.state.list;
    
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return {
        list
      };
    });
  }
}

export default TodoList;


