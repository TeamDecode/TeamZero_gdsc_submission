import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GroupPage = ({ match }) => {
  const [group, setGroup] = useState(null);
  const [isMember, setIsMember] = useState(false);
  const [newPost, setNewPost] = useState('');

  useEffect(() => {
    axios.get(`/api/groups/${match.params.groupId}`)
      .then(res => setGroup(res.data))
      .catch(err => console.log(err));
  }, [match.params.groupId]);

  const handleJoinGroup = () => {
    axios.post(`/api/groups/${match.params.groupId}/join`)
      .then(res => setIsMember(true))
      .catch(err => console.log(err));
  }

  const handleLeaveGroup = () => {
    axios.post(`/api/groups/${match.params.groupId}/leave`)
      .then(res => setIsMember(false))
      .catch(err => console.log(err));
  }

  const handlePostSubmit = (e) => {
    e.preventDefault();
    axios.post(`/api/groups/${match.params.groupId}/posts`, { content: newPost })
      .then(res => setNewPost(''))
      .catch(err => console.log(err));
  }

  return (
    <div>
      {group ? (
        <div>
          <h1>{group.name}</h1>
          {isMember ? (
            <button onClick={handleLeaveGroup}>Leave Group</button>
          ) : (
            <button onClick={handleJoinGroup}>Join Group</button>
          )}
          <form onSubmit={handlePostSubmit}>
            <input type="text" value={newPost} onChange={(e) => setNewPost(e.target.value)} />
            <button type="submit">Post</button>
          </form>
          {group.posts.map(post => (
            <div key={post._id}>
              <h3>{post.content}</h3>
              <p>Posted by {post.author.username}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading group...</p>
      )}
    </div>
  );
};

export default GroupPage;