"use client"
import * as React from 'react';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {ApiService, UserGetDto} from '../../services/api.service';
import Link from 'next/link';
import Input from '@mui/material/Input';
import { Button } from '@mui/material';

export default function MediaCard() {

  const [user, setUser] = useState<UserGetDto[]|null>(null)
  const [userData, setUserData] = useState<UserGetDto[]>([])
 
  const [error, setError] = useState(null);
  const apiService: ApiService = new ApiService();

  useEffect(() => {
    let isMounted = true;
    const fetchData = async (id=10) => {
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
  return(
    userData?.map((user, index) =>{
      const variants = ["flat", "bordered", "underlined", "faded"];
        return(
            <Card key={index} sx={{ maxWidth: 645, marginTop: 15, marginLeft: 50, borderRadius: 2 }}>
              <CardMedia
                  sx={{ height: 440 }}
                  image="../../images/tiger-8214815_640.png"
                  title="utilisateur"
                />
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography gutterBottom variant="h5" component="div">
                  Utilisateur : {user.lastname}
                </Typography>
                <div >
                  Entrez les élements à modifier
                  <Typography variant="body2" color="text.secondary">
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  </Typography>
                </div>
                <form>
                  <p>Nom : <Input type="text" placeholder={user.lastname} style={{paddingLeft: 20, color: "	rgb(192,192,192)"}}/></p>
                  <p>Prénom : <Input type="text" placeholder={user.firstname} style={{paddingLeft: 20, color: "	rgb(192,192,192)"}}/></p>
                  <p>Email : <Input type="email" placeholder={user.email} style={{paddingLeft: 20, color: "	rgb(192,192,192)"}}/></p>
                </form>
              </CardContent>
              <CardActions>
                <Button sx={{marginLeft: 20}}>
                  Validez
                </Button>
                <Link href={'./../profile'} style={{textDecoration: 'none',margin: 'auto'}}>
                  Retour
                </Link>
              </CardActions>
          </Card>
        )
      }
    )
  )
}                  
      
