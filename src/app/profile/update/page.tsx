"use client"
import * as React from 'react';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {ApiService, UserGetDto} from '../../services/api.service';
import Form from './form'

export default function MediaCard() {
  // console.log(localStorage)
  const [userData, setUserData] = useState<UserGetDto[]>([])
  const [error, setError] = useState(null);

  const apiService: ApiService = new ApiService();
  const id = 11
  
  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const userData = (await apiService.userById(id));
        if (isMounted) {
          setUserData([userData]);
        }
        return userData
      } catch (e) {
        setError(error);
      }
    }

    fetchData();

  });
  // console.log()
  
  return(
    userData?.map((user, index) =>{
        return(
            <Card key={index} sx={{ maxWidth: 645, marginTop: 15, marginLeft: 50, borderRadius: 2 }}>
              <CardMedia
                  sx={{ height: 440 }}
                  image={user.avatarUrl}
                  style={{padding: 20}} 
                  title="utilisateur"
                />
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography gutterBottom variant="h3" component="div">
                  Utilisateur : {user.lastname}
                </Typography>
                <Typography component="div">
                  Veuillez renseigner les champs que vous voulez modifier
                </Typography>
              </CardContent>
                     <Form/>
              <CardActions>
              </CardActions>
          </Card>
        )
      }
    )
  )
}                  
      
