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

export default function MediaCard() {

  const [user, setUser] = useState<UserGetDto[]|null>(null)
  const [userData, setUserData] = useState<UserGetDto[]>([])
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const apiService: ApiService = new ApiService();

  useEffect(() => {
    let isMounted = true;
    const fetchData = async (id=10) => {
      try {
        const userData = (await apiService.userById(id));
        if (isMounted) {
          setLoading(false);
          setUserData([userData]);
        }
        return userData
      } catch (e) {
        setError(error);
        setLoading(true);
      }

    }
    fetchData();
  });
        return(
          userData?.map((user, index) =>{
            return(

          <Card key={index} sx={{ maxWidth: 645, marginTop: 15, marginLeft: 50, borderRadius: 2 }}>
          <CardMedia
              sx={{ height: 440 }}
              image="../../images/tiger-8214815_640.png"
              title="utilisateur"
            />
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography gutterBottom variant="h5" component="div">
              Utilisateur
            </Typography>
            <div >
              <Typography variant="body2" color="text.secondary">
                Nom:  {user.firstname}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Prénom: {user.lastname}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Email: {user.email}
              </Typography>
            </div>
          </CardContent>
          <CardActions>
            <Button size="small" sx={{ margin: 'auto' }}>
              Modifier
            </Button>
            <Button size="small" sx={{ margin: 'auto' }} >
              Retour
            </Button>
          </CardActions>
        </Card>
        )
      }
    )
  )
}                  
      
