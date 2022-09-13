import React, { useEffect, useState } from 'react';
import Feed from '../Feed/Feed';
import './Home.css'

const Home = () => {
  const [post,setPost]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data =>setPost(data) )
  },[])
  return (
    <div className='container'>
      {
        post.map((pd)=><Feed feed={pd}></Feed>)
      }
    </div>
  );
};

export default Home;