"use client";
import React from "react";
import {
	TextField,
	Button,
	Container,
	Typography,
	InputAdornment,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Link from "next/link";

export default function login() {
	const [email, setEmail] =
		React.useState("");
	const [password, setPassword] =
		React.useState("");

	const handleSubmit = (
		e: React.FormEvent<HTMLFormElement>
	) => {
		e.preventDefault();
		console.log(
			"email:",
			email,
			"password:",
			password
		);
	};

	return (
		<Container maxWidth="xs">
			<form
				onSubmit={handleSubmit}>
				<Typography
					variant="h4"
					align="center"
					gutterBottom>
					Connexion
				</Typography>
				<TextField
					label="Email"
					type="email"
					value={email}
					onChange={(e) =>
						setEmail(
							e.target
								.value
						)
					}
					InputProps={{
						startAdornment:
							(
								<InputAdornment position="start">
									<AccountCircle />
								</InputAdornment>
							),
					}}
					fullWidth
					required
					margin="normal"
				/>
				<TextField
					label="Mot de passe"
					type="password"
					value={password}
					onChange={(e) =>
						setPassword(
							e.target
								.value
						)
					}
					fullWidth
					required
					margin="normal"
				/>
				<Button
					type="submit"
					variant="contained"
					color="primary"
					fullWidth
					size="large">
					Se connecter
				</Button>
			</form>
			<Typography
				variant="body2"
				align="center"
				style={{
					marginTop: "16px",
				}}>
				Vous n'avez pas de
				compte ?{" "}
				<Link href="/sign-up">
					Inscrivez-vous ici
				</Link>
			</Typography>
		</Container>
	);
}
