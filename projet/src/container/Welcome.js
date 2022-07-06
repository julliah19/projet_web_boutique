import React from "react";
import styled from "styled-components";
import Carousel from "../component/Carrousel";


const Wrapper = styled.div`
    padding-top : 48px;`;

const Container = styled.div`
    display:flex;
    align-item: center;
    justify-content: center;
    padding-top : 48px;`;

export const Welcome = () => {
    return (
        <div>
        <Wrapper />
        <Container>
        <Carousel>
    <img src={window.location.origin+ "/images/slide1.png"} alt="placeholder" />
    <img src={window.location.origin+ "/images/slide2.png"} alt="placeholder" />
    <img src={window.location.origin+ "/images/slide3.png"} alt="placeholder" />
    </Carousel>
        </Container>
</div>

    );
}
