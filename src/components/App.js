import React from "react";
import blogData from "../data/blog";
import ArticleList from './ArticleList';

function App() {
  return (
    <div className="App">
      <h1>{blogData.name}</h1>
      <p>{blogData.about}</p>
    </div>
  );
}

export default App;
