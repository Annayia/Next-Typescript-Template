"use client";
import { UserGetDto } from "@/services/api.service";
import {
	createContext,
	useContext,
	Dispatch,
	SetStateAction,
	useState,
} from "react";

interface ContextProps {
	userId: number;
	setUserId: Dispatch<SetStateAction<number>>;
	userDataLoggedIn: UserGetDto[];
	setUserDataLoggedIn: Dispatch<SetStateAction<UserGetDto[]>>;
}

const GlobalContext = createContext<ContextProps>({
	userId: 0,
	setUserId: (): number => 0,
	userDataLoggedIn: [],
	setUserDataLoggedIn: (): UserGetDto[] => [],
});

import { ReactNode } from "react";

export const GlobalContextProvider = ({
	children,
}: {
	children: ReactNode;
}) => {
	const [userId, setUserId] = useState(0);
	const [userDataLoggedIn, setUserDataLoggedIn] = useState<UserGetDto[]>([]);

	return (
		<GlobalContext.Provider
			value={{
				userId,
				setUserId,
				userDataLoggedIn,
				setUserDataLoggedIn,
			}}>
			{children}
		</GlobalContext.Provider>
	);
};

export const useGlobalContext = () => useContext(GlobalContext);
