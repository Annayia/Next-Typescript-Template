"use client";
import React from "react";
import {
	TextField,
	Button,
	Container,
	Typography,
	InputAdornment,
} from "@mui/material";
import {
	AccountCircle,
	Lock,
} from "@mui/icons-material";

import Link from "@mui/material/Link";

export default function Signup() {
	const [email, setEmail] =
		React.useState("");
	const [password, setPassword] =
		React.useState("");
	const [firstName, setFirstName] =
		React.useState("");
	const [lastName, setLastName] =
		React.useState("");
	const handleSubmit = () => {};
	return (
		<Container maxWidth="xs">
			<form
				onSubmit={handleSubmit}>
				<Typography
					variant="h4"
					align="center"
					gutterBottom>
					Inscription
				</Typography>
				<TextField
					label="Prénom"
					type="firstname"
					value={firstName}
					onChange={(e) =>
						setFirstName(
							e.target
								.value
						)
					}
					fullWidth
					margin="normal"
				/>
				<TextField
					label="Nom"
					type="lastname"
					value={lastName}
					onChange={(e) =>
						setLastName(
							e.target
								.value
						)
					}
					fullWidth
					margin="normal"
				/>
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
					InputProps={{
						startAdornment:
							(
								<InputAdornment position="start">
									<Lock />
								</InputAdornment>
							),
					}}
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
					S'inscrire
				</Button>
			</form>
			<Typography
				variant="body2"
				align="center"
				style={{
					marginTop: "16px",
					fontWeight:
						"semi-bold",
				}}>
				<Link
					style={{
						color: "#3f51b5",
					}}
					underline="hover"
					href="/login">
					Déjà inscrit ?
					Connectez-vous ici
				</Link>
			</Typography>
		</Container>
	);
}
