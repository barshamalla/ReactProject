import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import jumboimage from '../assets/img/hands2.jpg';
import elelogo from '../assets/img/elelogo.png';
import { NavigationBar } from './NavigationBar';

const Styles = styled.div`

.jumbotron{
    background: url(${jumboimage}) no-repeat fixed Bottom ;
    background-size: cover;
    color: #efefef;
    height: 300px;
    position: relative;
    z-index: -2;
    top: 80%;
    transform: translateY(-50%);
 
}
.jumbotron > .container {
    position: relative;
    top: 80%;
    transform: translateY(-50%);
 }
.overlay {
    background-color: #000;
    opacity: 0.4;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
  .elelogo{
    display: block;
    max-width: 100%;
    height:auto;
    max-height:300px;
    margin: 0 auto;
    align-items: center;
   
 }
  
`;

export const Jumbotron = () => (
    <Styles>
        
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
            <img src="./assets/img/elelogo.png" className="elelogo" ></img>
            
        </Container>
        
        </Jumbo>
       
    </Styles>
)