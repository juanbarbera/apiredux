import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchCryptoValue } from '../../actions';

import { Container, Row, Col, Button, ButtonGroup, Fade, Spinner } from 'react-bootstrap';

const CryptoValue = props => {
  const [open, setOpen] = useState(false);
  const [currency, setCurrency] = useState('eur');

  useEffect(() => {
    if( currency === 'eur' || !currency) {
      props.fetchCryptoValue('EUR');
    } else if (currency === 'usd') {
      props.fetchCryptoValue('USD');
    } else {
      props.fetchCryptoValue('BRL');
    }
  }, [currency]);

  const crypto = props.api.crypto;
  const currencySymbol = () => {
    if (currency === 'eur') {
      return '€';
    } else if (currency === 'usd') {
      return '$'
    } else {
      return 'R$'
    }
  }

  const renderCryptoApi = () => {
    if (!crypto) {
      return (
        <Container className="mt-5" >
            <Row>
              <Col>Bitcoin (BTC)</Col>
              <Col>Loading...</Col>
            </Row>
            <Row>
              <Col>Ethereum (ETH)</Col>
              <Col>Loading...</Col>
            </Row>
            <Row>
              <Col>Tether (USDT)</Col>
              <Col>Loading...</Col>
            </Row>
            <Row>
              <Col>Bnb (BNB)</Col>
              <Col>Loading...</Col>
            </Row>
            <Row>
              <Col>Usd coin (USDC)</Col>
              <Col>Loading...</Col>
            </Row>
            <Row>
              <Col>Ardano (ADA)</Col>
              <Col>Loading...</Col>
            </Row>
            <Row>
              <Col>Solana (SOL)</Col>
              <Col>Loading...</Col>
            </Row>
            <Row>
              <Col>Xrp (XRP)</Col>
              <Col>Loading...</Col>
            </Row>          
            <Row>
              <Col>Terra (LUNA)</Col>
              <Col>Loading...</Col>
            </Row>
            <Row>
              <Col>Dogecoin (DOGE)</Col>
              <Col>Loading...</Col>
            </Row>
            <Row>
              <Col>Polkadot (DOT)</Col>
              <Col>Loading...</Col>
            </Row>
            <Row>
              <Col>Avalanche (AVAX)</Col>
              <Col>Loading...</Col>
            </Row>
            <Row>
              <Col>Binance usd (BUSD)</Col>
              <Col>Loading...</Col>
            </Row>
            <Row>
              <Col>Polygon (MATIC)</Col>
              <Col>Loading...</Col>
            </Row>
            <Row>
              <Col>Shiba Inu (SHIB)</Col>
              <Col>Loading...</Col>
            </Row>
            <Row>
              <Col>TerraUSD (UST)</Col>
              <Col>Loading...</Col>
            </Row>
            <Row>
              <Col>Crypo.com Coin (CRO)</Col>
              <Col>Loading...</Col>
            </Row>
            <Row>
              <Col>Wrapped Bitcoin (WBTC)</Col>
              <Col>Loading...</Col>
            </Row>
            <Row>
              <Col>Dai (DAI)</Col>
              <Col>Loading...</Col>
            </Row>
            <Row>
              <Col>Chainlink (LINK)</Col>
              <Col>Loading...</Col>
            </Row>
          </Container>
      )
    } else {
      // console.log(crypto[0])
      return (
        <Container className="mt-5" >
          <Row>
            <Col>Bitcoin (BTC)</Col>
            <Col>{currencySymbol()}{parseFloat(1/parseFloat(crypto[3].rate)).toFixed(3)}</Col>
          </Row>
          <Row>
            <Col>Ethereum (ETH)</Col>
            <Col>{currencySymbol()}{parseFloat(1/parseFloat(crypto[9].rate)).toFixed(3)}</Col>
          </Row>
          <Row>
            <Col>Tether (USDT)</Col>
            <Col>{currencySymbol()}{parseFloat(1/parseFloat(crypto[16].rate)).toFixed(3)}</Col>
          </Row>
          <Row>
            <Col>Bnb (BNB)</Col>
            <Col>{currencySymbol()}{parseFloat(1/parseFloat(crypto[2].rate)).toFixed(3)}</Col>
          </Row>
          <Row>
            <Col>Usd coin (USDC)</Col>
            <Col>{currencySymbol()}{parseFloat(1/parseFloat(crypto[15].rate)).toFixed(3)}</Col>
          </Row>
          <Row>
            <Col>Ardano (ADA)</Col>
            <Col>{currencySymbol()}{parseFloat(1/parseFloat(crypto[0].rate)).toFixed(3)}</Col>
          </Row>
          <Row>
            <Col>Solana (SOL)</Col>
            <Col>{currencySymbol()}{parseFloat(1/parseFloat(crypto[14].rate)).toFixed(3)}</Col>
          </Row>
          <Row>
            <Col>Xrp (XRP)</Col>
            <Col>{currencySymbol()}{parseFloat(1/parseFloat(crypto[19].rate)).toFixed(3)}</Col>
          </Row>          
          <Row>
            <Col>Terra (LUNA)</Col>
            <Col>{currencySymbol()}{parseFloat(1/parseFloat(crypto[11].rate)).toFixed(3)}</Col>
          </Row>
          <Row>
            <Col>Dogecoin (DOGE)</Col>
            <Col>{currencySymbol()}{parseFloat(1/parseFloat(crypto[7].rate)).toFixed(3)}</Col>
          </Row>
          <Row>
            <Col>Polkadot (DOT)</Col>
            <Col>{currencySymbol()}{parseFloat(1/parseFloat(crypto[8].rate)).toFixed(3)}</Col>
          </Row>
          <Row>
            <Col>Avalanche (AVAX)</Col>
            <Col>{currencySymbol()}{parseFloat(1/parseFloat(crypto[1].rate)).toFixed(3)}</Col>
          </Row>
          <Row>
            <Col>Binance usd (BUSD)</Col>
            <Col>{currencySymbol()}{parseFloat(1/parseFloat(crypto[4].rate)).toFixed(3)}</Col>
          </Row>
          <Row>
            <Col>Polygon (MATIC)</Col>
            <Col>{currencySymbol()}{parseFloat(1/parseFloat(crypto[3].rate)).toFixed(3)}</Col>
          </Row>
          <Row>
            <Col>Shiba Inu (SHIB)</Col>
            <Col>{currencySymbol()}{parseFloat(1/parseFloat(crypto[13].rate)).toFixed(3)}</Col>
          </Row>
          <Row>
            <Col>TerraUSD (UST)</Col>
            <Col>{currencySymbol()}{parseFloat(1/parseFloat(crypto[17].rate)).toFixed(3)}</Col>
          </Row>
          <Row>
            <Col>Crypo.com Coin (CRO)</Col>
            <Col>{currencySymbol()}{parseFloat(1/parseFloat(crypto[5].rate)).toFixed(3)}</Col>
          </Row>
          <Row>
            <Col>Wrapped Bitcoin (WBTC)</Col>
            <Col>{currencySymbol()}{parseFloat(1/parseFloat(crypto[18].rate)).toFixed(3)}</Col>
          </Row>
          <Row>
            <Col>Dai (DAI)</Col>
            <Col>{currencySymbol()}{parseFloat(1/parseFloat(crypto[6].rate)).toFixed(3)}</Col>
          </Row>
          <Row>
            <Col>Chainlink (LINK)</Col>
            <Col>{currencySymbol()}{parseFloat(1/parseFloat(crypto[10].rate)).toFixed(3)}</Col>
          </Row> 
       </Container>
      )
    }
  }

  
  const titleText = () => {
    if (props.language.language === 'english' || !props.language.language) {
      return 'Crypto Currency Values in:';
      } else if (props.language.language === 'french') {
        return "Crypto-monnaie Dans:";
      } else {
        return 'Criptomoeda em:'
      }
  } 

  return (
    <div className="mt-5">
      <div className="d-flex" style={{justifyContent: 'center'}}>
        <div>
        <h1>{titleText()}</h1>
        </div>
        <ButtonGroup>
          <Button onClick={() => setCurrency('eur')} variant="primary">EUR</Button>
          <Button onClick={() => setCurrency('usd')} variant="primary">USD</Button>
          <Button onClick={() => setCurrency('brl')} variant="primary">BRL</Button>
        </ButtonGroup>
      </div>
      <div>
        <Container className="bt-5 d-flex justify-content-center text-center">
          {renderCryptoApi()}
        </Container>
      </div>
      <div className="mt-5">
        <Button
          onClick = {() => setOpen(!open)}
          aria-controls="warning-fade"
          aria-expanded={open}
          variant="danger"
        >
          Toggle Warning
        </Button>
        <Fade in={open}>
          <div id="warning-fade">
          Though Cryptonator synchronizes with online cryptocurrencies exchanges every minute, we cannot guarantee absolute accuracy of the displayed exchange rates. You should always confirm current rates before making any transactions that could be affected by changes in the exchange rates. Crypocurrency rates based on the data provided by exchanges APIs. All rates are for information purposes only and are subject to change without prior notice. Since rates for actual transactions may vary we are not offering to enter into any transaction at any rate displayed. Displayed rates are composite prices and not intended to be used for investment purposes.
          </div>
        </Fade>
      </div>
    </div>
  )    
}

const mapStateToProps = state => {
  return { api: state.api, language: state.language}
}

export default connect(mapStateToProps, { fetchCryptoValue })(CryptoValue);