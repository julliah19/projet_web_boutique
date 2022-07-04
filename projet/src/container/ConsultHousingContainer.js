import React from "react";
import styled from "styled-components";
import { ConsultHousing } from "./ConsultHousing";

const Wrapper = styled.div`
    padding-top : 48px;`;

const Container = styled.div`
    display:flex;
    align-item: center;
    justify-content: center;
    padding-top : 48px;`;

export const ConsultHousingContainer = () => {
    return (
        <div>
            <Wrapper />
            <Container>
                <ConsultHousing />
            </Container>
        </div>
    );
}