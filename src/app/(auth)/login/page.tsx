"use client";
import React from "react";
import AuthForm from "../../../components/auth/AuthForm";
import { Link, Typography } from '@mui/material';
import TextLinkComponent from '@/app/components/text/text-link';

export default function login() {
  return (
    <>
      <AuthForm />
      <TextLinkComponent
				href='/sign-up'
				text='Pas encore de compte ? Inscrivez-vous !'
			/>
      <TextLinkComponent
				href='/forgot-password'
				text='Vous avez oubliez votre mot de passe ? par ici !'
			/>
    </>
  );
}
