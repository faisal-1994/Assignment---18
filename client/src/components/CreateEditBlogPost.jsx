import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

function CreateEditBlogPost() {
  const history = useHistory();
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    if (id) {
      axios.get(`/api/posts/${id}`)
        .then(response => {
          const postData = response.data;
          setTitle(postData.title);
          setContent(postData.content);
          setAuthor(postData.author);
        })
        .catch(error => {
          console.error('Error fetching blog post:', error);
        });
    }
  }, [id]);

  const handleSubmit = async event => {
    event.preventDefault();
    
    const postData = { title, content, author };
    
    if (id) {
      await axios.put(`/api/posts/${id}`, postData);
    } else {
      await axios.post('/api/posts', postData);
    }
    
    history.push('/');
  };

  return (
    <div>
      <h2>{id ? 'Edit' : 'Create'} Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Content:</label>
          <textarea value={content} onChange={e => setContent(e.target.value)} />
        </div>
        <div>
          <label>Author:</label>
          <input type="text" value={author} onChange={e => setAuthor(e.target.value)} />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default CreateEditBlogPost;
