'use client';
import React from 'react';
import AuthForm from '@/components/auth/AuthForm';
import TextLinkComponent from '@/app/components/text/text-link';
import { TextLinkHrefEnum } from '@/utils/enums/text-link-href';

export default function Signup() {
  return (
    <>
      <AuthForm />
      <TextLinkComponent
				href={TextLinkHrefEnum.login}
				text='Déjà un compte ? Connectez-vous !'
			/>
    </>
  );
}
