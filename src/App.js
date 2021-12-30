import './App.css';
import React from 'react';

class PostIndex extends React.Component {
  displayPost = (e) => {
    e.preventDefault();
    const postId = e.currentTarget.dataset.id;
    this.props.handlePostSelected(postId);
  }

  render() {
    const postItems = this.props.posts.map((post) => (
      <li key={post.id}>
        <a data-id={post.id} onClick={this.displayPost}>
          {post.title}
        </a>
      </li>
    ));

    return (
      <div id="postIndex" className="contentBox">
        <p>Index of posts</p>
        <ul>{postItems}</ul>
      </div>
    );
  }
}

class PostContainer extends React.Component {
  render() {
    let content = null;

    if (typeof(this.props.selectedPost) === 'undefined') {
      content = (
        <p>no post selected</p>
      )
    }
    else {
      content = (
        <div>
          <h1>{this.props.selectedPost.title}</h1>
          <p>{this.props.selectedPost.body}</p>
        </div>
      )
    }
    return (
      <div id="postContainer" className="contentBox">
        {content}
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handlePostSelected = this.handlePostSelected.bind(this);
    this.state = {selectedPostId: null};
  }

  handlePostSelected(selectedPostId) {
    let selectedPost = this.props.data.posts.filter((x) => {
      return (x.id === selectedPostId);
    })[0];
    this.setState({selectedPostId: selectedPostId, selectedPost: selectedPost});
  }

  render() {
    return (
      <div id="App">
        <PostIndex
          posts={this.props.data.posts}
          handlePostSelected={this.handlePostSelected}
        />
        <PostContainer
          selectedPost={this.state.selectedPost}
        />
      </div>
    );
  }
}

export default App;
