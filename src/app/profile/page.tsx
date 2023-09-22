import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 645,
       marginTop: 15,
       marginLeft:50,
       borderRadius: 2}}>
      <CardMedia
        sx={{ height: 440 }}
        image="../../images/tiger-8214815_640.png"
        title="utilisateur"
      />
      <CardContent sx={{textAlign: 'center'}}>
        <Typography gutterBottom variant="h5" component="div" >
          Utilisateur
        </Typography>
        <Typography variant="body2" color="text.secondary" >
        nom + prenom
        </Typography>
        <Typography variant="body2" color="text.secondary">
        rôle
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Email
        </Typography>
      </CardContent>
      <CardActions >
        <Button size="small" sx={{margin: 'auto'}} >Modifier</Button>
        <Button size="small" sx={{margin: 'auto'}} >Retour</Button>
      </CardActions>
    </Card>
  );
}
