'use client';
import React from 'react';
import AuthForm from '@/app/components/auth/AuthForm';
import { Link, Typography } from '@mui/material';
import TextLinkComponent from '@/app/components/text/text-link';

export default function forgotPassword() {
  return (
    <>
      <AuthForm />
      <TextLinkComponent
				href='/login'
				text='Retour à la page de connexion'
			/>
    </>
  );
}
