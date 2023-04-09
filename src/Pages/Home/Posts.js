import React, { useEffect, useState } from 'react';
import SinglePost from './SinglePost';


const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/posts')
        .then(res=>res.json())
        .then(data=> setPosts(data))
    },[])
    return (
        <div className='m-auto'>
            {
                posts?.map(post=><SinglePost key={post._id} post = {post}></SinglePost>)
            }
        </div>
    );
};

export default Posts;