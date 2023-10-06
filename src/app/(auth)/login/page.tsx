"use client";
import React from "react";
import AuthForm from "../../../components/auth/AuthForm";
import TextLinkComponent from '@/app/components/text/text-link';
import { TextLinkHrefEnum } from "@/utils/enums/text-link-href";

export default function login() {
  return (
    <>
      <AuthForm />
      <TextLinkComponent
				href={TextLinkHrefEnum.register}
				text='Pas encore de compte ? Inscrivez-vous !'
			/>
      <TextLinkComponent
				href={TextLinkHrefEnum.forgotPwd}
				text='Vous avez oubliez votre mot de passe ? par ici !'
			/>
    </>
  );
}
