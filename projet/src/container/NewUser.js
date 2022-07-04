import React from "react";
import styled from "styled-components";
import { FormNewUser } from "../component/FormNewUser";

const Wrapper = styled.div`
    padding-top : 48px;`;

const Container = styled.div`
    display:flex;
    align-item: center;
    justify-content: center;
    padding-top : 48px;`;

export const NewUser = () => {
    return (
        <div>
            <Wrapper />
            <Container>
                <FormNewUser />
            </Container>
        </div>
    );
}