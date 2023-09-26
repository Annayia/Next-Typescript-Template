"use client"
import * as React from 'react';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {ApiService, UserGetDto} from '../services/api.service';
import { CancelToken } from 'axios';


export default function MediaCard() {
  const [token, setToken] = useState(localStorage.getItem("access_token") || '');

  const [userData, setUserData] = useState([]);
  const apiService: ApiService = new ApiService("http://localhost:3003");
  
  const handleUser = async ( token: CancelToken ) =>{
    try {
      const result = await apiService.userAll(token)
      console.log(result[0].id)
      // setUserData(result)

    } catch (error) {
      console.error('Erreur lors de la récupération des utilisateurs :', error);
    }
  }

  useEffect((token: CancelToken) => {
    async function fetchData() {
      const response = await handleUser(token);
    }
     fetchData();
  }, [token]); 

  return (
    <Card sx={{ maxWidth: 645, marginTop: 15, marginLeft: 50, borderRadius: 2 }}>
      <CardMedia
        sx={{ height: 440 }}
        image="../../images/tiger-8214815_640.png"
        title="utilisateur"
      />
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography gutterBottom variant="h5" component="div">
          Utilisateur
        </Typography>
        {userData ? (
          <>
            <Typography variant="body2" color="text.secondary">
              {/* Nom: {userData.nom} */}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {/* Prénom: {userData.prenom} */}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {/* Rôle: {userData.role} */}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {/* Email: {userData.email} */}
            </Typography>
          </>
        ) : (
          <Typography variant="body2" color="text.secondary">
            Chargement des données...
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button size="small" sx={{ margin: 'auto' }}>
          Modifier
        </Button>
        <Button size="small" sx={{ margin: 'auto' }}>
          Retour
        </Button>
      </CardActions>
    </Card>
  );
}