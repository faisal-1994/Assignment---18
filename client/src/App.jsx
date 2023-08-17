import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SingleBlogPost from "./components/SingleBlogPost";
import CreateEditBlogPost from "./components/CreateEditBlogPost";
import BlogPostList from "./components/BlogPostList";


function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={BlogPostList} />
        <Route path="/post/:id" component={SingleBlogPost} />
        <Route path="/create" component={CreateEditBlogPost} />
        <Route path="/edit/:id" component={CreateEditBlogPost} />
      </div>
    </Router>
  );
}

export default App;
