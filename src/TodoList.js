import React, { Component, Fragment } from 'react';
import './style.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
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
            onChange={this.handleInputChange.bind(this)}
          />
          <button onClick={this.handleBtnClick.bind(this)}>提交</button>
        </div>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <li
                key={index}
                onClick={this.handleItemClick.bind(this, index)}
                dangerouslySetInnerHTML={{__html: item}}>
                {/* {item} */}
              </li>
            );
          })}
        </ul>
      </Fragment>
    )
  }

  handleInputChange(e) {
    e.persist();
    this.setState({
      inputValue: e.target.value
    });
  }

  handleBtnClick() {
    const list = [...this.state.list, this.state.inputValue];
    this.setState({
      list: list,
      inputValue: ''
    });
  }

  handleItemClick(index) {
    // immutable: state 不允许我们做任何的改变
    // const list = this.state.list;
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list
    });
  }
}

export default TodoList;


