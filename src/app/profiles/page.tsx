import * as React from 'react';
// import {useState} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default async function MediaCard() {
  // const [ users, setUsers]= useState([]);


  return (
    <div>
    
    <Card sx={{ maxWidth: 145,
       marginTop: 2,
       marginLeft:2,
       borderRadius: 2}}>
      <CardMedia
        sx={{ height: 100 }}
        image="../../images/tiger-8214815_640.png"
        title="utilisateur"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Utilisateur
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Details</Button>
      </CardActions>
    </Card>
    </div>
  );
}
