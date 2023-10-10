"use client";
import { useGlobalContext } from "../utils/contexts/AppContext";
import { useEffect } from "react";
import { ApiService } from "../services/api.service";
import jwt_decode, { JwtPayload } from "jwt-decode";
import { useRouter } from "next/navigation";
import { Button, Container } from "@mui/material";


export default function Home() {
	const router = useRouter();
	const apiService: ApiService = new ApiService();
	const { userDataLoggedIn, setUserDataLoggedIn } = useGlobalContext();

	
	useEffect(() => {
		fetchuserDataLoggedInToSetIntoContext();
	}, []);

	const fetchuserDataLoggedInToSetIntoContext = async () => {
		type customJwtPayload = JwtPayload & {
			userId: number;
		};
		const token = localStorage.getItem("access_token");
		if (token) {
			const decodedToken = jwt_decode<customJwtPayload>(token);
			const userData = await apiService.userById(decodedToken.userId);
			setUserDataLoggedIn([userData]);
		}
	};
	return (
		// Test of the logout and of the right display of the context OK, need to use it in an app Bar then//
		<Container>
			<h1>Home</h1>
			{userDataLoggedIn.length !== 0? <h2>Bonjour {userDataLoggedIn[0].firstname}</h2>: <h2>Bonjour veuillez vous connecter</h2>}
			<Button onClick={() => router.push("/profilesList")}>Profiles List</Button>
			<Button onClick={() => router.push("/profile")}>Profile</Button>
			<Button onClick={() => router.push("/login")}>Login</Button>
			<Button onClick={() => { localStorage.removeItem("access_token"); setUserDataLoggedIn([]); router.push("/") } }>Logout</Button>
		</Container>
	)
	
}
