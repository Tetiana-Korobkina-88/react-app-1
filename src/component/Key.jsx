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

  removePost = (id) => {
    this.setState({posts: this.state.posts.filter(post => post.id !== id)})
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="Key">
        <Posts posts={posts} removePost={this.removePost} />
      </div>
    );
  }
};

export default Key;