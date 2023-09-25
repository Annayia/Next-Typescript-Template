// "use client";
// import React from "react";
// import {
// 	TextField,
// 	Button,
// 	Container,
// 	Typography,
// 	InputAdornment,
// } from "@mui/material";
// import {
// 	AccountCircle,
// 	Lock,
// } from "@mui/icons-material";
// import { handleSubmitLogin } from "../../utils/handlers/auth.handlers";
// import Link from "@mui/material/Link";

// export default function AuthForm() {
// 	const [email, setEmail] =
// 		React.useState("");
// 	const [password, setPassword] =
// 		React.useState("");
// 	return (
// 		<Container maxWidth="xs">
// 			<form
// 				onSubmit={(e) => {
// 					handleSubmitLogin(
// 						email,
// 						password
// 					);
// 				}}>
// 				<Typography
// 					variant="h4"
// 					align="center"
// 					gutterBottom>
// 					Connexion
// 				</Typography>
// 				<TextField
// 					label="Email"
// 					type="email"
// 					value={email}
// 					onChange={(e) =>
// 						setEmail(
// 							e.target
// 								.value
// 						)
// 					}
// 					InputProps={{
// 						startAdornment:
// 							(
// 								<InputAdornment position="start">
// 									<AccountCircle />
// 								</InputAdornment>
// 							),
// 					}}
// 					fullWidth
// 					required
// 					margin="normal"
// 				/>
// 				<TextField
// 					label="Mot de passe"
// 					type="password"
// 					value={password}
// 					onChange={(e) =>
// 						setPassword(
// 							e.target
// 								.value
// 						)
// 					}
// 					InputProps={{
// 						startAdornment:
// 							(
// 								<InputAdornment position="start">
// 									<Lock />
// 								</InputAdornment>
// 							),
// 					}}
// 					fullWidth
// 					required
// 					margin="normal"
// 				/>
// 				<Button
// 					type="submit"
// 					variant="contained"
// 					color="primary"
// 					fullWidth
// 					size="large">
// 					Se connecter
// 				</Button>
// 			</form>
// 			<Typography
// 				variant="body2"
// 				align="center"
// 				style={{
// 					marginTop: "16px",
// 					fontWeight:
// 						"semi-bold",
// 				}}>
// 				<Link
// 					style={{
// 						color: "#3f51b5",
// 					}}
// 					underline="hover"
// 					href="/sign-up">
// 					Vous n'avez pas de
// 					compte ?
// 					Inscrivez-vous ici
// 				</Link>
// 			</Typography>
// 		</Container>
// 	);
// }
