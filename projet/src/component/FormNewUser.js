import React, { useState } from "react";
import { Form, Stack, Select, TextArea, SelectItem, Button, TextInput, DatePicker, DatePickerInput, NumberInput } from "@carbon/react";

const post = async (e) => {
    const res = await fetch('http://localhost:8000/api/postLogement', {
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
    const [logement, setLogement] = useState({
        nomproprio: "",
        prenomproprio: "",
        adresselogement: "",
        villelogement: "",
        nbpieces: 0,
        surfacelogement: 0,
        typelogement: "Appartement",
        datedispo: "",
        etatlogement: "Neuf",
        prixlogement: 0,
        nbgarage: 0
    });

    const handleChange = evt => {
        const name = evt.target.id;
        const value = evt.target.value;
        setLogement({
            ...logement,
            [name]: value
        })
    }

    return (
        <div>
            <Form>
                <Stack gap={7}>
                    <h1>Formulaire de renseignement pour un logement</h1>
                    <TextInput
                        helperText="(20 caractères maximum)"
                        id="nomproprio"
                        invalidText="Invalid error message."
                        placeholder="Nom du propriétaire"
                        labelText="Nom du propriétaire" 
                        onChange={handleChange}
                        value={logement.nomproprio}
                    />
                    <TextInput
                        helperText="(20 caractères maximum)"
                        id="prenomproprio"
                        invalidText="Invalid error message."
                        placeholder="Prénom du propriétaire"
                        labelText="Prénom du propriétaire"
                        onChange={handleChange}
                        value={logement.prenomproprio}
                    />
                    <TextInput
                        helperText="(20 caractères maximum)"
                        id="adresselogement"
                        invalidText="Invalid error message."
                        placeholder="Adresse du logement"
                        labelText="Adresse du logement"
                        onChange={handleChange}
                        value={logement.adresselogement}
                    />
                    <div className="container">
                        <TextInput
                            helperText="(20 caractères maximum)"
                            id="villelogement"
                            invalidText="Invalid error message."
                            placeholder="Ville du logement"
                            labelText="Ville du logement"
                            onChange={handleChange}
                            value={logement.villelogement}
                        />
                        <NumberInput
                            id="nbpieces"
                            min={0}
                            max={100}
                            label="Nombre de pièces"
                            invalidText="Le nombre n'est pas valide"
                            onChange={handleChange}
                            value={logement.nbpieces}
                        />
                    </div>
                    <div className="container">
                        <NumberInput
                            id="surfacelogement"
                            min={0}
                            max={50000}
                            label="Surface en m²"
                            invalidText="Le nombre n'est pas valide"
                            onChange={handleChange}
                            value={logement.surfacelogement}
                        />
                        <Select
                            id="typelogement"
                            invalidText="This is an invalid error message."
                            labelText="Type du logement"
                            onChange={handleChange}
                            value={logement.typelogement}
                        >
                            <SelectItem
                                text="Appartement"
                                value="Appartement"
                            />
                            <SelectItem
                                text="Maison"
                                value="Maison"
                            />
                            <SelectItem
                                text="Pavillon"
                                value="Pavillon"
                            />
                        </Select>
                    </div>
                    <div className="container">
                        <DatePicker datePickerType="single" style={{ textAlign: "left" }} dateFormat='Y/m/d'>
                            <DatePickerInput
                                placeholder="jj/mm/aaaa"
                                labelText="Date de disponibilité"
                                id="datedispo"
                                type="date"
                                onChange={handleChange}
                                onClick={handleChange}
                                value={logement.datedispo}
                            />
                        </DatePicker>
                        <Select
                            id="etatlogement"
                            invalidText="This is an invalid error message."
                            labelText="Etat du logement"
                            onChange={handleChange}
                            value={logement.etatlogement}
                        >
                            <SelectItem
                                text="Neuf"
                                value="Neuf"
                            />
                            <SelectItem
                                text="Bon état"
                                value="Bon état"
                            />
                            <SelectItem
                                text="Bon"
                                value="Bon"
                            />
                            <SelectItem
                                text="Mauvais état"
                                value="Mauvais état"
                            />
                        </Select>
                    </div>
                    <div className="container">
                        <NumberInput
                            id="prixlogement"
                            min={0}
                            max={9999999999}
                            label="Prix du logement"
                            invalidText="Le nombre n'est pas valide"
                            onChange={handleChange}
                            value={logement.prixlogement}
                        />
                        <NumberInput
                            id="nbgarage"
                            min={0}
                            max={10}
                            label="Nombre de garage"
                            invalidText="Le nombre n'est pas valide"
                            onChange={handleChange}
                            value={logement.nbgarage}
                        />
                    </div>
                    <Button
                        kind="primary"
                        tabIndex={0}
                        onClick={() => handleSubmit(logement)}
                    >
                        Soumettre
                    </Button>
                </Stack>
            </Form>

        </div>
    );
}