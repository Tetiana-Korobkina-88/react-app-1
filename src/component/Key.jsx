import React, { Component } from "react";

class Key extends Component {
  state = {
    posts: [
      {id: 'abc1', name: 'HTML and CSS'},
      {id: 'abc2', name: 'JS and React'},
      {id: 'abc3', name: 'Python'},
    ],
  }
  render() {
    return (
      <div className="Key">
        {this.state.posts.map((post) => (
          <h2 key={post.id}>{post.name}</h2>
        ))}
      </div>
    );
  }
};

export default Key;