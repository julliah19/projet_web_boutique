import React from "react";
import styled from "styled-components";
import { Cart } from "../component/Cart";

const Wrapper = styled.div`
    padding-top : 48px;`;

const Container = styled.div`
    display:flex;
    align-item: center;
    justify-content: center;
    padding-top : 48px;`;

export const CartContainer = () => {
    return (
        <div>
            <Wrapper />
            <Container>
                <Cart />
            </Container>
        </div>
    );
}