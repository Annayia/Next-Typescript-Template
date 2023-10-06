'use client';
import React from 'react';
import AuthForm from '@/components/auth/AuthForm';
import TextLinkComponent from '@/app/components/text/text-link';
import { TextLinkHrefEnum } from '@/utils/enums/text-link-href';

export default function forgotPassword() {
  return (
    <>
      <AuthForm />
      <TextLinkComponent
				href={TextLinkHrefEnum.login}
				text='Retour à la page de connexion'
			/>
    </>
  );
}
