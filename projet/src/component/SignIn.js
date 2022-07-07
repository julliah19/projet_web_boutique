import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Form, Stack, Button, TextInput } from "@carbon/react";
import PropTypes from 'prop-types';
import Axios from 'axios';
import UserContext from "../context/UserContext";

const Wrapper = styled.div`
    padding-top : 48px;`;

const Container = styled.div`
    display:flex;
    align-item: center;
    justify-content: center;
    padding-top : 48px;`;

const login = async (username, password, setAuthenticated, setName) => {
    Axios.post("http://localhost:8000/api/login", {
        data: [username, password]
    }).then((response) => {
        console.log(response);
        if (response.data == "Pseudonyme ou mot de passe incorrect"){
            return;
        }
        else {
            setAuthenticated(true);
            setName(username);
            localStorage.setItem('userData', JSON.stringify({isAuthenticated:true, name:username, cart:[]}));
            alert(response.data);
        }
        //notification success or error
    })
}


export const SignIn = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const { setIsAuthenticated, setName } = useContext(UserContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password, setIsAuthenticated, setName);
    }

    return (
        <Wrapper>
            <Container>
                <div style={{ width: "40vw" }}>
                    <Form onSubmit={handleSubmit}>
                        <Stack gap={7}>
                            <h1>Connexion</h1>
                            <TextInput
                                id="pseudo"
                                invalidText="Invalid error message."
                                placeholder="Pseudonyme"
                                labelText="Pseudonyme"
                                onChange={e => setUsername(e.target.value)}
                                value={username}
                            />
                            <TextInput
                                id="mdp"
                                invalidText="Invalid error message."
                                placeholder="Mot de passe"
                                labelText="Mot de passe"
                                type="password"
                                onChange={e => setPassword(e.target.value)}
                                value={password}
                            />
                            <Button
                                kind="primary"
                                type="Submit"
                                tabIndex={0}
                            >
                                Connexion
                            </Button>
                        </Stack>
                    </Form>
                </div>
            </Container>
        </Wrapper>
    );
}

SignIn.propTypes = {
    setToken: PropTypes.func.isRequired
}