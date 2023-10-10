'use client'

import { Fragment, useState } from 'react'
import {ApiService,UserUpdateDto} from './../../../services/api.service'
import Image, { ImageLoader } from 'next/image'
import { Button, IconButton, Input, Stack } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';

export default function UploadFormImage() {
    
  const apiService: ApiService = new ApiService();
  const [file, setFile] = useState<File>()
 
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!file) return
    try {
      const datas = new FormData()
      datas.set('file', file)
      console.log(file)
    // const data :UserUpdateDto= await apiService.userUploadAvatar( datas, file.name)
    } catch (e: any) {
      console.error(e)
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        aria-label='file'
        accept='image/'
        type="file"
        name="file"
        onChange={(e) => setFile(e.target.files?.[0])}
      />
      <input type="submit" value="Enrgistrer" />
    </form>
  )
}


