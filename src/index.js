import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// Hello World 开始
// const name = 'Hello World !';
// const element = <h1>{name}</h1>;

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// JSX 简介
// function formatName(user) {
//   return `${user.firstName} ${user.lastName}`;
// }

// const user = {
//   firstName: 'Hello',
//   lastName: 'Kitty'
// };

// const element = (
//   <h1>
//     {formatName(user)}!
//   </h1>
// );

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// 元素渲染 计时器
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello World !</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );

//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);

// 组件 & props （组件名称必须以大写字母开头）

// 函数组件：接收唯一带有数据的"props"（代表属性）对象，并返回一个React元素
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// const element = <Welcome name="Sara" />;

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// class 组件
// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>
//   }
// }

// 组合组件：在其输出中引用其他组件
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// function App() {
//   return (
//     <div>
//       <Welcome name="Sara" />
//       <Welcome name="Cahal" />
//       <Welcome name="Edite" />
//     </div>
//   );
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// 提取组件：将组件拆分为更小的组件
function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

const comment = {
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64'
  },
  text: 'Hello World !',
  date: new Date()
};

ReactDOM.render(
  <Comment 
    author={comment.author}
    text={comment.text}
    date={comment.date}
  />,
  document.getElementById('root')
);

// State & 生命周期



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
