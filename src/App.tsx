import React from "react";
import "./App.scss";
import { postsAPI } from "./services/postsServices";

function App() {
  const {
    data: posts,
    isLoading,
    isError,
  } = postsAPI.useFetchAllPostsQuery(10);
  console.log(posts);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>Something went wrong...</h1>;
  }
  return (
    <div className="App">
      <div></div>
    </div>
  );
}

export default App;
