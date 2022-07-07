import React from "react";
import styled from "styled-components";
import Carousel from "../component/Carrousel";
import Footer from '../component/Footer';




const Wrapper = styled.div`
    padding-top : 48px;`;

const Container = styled.div`
    display:flex;
    align-item: center;
    justify-content: center;
    
    padding-top : 48px;`;
    

 const Space = styled.div`
    display:flex;
    align-item: center;
    justify-content: center;
   
    padding-top : 100px;`;

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

        <div>
        <Space >
        </Space>
        </div>

        <Footer />
</div>

    );
}
