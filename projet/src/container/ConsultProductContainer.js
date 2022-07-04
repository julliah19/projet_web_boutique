import React from "react";
import styled from "styled-components";
import { ConsultProduct } from "./ConsultProduct";

const Wrapper = styled.div`
    padding-top : 48px;`;

const Container = styled.div`
    display:flex;
    align-item: center;
    justify-content: center;
    padding-top : 48px;`;

export const ConsultProductContainer = () => {
    return (
        <div>
            <Wrapper />
            <Container>
                <ConsultProduct />
            </Container>
        </div>
    );
}