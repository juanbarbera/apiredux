import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchFiatExchange } from '../../actions';

import { Container, Row, Col, Button, Fade } from 'react-bootstrap';
import { Cash } from 'react-bootstrap-icons';

const FiatExchange = props => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    props.fetchFiatExchange();
  },[])

  const americanDollarText = () => {
    if (props.language.language === 'english' || !props.language.language) {
      return 'American Dollar';
      } else if (props.language.language === 'french') {
        return "Dollar Américain";
      } else {
        return 'Dólar Americano'
      }
  }

  const brazilianRealText = () => {
    if (props.language.language === 'english' || !props.language.language) {
      return 'Brazilian Real';
      } else if (props.language.language === 'french') {
        return "Réal Brésilien";
      } else {
        return 'Real Brasileiro'
      }
  }

  const poundSterlingText = () => {
    if (props.language.language === 'english' || !props.language.language) {
      return 'Pound Sterling';
      } else if (props.language.language === 'french') {
        return "Livre Sterling";
      } else {
        return 'Libra Esterlina'
      }
  }

  const australianDollarText = () => {
    if (props.language.language === 'english' || !props.language.language) {
      return 'Australian Dollar';
      } else if (props.language.language === 'french') {
        return "Dollar Australien";
      } else {
        return 'Dólar Australiano'
      }
  }

  const canadianDollarText = () => {
    if (props.language.language === 'english' || !props.language.language) {
      return 'Canadian Dollar';
      } else if (props.language.language === 'french') {
        return "Dollar Canadien";
      } else {
        return 'Dólar Canadense'
      }
  }

  const newZealandDollarText = () => {
    if (props.language.language === 'english' || !props.language.language) {
      return 'New Zealand Dollar';
      } else if (props.language.language === 'french') {
        return "Dollar Néo-zélandais";
      } else {
        return 'Dólar Neozelandes'
      }
  }

  const renminbiText = () => {
    if (props.language.language === 'english' || !props.language.language) {
      return 'Renminbi';
      } else if (props.language.language === 'french') {
        return "Renminbi";
      } else {
        return 'Renminbi'
      }
  }

  const japaneseYenText = () => {
    if (props.language.language === 'english' || !props.language.language) {
      return 'Japanese yen';
      } else if (props.language.language === 'french') {
        return "Yen Japonais";
      } else {
        return 'Iene Japones'
      }
  }

  const swissFrancText = () => {
    if (props.language.language === 'english' || !props.language.language) {
      return 'Swiss franc';
      } else if (props.language.language === 'french') {
        return "Franc Suisse";
      } else {
        return 'Franco Suíço'
      }
  }

  const swedishKronaText = () => {
    if (props.language.language === 'english' || !props.language.language) {
      return 'Swedish Krona';
      } else if (props.language.language === 'french') {
        return "Couronne Suédoise";
      } else {
        return 'Coroa Suéca'
      }
  }

  const renderApi = () => {
    const currency = props.api.current;
    if (!currency) {
      return (
        <Container className="mt-5" >
            <Row>
              <Col><i className="flag us" />{americanDollarText()}</Col>
              <Col>Loading...</Col>
            </Row>
            <Row>
              <Col><i className="flag br" />{brazilianRealText()}</Col>
              <Col>Loading...</Col>
            </Row>
            <Row>
              <Col><i className="flag gb uk" />{poundSterlingText()}</Col>
              <Col>Loading...</Col>
            </Row>
            <Row>
              <Col><i className="flag au" />{australianDollarText()}</Col>
              <Col>Loading...</Col>
            </Row>
            <Row>
              <Col><i className="flag ca" />{canadianDollarText()}</Col>
              <Col>Loading...</Col>
            </Row>
            <Row>
              <Col><i className="flag nz" />{newZealandDollarText()}</Col>
              <Col>Loading...</Col>
            </Row>
            <Row>
              <Col><i className="flag cn" />{renminbiText()}</Col>
              <Col>Loading...</Col>
            </Row>
            <Row>
              <Col><i className="flag jp" />{japaneseYenText()}</Col>
              <Col>Loading...</Col>
            </Row>          
            <Row>
              <Col><i className="flag ch" />{swissFrancText()}</Col>
              <Col>Loading...</Col>
            </Row>
            <Row>
              <Col><i className="flag se" />{swedishKronaText()}</Col>
              <Col>Loading...</Col>
            </Row>
          </Container>
      )
    } else {
      return (
        <Container className="mt-5" >
            <Row>
              <Col><i className="flag us" />{americanDollarText()} </Col>
              <Col>€{parseFloat(1/parseFloat(props.api.current.USD)).toFixed(3)}</Col>
            </Row>
            <Row>
              <Col><i className="flag br" />{brazilianRealText()} </Col>
              <Col>€{parseFloat(1/parseFloat(props.api.current.BRL)).toFixed(3)}</Col>
            </Row>
            <Row>
              <Col><i className="flag gb uk" />{poundSterlingText()} </Col>
              <Col>€{parseFloat(1/parseFloat(props.api.current.GBP)).toFixed(3)}</Col>
            </Row>
            <Row>
              <Col><i className="flag au" />{australianDollarText()} </Col>
              <Col>€{parseFloat(1/parseFloat(props.api.current.AUD)).toFixed(3)}</Col>
            </Row>
            <Row>
              <Col><i className="flag ca" />{canadianDollarText()} </Col>
              <Col>€{parseFloat(1/parseFloat(props.api.current.CAD)).toFixed(3)}</Col>
            </Row>
            <Row>
              <Col><i className="flag nz" />{newZealandDollarText()} </Col>
              <Col>€{parseFloat(1/parseFloat(props.api.current.NZD)).toFixed(3)}</Col>
            </Row>
            <Row>
              <Col><i className="flag cn" />{renminbiText()} </Col>
              <Col>€{parseFloat(1/parseFloat(props.api.current.CNY)).toFixed(3)}</Col>
            </Row>
            <Row>
              <Col><i className="flag jp" />{japaneseYenText()} </Col>
              <Col>€{parseFloat(1/parseFloat(props.api.current.JPY)).toFixed(3)}</Col>
            </Row>          
            <Row>
              <Col><i className="flag ch" />{swissFrancText()} </Col>
              <Col>€{parseFloat(1/parseFloat(props.api.current.CHF)).toFixed(3)}</Col>
            </Row>
            <Row>
              <Col><i className="flag se" />{swedishKronaText()} </Col>
              <Col>€{parseFloat(1/parseFloat(props.api.current.SEK)).toFixed(3)}</Col>
            </Row>
          </Container>
      )
    }
  }

  const titleText = () => {
    if (props.language.language === 'english' || !props.language.language) {
      return 'Currency Exchange Rates';
      } else if (props.language.language === 'french') {
        return "Échange de Devises";
      } else {
        return 'Cotação de Moedas'
      }
  }

  return (
    <div className="mt-5">
      <h1 className="d-flex justify-content-center">{titleText()}</h1>
      <div className="d-flex justify-content-center text-center">{renderApi()}</div>
      <div className="mt-5 mt-5">
        <Button
          onClick = {() => setOpen(!open)}
          aria-controls="warning-fade"
          aria-expanded={open}
          variant="danger"
        >
          Toggle Warning
        </Button>
        <Fade in={open} >
          <div id="warning-fade" >
          Exchange Rate updated every 24 hours. Be aware that the values displayed might not be accurate. Make sure to confirm the values in a trusted source.
          </div>
        </Fade>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return { api: state.api, language: state.language }
}

export default connect(mapStateToProps, { fetchFiatExchange })(FiatExchange);