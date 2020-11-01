import React from "react";

import './App.css';
import Users from "./components/user-list/Users";
import Posts from "./components/posts-list/Posts";
import Comments from "./components/comments-list/Comments";

function App() {
  return (
    <div>
      <h1 className='text-center'><i>Homework 2</i></h1>
      <div className='d-flex'>
        <Users/>
        <Posts/>
        <Comments/>
      </div>
    </div>


  );
}

export default App;
