import { Loading } from "@carbon/react";
import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { FetchAPI } from "./FetchAPI";
import { ClickableTile, Modal, Select, SelectItem, TextInput, DatePicker, DatePickerInput } from "@carbon/react";

const Wrapper = styled.div`
    padding-top : 48px;`;

export const renderConsultHousing = (loading, logement, openLogement, setOpenLogement, logCode, setLogcode, selectedLogement, setSelectedLogement, openVisite, setOpenVisite, agent, client, setClient, visite, setVisite, idClient, setIdClient) => {
    if (loading || !logement || !logCode || !selectedLogement || !agent || !idClient) {
        return (<div><Loading description='Chargement des logements...' withOverlay={false} style={{ display: 'block', position: 'fixed', top: '50%', left: '50%' }} /></div>)
    }

    const logementModal = () => {
        const array = Object.values(selectedLogement);
        const arrayText = [
            "Code",
            "Type",
            "Nombre de pièces",
            "Surface en m²",
            "Etat",
            "Adresse",
            "Nom du Propriétaire",
            "Prénom du Propriétaire",
            "Prix (€)",
            "Date de disponibilité",
            "Ville",
            "Nombre de garages"
        ]

        return (
            <Modal
                className="logementModal"
                open={openLogement}
                modalHeading={"Consultation de Logement de l'adresse " + selectedLogement.adresse + " , " + selectedLogement.ville}
                primaryButtonText="Plannifier une visite"
                secondaryButtonText="Fermer"
                onRequestSubmit={() => { setOpenVisite(true); setOpenLogement(false); }}
                onRequestClose={() => { setOpenLogement(false) }}
            >
                {array.map((obj, index) => {
                    if (index == 0)
                        return
                    else if (index == 9)
                        return (<div className="modalText">{arrayText[index] + " : " + obj.slice(0, 10)}</div>)
                    return (<div className="modalText">{arrayText[index] + " : " + obj}</div>)
                })}
            </Modal>
        )
    }

    const handleChangeVisite = evt => {

        console.log(visite);
        const name = evt.target.id;
        const value = evt.target.value;
        setVisite({
            ...visite,
            [name]: value
        });
    };

    const handleChangeClient = evt => {
        const name = evt.target.id;
        const value = evt.target.value;
        setClient({
            ...client,
            [name]: value
        });
    };

    const submitVisite = async () => {
        const res = await fetch('http://localhost:8000/api/postVisite', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "x-access-token": "token-value",
            },
            body: JSON.stringify(visite)
        });
    };

    const submitClient = async () => {
        const res = await fetch('http://localhost:8000/api/postClient', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "x-access-token": "token-value",
            },
            body: JSON.stringify(client)
        });
    };

    const handleSubmit = async () => {
        submitClient();
        submitVisite();
    }


    const visiteModal = () => {
        return (
            <Modal
                className="visiteModal"
                open={openVisite}
                modalHeading={"Planifier une visite à l'adresse : " + selectedLogement.adresse + " , " + selectedLogement.ville}
                primaryButtonText="Confirmer"
                secondaryButtonText="Fermer"
                onRequestSubmit={() => { handleSubmit() }}
                onRequestClose={() => { setOpenVisite(false); }}
            >
                <div className="container">
                    <Select
                        id="idAgent"
                        defaultValue="placeholder-item"
                        labelText="Choisissez un agent"
                        onChange={handleChangeVisite}>
                        <SelectItem
                            disabled
                            hidden
                            value="placeholder-item"
                            text="Choisissez un agent"
                        />
                        {agent.map((agent) => {
                            return (<SelectItem value={agent.idAgent} text={agent.nom + " " + agent.prenom} />)
                        })}
                    </Select>
                </div>
                <div className="container">
                    <TextInput
                        helperText="(15 caractères maximum)"
                        id="nomclient"
                        invalidText="Invalid error message."
                        placeholder="Votre nom"
                        labelText="Nom"
                        onChange={handleChangeClient}
                    />
                    <TextInput
                        helperText="(15 caractères maximum)"
                        id="prenomclient"
                        invalidText="Invalid error message."
                        placeholder="Votre prénom"
                        labelText="Prénom"
                        onChange={handleChangeClient}

                    />
                </div>
                <div className="container">
                    <TextInput
                        helperText="(20 caractères maximum)"
                        id="adresseclient"
                        invalidText="Invalid error message."
                        placeholder="Votre adresse"
                        labelText="Adresse"
                        onChange={handleChangeClient}

                    />
                </div>
                <div className="container">
                    <TextInput
                        helperText="(20 caractères maximum)"
                        id="villeclient"
                        invalidText="Invalid error message."
                        placeholder="Votre ville"
                        labelText="Ville"
                        onChange={handleChangeClient}
                    />
                    <DatePicker datePickerType="single" style={{ textAlign: "left" }} dateFormat='Y/m/d'>
                        <DatePickerInput
                            placeholder="jj/mm/aaaa"
                            labelText="Date de disponibilité"
                            id="dateVisite"
                            type="date"
                            onChange={handleChangeVisite}
                            onClick={handleChangeVisite}
                            value={visite.dateVisite}
                        />
                    </DatePicker>
                </div>
            </Modal>
        )
    }

    return (<div className="container">
        {logementModal()}
        {visiteModal()}
        {logement.map((l) => {
            return (<ClickableTile onClick={() => {
                setLogcode(l.code);
                setOpenLogement(true);
                setSelectedLogement(logement.find((obj) => {
                    if (obj.code == l.code)
                        return obj;
                }));
            }}>
                {Object.keys(l).map(att => {
                    if (att == "dateDispo")
                        return (<div className="tileText">{att.charAt(0).toUpperCase() + att.slice(1) + " : " + l[att].slice(0, 10)}<br /></div>)
                    else if (att == "type" || att == "Etat" || att == "Prix" || att == "ville" || att == "nbGarage" || att == "adresse")
                        return (<div className="tileText">{att.charAt(0).toUpperCase() + att.slice(1) + " : " + l[att]}<br /></div>);
                })}
            </ClickableTile >);
        })}
    </div>)
}

