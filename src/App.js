import logo from './logo.svg';
import './App.css';
import React from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  displayPost = (e) => {
    e.preventDefault();
    const postId = e.currentTarget.dataset.id;
    console.log("hey, let's show post " + postId);
    this.props.handlePostSelected(postId);
    console.log("bye!");
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
  constructor(props) {
    super(props);
  }

  render() {
    let content = null;

    console.log(typeof(this.props.selectedPost));
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
      let fuckyou = (x.id === selectedPostId);
      // console.log("hey does " + x.id + " == " + selectedPostId + "? a:" + fuckyou);
      return fuckyou;
    })[0];
    this.setState({selectedPostId: selectedPostId, selectedPost: selectedPost});
    console.log("selectedPostId is now:" + this.state.selectedPostId);
    console.log("selectedPost is now:" + this.state.selectedPost);
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
