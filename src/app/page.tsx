"use client";
import { useGlobalContext } from "../utils/contexts/AppContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ApiService } from "./services/api.service";
import jwt_decode, {
	JwtPayload,
} from "jwt-decode";

export default function Home() {
	const router = useRouter();
	const {
		userId,
		setUserId,
		data,
		setData,
	} = useGlobalContext();
	const apiService: ApiService =
		new ApiService();

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		type customJwtPayload =
			JwtPayload & {
				userId: number;
			};
		const token =
			localStorage.getItem(
				"access_token"
			);
		if (!token) {
			console.log("pas de token");
			return "";
		} else {
			const decodedToken =
				jwt_decode<customJwtPayload>(
					token
				);
			console.log(
				decodedToken.userId
			);
			const userData =
				await apiService.userById(
					decodedToken.userId
				);
			console.log(userData);
			setData([userData]);
		}
	};

	return <></>;
}
