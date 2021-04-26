import React, { Component } from 'react';
import Counter from './component/counter/Counter';
import UserList from './component/user/UserList'
import Search from "./component/search/Search";
export default class App extends Component {
  render() {
    return (
      <div>
        <Counter/>
        <UserList/>
        <Search/>
      </div>
    )
  }
}