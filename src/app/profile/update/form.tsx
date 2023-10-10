import React, { useState } from "react";
import {ApiService, UserGetDto, UserUpdateDto} from '../../../services/api.service';

import {
	TextField,
	Button,
	Container,
} from "@mui/material";


let id = 10;
let email = 'olikoen@yahoo.fr';

 export default function UserUpdateForm() {
    const apiService: ApiService = new ApiService();
    const [lastname, setLastname] = useState<string>("");
    const [firstname, setFirstname] = useState<string>("");
   
    async function handleSubmitForm() {
        //send Data over server
        const updatedUser: UserUpdateDto = new UserUpdateDto({
            id: id,
            email: email,
            lastname: lastname,
            firstname: firstname,
        })
        const data :UserGetDto= await apiService.userUpdate(updatedUser);
    }

    return (
			<Container maxWidth="xs">
					<TextField
						label="Nom"
						type="text"
						value={lastname}
						onChange={(e) => setLastname(e.target.value)}
						fullWidth
						required
						margin="normal"
					/>
					<TextField
						label="Prénom :"
						type="text"
						value={firstname}
						onChange={(e) => setFirstname(e.target.value)}
						fullWidth
						required
						margin="normal"
					/>
				<Button
					type="submit"
					variant="contained"
					color="primary"
					fullWidth
					size="large"
					onClick={handleSubmitForm}>
                    Validez
				</Button>
			</Container>
	);
};
