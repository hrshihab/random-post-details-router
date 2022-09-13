import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './FeedDetails.css'

const FeedDetails = () => {
  const {postId}=useParams();
  const [postDetails,setPostDetails]=useState([]);
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(res => res.json())
    .then(data=> setPostDetails(data))
  },[])

  const [comment,setComment] = useState([]);
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    .then(res=>res.json())
    .then(cmnt => setComment(cmnt))
  },[])
  return (
    <div className='containers'>
      
      <Card sx={{ maxWidth: 700 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2019/10/facebook-796x417.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {postDetails.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {postDetails.body}
          </Typography>
          {
        comment.map((pd)=> <Comment cmnt={pd} ></Comment>)
      }
        </CardContent>
      </CardActionArea>
    </Card>
    

    </div>
  );
};

export default FeedDetails;