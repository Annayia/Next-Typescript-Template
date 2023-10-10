'use client';
import * as React from 'react';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {ApiService, UserGetDto} from '../../../services/api.service';
import UploadFileComponent from '@/components/file/UploadFile';
import UserUpdateForm from '@/components/profile/UserUpdateForm';
import Image, { ImageLoader } from 'next/image'
import './formCard.css'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import FileUploader from './FileUploader'
import './FileUploader.module.css';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import LoadingComponent from '@/components/loading';
import { UploadTypesEnum } from '@/utils/enums/upload-type';
import { ImageFileExtensionEnum } from '@/utils/enums/file-extension';

export default function ProfileUpdate() {
  const [userData, setUserData] = useState<UserGetDto>();
  const [isFileUploadVisible, setIsFileUploadVisible] = useState<boolean>(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const apiService: ApiService = new ApiService();
  const id = 10;

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

  const handleCloseModal = () => {
    setIsFileUploadVisible(false);
  }

  return(
    loading ?
      <LoadingComponent />
      :
      <>
        <Card sx={{ maxWidth: 645, marginTop: 15, margin: 'auto', borderRadius: 2 }}>
          <CardMedia
              sx={{ width: '70%', margin: 'auto', position: 'relative'}}
              title="utilisateur"
          >
            <Image
              className='imageFormCard'
              loader={imageLoader}
              src={userData?.avatarUrl??"images/default_user.png"}
              alt='user profile image'
              width={440}
              height={440}
            />
            <IconButton aria-label="edit avatar" size='large'
              sx={{position: 'absolute', right: 25, bottom: 15, zIndex: 1000, backgroundColor: 'black', color: 'white'}}
              onClick={() => {
                setIsFileUploadVisible(!isFileUploadVisible);
              }}
            >
              <EditIcon />
            </IconButton>
          </CardMedia>
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography gutterBottom variant="h3" component="div">
              Utilisateur :
              {userData?.lastname}
            </Typography>
            <Typography component="div">
              Veuillez renseigner les champs que vous voulez modifier
            </Typography>
          </CardContent>
          <CardActions>
            <UserUpdateForm/>
          </CardActions>
        </Card>
        {isFileUploadVisible ?
          <UploadFileComponent
            title={'Modifier mon avatar'}
            contentText={'Veuillez selectionner un fichier pour modifier votre avatar'}
            handleOnClose={handleCloseModal}
            uploadType={UploadTypesEnum.userAvatar}
            acceptedFileExtension={[
              ImageFileExtensionEnum.jpg,
              ImageFileExtensionEnum.png
            ]}
          />
          : <></>
        }
      </>
  )
}
