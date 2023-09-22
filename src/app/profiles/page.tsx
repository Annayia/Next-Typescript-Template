import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default async function MediaCard() {
  return (
    
    //je récupère tous les utilisateurs
    //ensuite pour chaqu'un j'affiche une card
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
  );
}
