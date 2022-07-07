import React from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { Add} from '@carbon/icons-react';
import { faCheckSquare, faMugHot } from "@fortawesome/free-solid-svg-icons";
import { FaFacebook, FaHeart, FaInstagram, FaTwitter } from "react-icons/fa";


const Box = styled.div`

padding : 20px 10px;
  background: white;
  position: relative;
  bottom: 0;
  width: 100%;
  border-top : groove;
  border-width: 1px;
  
  
   
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
   
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`
   
const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;
   
const Row = styled.div`
  display: flex;
  justify-content: space-around;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
const FooterLink = styled.a`
  color: black;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
      color: green;
      transition: 200ms ease-in;
  }
`;
   


const Footer = () => {
return (
  <Box>
  <Container>
    <Row>
    <Column>
    <FooterLink href="#">
      <i  class="fa-brands fa-facebook">
      <h2> <FaFacebook /> </h2>
      </i>
      </FooterLink>
    </Column>
    <Column>
    <FooterLink href="#">
 
      <i className="fab fa-instagram">
      <h2> <FaInstagram /> </h2>
      </i>
      </FooterLink>
    </Column>
    <Column>
    <FooterLink href="#">
      <i className="fab fa-twitter">
      <h2> <FaTwitter /> </h2>
      </i>
      </FooterLink>
    </Column>
    </Row>
  </Container>
  </Box>
);
};

export default Footer;
