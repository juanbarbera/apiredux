import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSelector from './topNav-components/LanguageSelector';
import { connect } from 'react-redux';

import { NavDropdown, Container, Nav, Navbar } from 'react-bootstrap';

// css
import './TopNav.css';

const TopNav = props => {
  
  const carPlateText = () => {
    if (props.language.language === 'english' || !props.language.language) {
    return 'Car Plate';
    } else if (props.language.language === 'french') {
      return "Plaque D'immatriculation";
    } else {
      return 'Placa de Carro'
    }
  }

  const postCodeText = () => {
    if (props.language.language === 'english' || !props.language.language) {
      return 'Zip Code';
      } else if (props.language.language === 'french') {
        return "Code Postal";
      } else {
        return 'CEP'
      }
  }

  const currencyExchangeText = () => {
    if (props.language.language === 'english' || !props.language.language) {
      return 'Currency Exchange';
      } else if (props.language.language === 'french') {
        return 'Échange de Devises';
      } else {
        return 'Cotação de Moedas'
      }
  }

  const cryptoValueText = () => {
    if (props.language.language === 'english' || !props.language.language) {
      return 'Crypto-currencies Value';
      } else if (props.language.language === 'french') {
        return 'Valeur des Crypto-monnaies';
      } else {
        return 'Valor das Criptomoedas'
      }
  }

  const selectApiText = () => {
    if (props.language.language === 'english' || !props.language.language) {
      return 'Select API';
      } else if (props.language.language === 'french') {
        return "Sélectionner L'API";
      } else {
        return 'Selecione API'
      }
  }

  return (
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand as={Link} to={"/"}>
          <img
            alt=""
            src="/pictures/Information.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          <span className="ml-5" id="brand">
            ApiPractice - React
          </span>  
        </Navbar.Brand>  
        <Navbar.Toggle aria-controls="responsive-navbar-nav" /> 
        <Navbar.Collapse id="responsive-navbar-nav" >  
          <Nav className="me-auto">
            <NavDropdown title={selectApiText()} id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to={"/"}>{carPlateText()}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/post-code"}>{postCodeText()}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/fiat-exchange"}>{currencyExchangeText()}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/crypto-value"}>{cryptoValueText()}</NavDropdown.Item>
            </NavDropdown>  
            <LanguageSelector/>     
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const mapStateToProps = state => {
  return { language: state.language}
}

export default connect(mapStateToProps)(TopNav);

{/* <div className="d-flex align-items-center">
</div> */}