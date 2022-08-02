import React, { Component } from "react";
import { Posts } from './Posts';

class Key extends Component {
  state = {
    posts: [
      {id: 'abc1', name: 'HTML and CSS'},
      {id: 'abc2', name: 'JS and React'},
      {id: 'abc3', name: 'Python'},
    ],
  }

  handleSomething = () => {
    console.log('Key.jsx setState updated');
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="Key">
        <Posts posts={posts} cb={this.handleSomething} />
      </div>
    );
  }
};

export default Key;