import React from 'react';
import ReusableForm from './Form';
import { connect } from 'react-redux';
import { fetchCarPlate } from '../../actions'

import { Container, Row, Col } from 'react-bootstrap';
import { Cone } from 'react-bootstrap-icons';

const CarPlateInfo = props => {
  const vehiclePlateText = () => {
    if (props.language.language === 'english' || !props.language.language) {
      return 'Vehicle Plate';
    } else if (props.language.language === 'french') {
      return "Plaque D'immatriculation";
    } else {
      return 'Placa do Carro'
    }
  }

  const modelText = () => {
    if (props.language.language === 'english' || !props.language.language) {
      return 'Model';
    } else if (props.language.language === 'french') {
      return "modèle";
    } else {
      return 'Modelo'
    }
  }
  
  const colorText = () => {
    if (props.language.language === 'english' || !props.language.language) {
      return 'Color';
    } else if (props.language.language === 'french') {
      return "Coleur";
    } else {
      return 'Cor'
    }
  }

  const yearText = () => {
    if (props.language.language === 'english' || !props.language.language) {
      return 'Year';
    } else if (props.language.language === 'french') {
      return "An";
    } else {
      return 'Ano'
    }
  }

  const modelYearText = () => {
    if (props.language.language === 'english' || !props.language.language) {
      return 'Model Year';
    } else if (props.language.language === 'french') {
      return "An Modèle";
    } else {
      return 'Ano Modelo'
    }
  }

  const cityText = () => {
    if (props.language.language === 'english' || !props.language.language) {
      return 'City';
    } else if (props.language.language === 'french') {
      return "Ville";
    } else {
      return 'Cidade'
    }
  }

  const stateText = () => {
    if (props.language.language === 'english' || !props.language.language) {
      return 'State';
    } else if (props.language.language === 'french') {
      return "Etat";
    } else {
      return 'Estado'
    }
  }

  const renderApi = () => {
    const vehicle = props.api.currentCar;
    if(!vehicle) {
      return (
        <Container className="mt-5" >
          <Row>
            <Col>{vehiclePlateText()}</Col>
            <Col><Cone /></Col>
          </Row>
          <Row>
            <Col>{modelText()}</Col>
            <Col><Cone /></Col>
          </Row>
          <Row>
            <Col>{colorText()}</Col>
            <Col><Cone /></Col>
          </Row>
          <Row>
            <Col>{yearText()}</Col>
            <Col><Cone /></Col>
          </Row>
          <Row>
            <Col>{modelYearText()}</Col>
            <Col><Cone /></Col>
          </Row>
          <Row>
            <Col>{cityText()}</Col>
            <Col><Cone /></Col>
          </Row>
          <Row>
            <Col>{stateText()}</Col>
            <Col><Cone /></Col>
          </Row>
        </Container>
      )
    } else {
      return (
        <Container className="mt-5" >
          <Row>
            <Col>{vehiclePlateText()}</Col>
            <Col>{vehicle.placa}</Col>
          </Row>
          <Row>
            <Col>{modelText()}</Col>
            <Col>{vehicle.modelo}</Col>
          </Row>
          <Row>
            <Col>{colorText()}</Col>
            <Col>{vehicle.cor}</Col>
          </Row>
          <Row>
            <Col>{yearText()}</Col>
            <Col>{vehicle.ano}</Col>
          </Row>
          <Row>
            <Col>{modelYearText()}r</Col>
            <Col>{vehicle.anoModelo}</Col>
          </Row>
          <Row>
            <Col>{cityText()}</Col>
            <Col>{vehicle.municipio}</Col>
          </Row>
          <Row>
            <Col>{stateText()}</Col>
            <Col>{vehicle.uf}</Col>
          </Row>
        </Container>
    )}
  }

  const titleText = () => {
    if (props.language.language === 'english' || !props.language.language) {
      return 'Brazilian Car Plate Search';
      } else if (props.language.language === 'french') {
        return "Recherche de plaque de voiture brésilienne";
      } else {
        return 'Pesquisa de Placa de Carro'
      }
  }

  const labelText = () => {
    if (props.language.language === 'english' || !props.language.language) {
      return 'What Brazilian car plate to search?';
      } else if (props.language.language === 'french') {
        return "Quelle plaque de voiture brésilienne rechercher?";
      } else {
        return 'Pesquisar qual placa?'
      }
  }
  
  const onSubmit = value => {
    // console.log(value) // prints value which is an object with the property searchTerm containing information provided to search bar.
    props.fetchCarPlate(value.searchTerm)
  }

  return (
    <div className = "mt-5">
      <h1 style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>{titleText()}</h1>
      <div className = "mt-5" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
        <ReusableForm
          label = {labelText()}
          placeholder = "fui4130"
          submit = "Submit"
          onSubmit = {onSubmit}
          type="plate"
        />
      </div>
      <div className="bt-5 d-flex justify-content-center text-center">{renderApi()}</div>
    </div>      
  )
};

const mapStateToProps = state => {
  return { api: state.api, language: state.language };
}

export default connect(mapStateToProps, { fetchCarPlate })(CarPlateInfo);