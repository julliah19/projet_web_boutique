import React, { useState } from "react";
import { Form, Stack, Button, TextInput } from "@carbon/react";

const post = async (e) => {
    const res = await fetch('http://localhost:8000/api/postClient', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "x-access-token": "token-value",
        },
        body: JSON.stringify(e)
    })
}


const handleSubmit = (e) => {
    post(e);
}


export const FormNewUser = () => {
    const [client, setClient] = useState({
        nomClient: "",
        prenomClient: "",
        adresse: "",
        codePostal: "",
        tel: "",
        pseudo: "",
        mdp: ""
    });

    const handleChange = evt => {
        const name = evt.target.id;
        const value = evt.target.value;
        setClient({
            ...client,
            [name]: value
        })
    }

    return (
        <div style={{width:"40vw"}}>
            <Form>
                <Stack gap={7}>
                    <h1>Formulaire d'inscription</h1>
                    <TextInput
                        helperText="(20 caractères maximum)"
                        id="nomClient"
                        invalidText="Invalid error message."
                        placeholder="Nom"
                        labelText="Nom"
                        onChange={handleChange}
                        value={client.nomClient}
                    />
                    <TextInput
                        helperText="(20 caractères maximum)"
                        id="prenomClient"
                        invalidText="Invalid error message."
                        placeholder="Prénom"
                        labelText="Prénom"
                        onChange={handleChange}
                        value={client.prenomClient}
                    />
                    <TextInput
                        helperText="(20 caractères maximum)"
                        id="adresse"
                        invalidText="Invalid error message."
                        placeholder="Adresse"
                        labelText="Adresse"
                        onChange={handleChange}
                        value={client.adresse}
                    />
                    <div className="container">
                        <TextInput
                            helperText="(20 caractères maximum)"
                            id="codePostal"
                            invalidText="Invalid error message."
                            placeholder="Code Postal"
                            labelText="Code Postal"
                            onChange={handleChange}
                            value={client.codePostal}
                        />
                        <TextInput
                            helperText="(20 caractères maximum)"
                            id="tel"
                            invalidText="Invalid error message."
                            placeholder="Téléphone"
                            labelText="Téléphone"
                            onChange={handleChange}
                            value={client.tel}
                        />
                    </div>
                    <TextInput
                        helperText="(20 caractères maximum)"
                        id="pseudo"
                        invalidText="Invalid error message."
                        placeholder="Pseudonyme"
                        labelText="Pseudonyme"
                        onChange={handleChange}
                        value={client.pseudo}
                    />
                    <TextInput
                        helperText="(20 caractères maximum)"
                        id="mdp"
                        invalidText="Invalid error message."
                        placeholder="Mot de Passe"
                        labelText="Mot de Passe"
                        type="password"
                        onChange={handleChange}
                        value={client.mdp}
                    />
                    <TextInput
                        helperText="(20 caractères maximum)"
                        id="mdp"
                        invalidText="Invalid error message."
                        placeholder="Confirmer votre mot de passe"
                        labelText="Confirmer votre mot de passe"
                        type="password"
                        onChange={handleChange}
                        value={client.mdp}
                    />
                    <Button
                        kind="primary"
                        tabIndex={0}
                        onClick={() => handleSubmit(client)}
                    >
                        Soumettre
                    </Button>
                </Stack>
            </Form>

        </div>
    );
}