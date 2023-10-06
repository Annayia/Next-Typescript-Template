'use client';
import * as React from 'react';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {ApiService, UserGetDto} from '../../services/api.service';
import Form from './form'
import Image, { ImageLoader } from 'next/image'

export default function ProfileUpdate() {
  // console.log(localStorage)
  const [userData, setUserData] = useState<UserGetDto>();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const apiService: ApiService = new ApiService();
  const id = 11;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (id = 11) => {
    try {
      const userData = await apiService.userById(id);
      setLoading(false);
      setUserData(userData);
    } catch (e) {
      setError(error);
      setLoading(true);
    }
  }
  const imageLoader: ImageLoader = ({ src }) => {
    return `http://localhost:3003/${src}`
  }

  return(
    loading ?
      <></>
      :
      <Card sx={{ maxWidth: 645, marginTop: 15, marginLeft: 50, borderRadius: 2 }}>
        <CardMedia
            sx={{ height: 440 }}
            title="utilisateur"
          >
          <Image
          loader={imageLoader}
          src={userData?.avatarUrl??"images/default_user.png"}
          alt='user profile image'
          width={440}
          height={440}
        />
        </CardMedia>
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography gutterBottom variant="h3" component="div">
            Utilisateur : {userData?.lastname}
          </Typography>
          <Typography component="div">
            Veuillez renseigner les champs que vous voulez modifier
          </Typography>
        </CardContent>
        <CardActions>
          <Form/>
        </CardActions>
      </Card>
  )
}
