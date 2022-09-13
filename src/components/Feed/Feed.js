import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './Feed.css'
import { Link } from 'react-router-dom';
const Feed = (props) => {
  const {title,body,id} = props.feed;
  return (
    <div className='post'>
    <Card  sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://yt3.ggpht.com/MRywaef1JLriHf-MUivy7-WAoVAL4sB7VHZXgmprXtmpOlN73I4wBhjjWdkZNFyJNiUP6MHm1w=s900-c-k-c0x00ffffff-no-rj"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className='btn'>
        <Link to={`/posts/${id}`}>
        <Button variant="outlined" color="error"  >
          Details
        </Button>
        </Link>
        
      </CardActions>
    </Card>
    </div>
  );
};

export default Feed;