import React, { useState, useEffect } from "react";

function FacebookPost(props) {
  const [post, setPost] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://graph.facebook.com/${props.postId}?access_token=${props.accessToken}`
      );
      const data = await response.json();
      setPost(data);
    }
    fetchData();
  }, [props.postId, props.accessToken]);

  return (
    <div>
      <h1>{post.name}</h1>
      <p>{post.message}</p>
    </div>
  );
}

export default FacebookPost;
