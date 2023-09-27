"use client"
import * as React from 'react';
import {useState, useEffect} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {ApiService, UserGetDto} from '../services/api.service';

export default function MediaCard() {
  const [data, setData] = useState<UserGetDto[]|null>(null)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const apiService: ApiService = new ApiService();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await apiService.userAll();
        setData(result);
        setLoading(false);
      } catch (e) {
        setError(error);
        setLoading(false);
      }
    }
    fetchData();
  });

  return (
    data?.map((user, index)=>{
      return(
        <>
        <Card key={index} sx={{ maxWidth: 245,
            marginTop: 2,
            marginLeft:2,
            borderRadius: 2}}>
            <CardMedia
              sx={{ height: 150 }}
              image="../../images/tiger-8214815_640.png"
              title="utilisateur"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Utilisateur
              </Typography>
              <Typography variant="body2" color="text.secondary">
                    Nom: {user.lastname}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Prénom: {user.firstname}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Details</Button>
            </CardActions>
        </Card>
      </>
      )
    })
  )
}