export const ConsultHousing = () => {

    const [logement, setLogement] = FetchAPI([]);
    const [loading, setLoading] = useState(true);
    const [openLogement, setOpenLogement] = useState(false);
    const [openVisite, setOpenVisite] = useState(false);
    const [logCode, setLogcode] = useState(1);
    const [selectedLogement, setSelectedLogement] = useState([]);
    const [agent, setAgent] = FetchAPI([]);
    const [client, setClient] = useState({
        nomclient: "",
        prenomclient: "",
        adresseclient: "",
        villeclient: ""
    });
    const [visite, setVisite] = useState({
        code: "",
        idAgent: "",
        idClient: "",
        dateVisite: ""
    });
    const [idClient, setIdClient] = FetchAPI();


    const consultContent = useMemo(
        () => renderConsultHousing(
            loading, logement, openLogement, setOpenLogement, logCode, setLogcode, selectedLogement, setSelectedLogement, openVisite, setOpenVisite, agent, client, setClient, visite, setVisite, idClient, setIdClient
        )
        , [
            loading, logement, openLogement, logCode, selectedLogement, openVisite, agent, client, visite, idClient
        ]
    );

    useEffect(() => {
        setLogement("http://localhost:8000/api/getlogement");
        setAgent("http://localhost:8000/api/getagent");
        setIdClient("http://localhost:8000/api/lastClient");
    }, [])

    useEffect(() => {
        if (logement) {
            setLoading(false);
            setSelectedLogement(logement.find((obj) => {
                if (obj.code == logCode)
                    return obj;
            }));
        }
    }, [logement])

    useEffect(() => {
        if (selectedLogement)
            setVisite({
                ...visite,
                ["code"]: selectedLogement.code
            });
    }, [selectedLogement]);

    useEffect(() => {
        if (idClient){
            setVisite({
                ...visite,
                ["idClient"]: idClient[0].idClient + 1
            });
        }

    }, [idClient])

    return (
        <div>
            {consultContent}
        </div>
    );
}
