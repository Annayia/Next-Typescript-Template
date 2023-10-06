"use client";
import { useGlobalContext } from "../utils/contexts/AppContext";
import { useEffect } from "react";
import { ApiService } from "../services/api.service";
import jwt_decode, { JwtPayload } from "jwt-decode";
import Link from "next/link";
import { Typography } from "@mui/material";

export default function Home() {
	const { data, setData } = useGlobalContext();
	const apiService: ApiService = new ApiService();

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		type customJwtPayload = JwtPayload & {
			userId: number;
		};
		const token = localStorage.getItem("access_token");
		if (!token) {
			console.log("pas de token");
		} else {
			const decodedToken = jwt_decode<customJwtPayload>(token);
			console.log(decodedToken.userId);
			const userData = await apiService.userById(decodedToken.userId);
			console.log(userData);
			setData([userData]);
		}
	};
	if (data !== undefined) {
		return data.map((user) => (
			<>
				<Link key={user.id} href={"/profile"}>
					<Typography>Bienvenue {user.firstName}</Typography>
				</Link>
			</>
		));
	} else {
		<>
			<Link href={"/login"}>Veuillez vous connecter ici</Link>;
		</>;
	}
}
