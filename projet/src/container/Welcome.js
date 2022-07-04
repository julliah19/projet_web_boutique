import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    padding-top : 48px;`;

export const Welcome = () => {
    return (
        <div>
            <Wrapper />
            <h1>
                Welcome !
            </h1>
        </div>
    );
}
