import React from 'react';
import ReusableForm from './Form';
import { connect } from 'react-redux';
import { fetchPostCode } from '../../actions';

import { Container, Row, Col } from 'react-bootstrap';
import { House } from 'react-bootstrap-icons';

const PostCodeInfo = props => {
  const postCodeText = () => {
    if (props.language.language === 'english' || !props.language.language) {
      return 'Zip Code';
      } else if (props.language.language === 'french') {
        return "Code Postal";
      } else {
        return 'CEP'
      }
  }

  const addressText = () => {
    if (props.language.language === 'english' || !props.language.language) {
      return 'Address';
      } else if (props.language.language === 'french') {
        return "Addresse";
      } else {
        return 'Endereço'
      }
  }

  const complementText = () => {
    if (props.language.language === 'english' || !props.language.language) {
      return 'Complement';
      } else if (props.language.language === 'french') {
        return "Complément";
      } else {
        return 'Complemento'
      }
  }

  const neighborhoodText = () => {
    if (props.language.language === 'english' || !props.language.language) {
      return 'Neighborhood';
      } else if (props.language.language === 'french') {
        return "Quartier";
      } else {
        return 'Bairro'
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

  const areaCodeText = () => {
    if (props.language.language === 'english' || !props.language.language) {
      return 'Area Code';
      } else if (props.language.language === 'french') {
        return "Indicatif Régional";
      } else {
        return 'DDD'
      }
  }

  const renderApi = () => {
    const address = props.api.currentAddress;
    if(!address) {
      return (
        <Container className="mt-5" >
          <Row>
            <Col>{postCodeText()}</Col>
            <Col><House /></Col>
          </Row>
          <Row>
            <Col>{addressText()}</Col>
            <Col><House /></Col>
          </Row>
          <Row>
            <Col>{complementText()}</Col>
            <Col><House /></Col>
          </Row>
          <Row>
            <Col>{neighborhoodText()}</Col>
            <Col><House /></Col>
          </Row>
          <Row>
            <Col>{cityText()}</Col>
            <Col><House /></Col>
          </Row>
          <Row>
            <Col>{stateText()}</Col>
            <Col><House /></Col>
          </Row>
          <Row>
            <Col>{areaCodeText()}</Col>
            <Col><House /></Col>
          </Row>
        </Container>
      )
    } else {
      return (
        <Container className="mt-5" >
          <Row>
            <Col>{postCodeText()}</Col>
            <Col>{address.cep}</Col>
          </Row>
          <Row>
            <Col>{addressText()}</Col>
            <Col>{address.logradouro}</Col>
          </Row>
          <Row>
            <Col>{complementText()}</Col>
            <Col>
            {address.complemento === "" ? 'Unknown' : address.complemento}
            </Col>
          </Row>
          <Row>
            <Col>{neighborhoodText()}</Col>
            <Col>{address.bairro}</Col>
          </Row>
          <Row>
            <Col>{cityText()}</Col>
            <Col>{address.localidade}</Col>
          </Row>
          <Row>
            <Col>{stateText()}</Col>
            <Col>{address.uf}</Col>
          </Row>
          <Row>
            <Col>{areaCodeText()}</Col>
            <Col>{address.ddd}</Col>
          </Row>
        </Container>
      )
    }
  }

  const titleText = () => {
    if (props.language.language === 'english' || !props.language.language) {
      return 'Brazilian Zip Code Search';
      } else if (props.language.language === 'french') {
        return "Recherche de Code Postal";
      } else {
        return 'Pesquisa de CEP'
      }
  }

  const labelText = () => {
    if (props.language.language === 'english' || !props.language.language) {
      return 'What Brazilian zip code to search?';
      } else if (props.language.language === 'french') {
        return "Quel code postal brésilien rechercher?";
      } else {
        return 'Pesquisar qual CEP?'
      }
  }

  const onSubmit = value => {
    props.fetchPostCode(value.searchTerm);
  }

  return (
    <div className = "mt-5">
      <h1>{titleText()}</h1>
      <div className = "mt-5">
        <ReusableForm
          label = {labelText()}
          placeholder = "12345678"
          submit = "Submit"
          onSubmit = {onSubmit}
        />
      </div>
      <div className="bt-5 d-flex justify-content-center text-center">{renderApi()}</div>
    </div>
  )
}

const mapStateToProps = state => {
  return { api: state.api, language: state.language }
}

export default connect(mapStateToProps, { fetchPostCode })(PostCodeInfo);