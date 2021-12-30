import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const data = {
  posts: [
    {
      title: "Post 1 Title",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nulla lectus, malesuada quis nisi at, efficitur aliquam nulla. Donec et lorem in metus efficitur euismod eu sed diam.",
      id: "6442",
      comments: [
        {
          body:
            "Aliquam est nisl, porttitor sed dictum quis, semper vel tortor",
          user: "Fred",
          id: "783432"
        },
        {
          body:
            "Maecenas efficitur tellus nec dui porttitor elementum. Vestibulum quis leo a turpis dapibus placerat. Phasellus accumsan quam pellentesque",
          user: "Dingus",
          id: "86323"
        }
      ]
    },
    {
      title: "Post 2 Title",
      body:
        "Nullam tristique id velit vitae suscipit. Vivamus quis scelerisque mauris. Nulla et nisi tempor, vestibulum odio eget, ultricies nunc. Phasellus faucibus neque diam, ornare pulvinar dolor interdum at.",
      id: "9082",
      comments: [
        {
          body:
            "Tiam facilisis nibh a ex tristique maximus. Nulla ullamcorper tempor dolor, in sodales dui placerat et. Praesent quis magna tellus",
          user: "Bozo",
          id: "783432"
        },
        {
          body:
            "Sed eu nisi tincidunt, euismod dolor ac, rutrum nisl. Donec eget mi sed eros tempor hendrerit vel vel ipsum.",
          user: "Dingus",
          id: "86323"
        },
        {
          body: "Curabitur vel turpis.",
          user: "Megatron",
          id: "99023"
        }
      ]
    }
  ]
};

ReactDOM.render(
  <React.StrictMode>
    <App data={data}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
