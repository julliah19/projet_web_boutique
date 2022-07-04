import React from "react";
import styled from "styled-components";
import { ConsultVisit } from "./ConsultVisit";
const Wrapper = styled.div`
    padding-top : 48px;`;

const Container = styled.div`
    display:flex;
    align-item: center;
    justify-content: center;
    padding-top : 48px;`;

export const ConsultVisitContainer = () => {
    return (
        <div>
            <Wrapper />
            <Container>
                <ConsultVisit/>
            </Container>
        </div>
    );
}