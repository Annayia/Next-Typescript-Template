'use client';
import * as React from 'react';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {ApiService, UserGetDto} from '../../../services/api.service';
import Form from './form'
import Form2 from './form2'
import Image, { ImageLoader } from 'next/image'
import './formCard.css'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import FileUploader from './FileUploader'
import './FileUploader.module.css';

export default function ProfileUpdate() {
  const [userData, setUserData] = useState<UserGetDto>();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const apiService: ApiService = new ApiService();
  const id = 10;
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (id = 10) => {
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
  console.log(userData);
  return(
    loading ?
      <>Loding...</>
      :
      <Card sx={{ maxWidth: 645, marginTop: 15, margin: 'auto', borderRadius: 2 }}>
        <CardMedia
            sx={{ width: '70%', margin: 'auto'}}
            title="utilisateur"
        >
          <Button component="label" variant="contained" startIcon={ 
            <Image
              className='imageFormCard'
              loader={imageLoader}
              src={userData?.avatarUrl??"images/default_user.png"}
              alt='user profile image'
              width={440}
              height={440}
            />
            }>
            <VisuallyHiddenInput type="file" />
          </Button>
        </CardMedia>
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography gutterBottom variant="h3" component="div">
            Utilisateur : 
            {userData?.lastname}
          </Typography>
          <Typography component="div">
            Veuillez renseigner les champs que vous voulez modifier
          </Typography>
          <Typography component="div">
              <FileUploader/>
          </Typography>
          <Typography component="div">
          <Form2/>
      </Typography>
        </CardContent>
        <CardActions>
          <Form/>
        </CardActions>
      </Card>
  )
}
