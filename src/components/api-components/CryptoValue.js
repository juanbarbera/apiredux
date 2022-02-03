import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchCryptoValue } from '../../actions';

import { Container, Row, Col, Button, ButtonGroup, Fade, Spinner } from 'react-bootstrap';

const CryptoValue = props => {
  const [open, setOpen] = useState(false);
  const [currency, setCurrency] = useState('eur');

  // fetching each crypto value conversion with setTimeout since the api doesn't respond all request if they are made at once
  useEffect(() => {
    props.fetchCryptoValue(`btc-${currency}`);
    setTimeout(() => {
        props.fetchCryptoValue(`eth-${currency}`);
    }, 500)
    setTimeout(() => {
        props.fetchCryptoValue(`usdt-${currency}`);
    }, 1000)
    setTimeout(() => {
        props.fetchCryptoValue(`bnb-${currency}`);
    }, 1500)
    setTimeout(() => {
        props.fetchCryptoValue(`usdc-${currency}`);
    }, 2000)
    setTimeout(() => {
        props.fetchCryptoValue(`ada-${currency}`);
    }, 2500)
    setTimeout(() => {
        props.fetchCryptoValue(`sol-${currency}`);
    }, 3000)
    setTimeout(() => {
        props.fetchCryptoValue(`xrp-${currency}`);
    }, 3500)
    setTimeout(() => {
        props.fetchCryptoValue(`luna-${currency}`);
    }, 4000)
    setTimeout(() => {
        props.fetchCryptoValue(`doge-${currency}`);
    }, 4500)
    setTimeout(() => {
        props.fetchCryptoValue(`dot-${currency}`);
    }, 5000)
    setTimeout(() => {
        props.fetchCryptoValue(`avax-${currency}`);
    }, 5500)
    setTimeout(() => {
        props.fetchCryptoValue(`busd-${currency}`);
    }, 6000)
    setTimeout(() => {
        props.fetchCryptoValue(`matic-${currency}`);
    }, 6500)
    setTimeout(() => {
        props.fetchCryptoValue(`shib-${currency}`);
    }, 7000)
    setTimeout(() => {
        props.fetchCryptoValue(`ust-${currency}`);
    }, 7500)
    setTimeout(() => {
        props.fetchCryptoValue(`cro-${currency}`);
    }, 8000)
    setTimeout(() => {
        props.fetchCryptoValue(`wbtc-${currency}`);
    }, 8500)
    setTimeout(() => {
        props.fetchCryptoValue(`dai-${currency}`);
    }, 9000)
    setTimeout(() => {
        props.fetchCryptoValue(`link-${currency}`);
    }, 9500)
  }, [currency]);

  
  const crypto = props.api;
  const currencySymbol = () => {
    if (currency === 'eur') {
      return '€';
    } else if (currency === 'usd') {
      return '$'
    } else {
      return 'R$'
    }
  }

  const renderBtc = () => {
    if (!crypto.btc) {
      return (
        <Row>
          <Col>Bitcoin (BTC)</Col>
          <Col>
            <Spinner animation="grow" role="status" style={{width: '16px', height: '16px'}} >
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Col>
        </Row>
      )
    } else {
      return (
        <Row>
          <Col>Bitcoin (BTC)</Col>
          <Col>{currencySymbol()}{parseFloat(crypto.btc).toFixed(2)}</Col>
        </Row>
      )
    }
  }

  const renderEth = () => {
    if (!crypto.eth) {
      return (
        <Row>
          <Col>Ethereum (ETH)</Col>
          <Col>
            <Spinner animation="grow" role="status" style={{width: '16px', height: '16px'}}>
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Col>
        </Row>
      )
    } else {
      return (
        <Row>
          <Col>Ethereum (ETH)</Col>
          <Col>{currencySymbol()}{parseFloat(crypto.eth).toFixed(2)}</Col>
        </Row>
      )
    }
  }

  const renderUsdt = () => {
    if (!crypto.usdt) {
      return (
        <Row>
          <Col>Tether (USDT)</Col>
          <Col>
            <Spinner animation="grow" role="status" style={{width: '16px', height: '16px'}}>
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Col>
        </Row>
      )
    } else {
      return (
        <Row>
          <Col>Tether (USDT)</Col>
          <Col>{currencySymbol()}{parseFloat(crypto.usdt).toFixed(2)}</Col>
        </Row>
      )
    }
  }

  const renderBnb = () => {
    if (!crypto.bnb) {
      return (
        <Row>
          <Col>Bnb (BNB)</Col>
          <Col>
            <Spinner animation="grow" role="status" style={{width: '16px', height: '16px'}}>
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Col>
        </Row>
      )
    } else {
      return (
        <Row>
          <Col>Bnb (BNB)</Col>
          <Col>{currencySymbol()}{parseFloat(crypto.bnb).toFixed(2)}</Col>
        </Row>
      )
    }
  }

  const renderUsdc = () => {
    if (!crypto.usdc) {
      return (
        <Row>
          <Col>Usd coin (USDC)</Col>
          <Col>
            <Spinner animation="grow" role="status" style={{width: '16px', height: '16px'}}>
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Col>
        </Row>
      )
    } else {
      return (
        <Row>
          <Col>Usd coin (USDC)</Col>
          <Col>{currencySymbol()}{parseFloat(crypto.usdc).toFixed(2)}</Col>
        </Row>
      )
    }
  }

  const renderAda = () => {
    if (!crypto.ada) {
      return (
        <Row>
          <Col>Ardano (ADA)</Col>
          <Col>
            <Spinner animation="grow" role="status" style={{width: '16px', height: '16px'}}>
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Col>
        </Row>
      )
    } else {
      return (
        <Row>
          <Col>Ardano (ADA)</Col>
          <Col>{currencySymbol()}{parseFloat(crypto.ada).toFixed(2)}</Col>
        </Row>
      )
    }
  }

  const renderSol = () => {
    if (!crypto.sol) {
      return (
        <Row>
          <Col>Solana (SOL)</Col>
          <Col>
            <Spinner animation="grow" role="status" style={{width: '16px', height: '16px'}}>
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Col>
        </Row>
      )
    } else {
      return (
        <Row>
          <Col>Solana (SOL)</Col>
          <Col>{currencySymbol()}{parseFloat(crypto.sol).toFixed(2)}</Col>
        </Row>
      )
    }
  }

  const renderXrp = () => {
    if (!crypto.xrp) {
      return (
        <Row>
          <Col>Xrp (XRP)</Col>
          <Col>
            <Spinner animation="grow" role="status" style={{width: '16px', height: '16px'}}>
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Col>
        </Row>
      )
    } else {
      return (
        <Row>
          <Col>Xrp (XRP)</Col>
          <Col>{currencySymbol()}{parseFloat(crypto.xrp).toFixed(2)}</Col>
        </Row>
      )
    }
  }

  const renderLuna = () => {
    if (!crypto.luna) {
      return (
        <Row>
          <Col>Terra (LUNA)</Col>
          <Col>
            <Spinner animation="grow" role="status" style={{width: '16px', height: '16px'}}>
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Col>
        </Row>
      )
    } else {
      return (
        <Row>
          <Col>Terra (LUNA)</Col>
          <Col>{currencySymbol()}{parseFloat(crypto.luna).toFixed(2)}</Col>
        </Row>
      )
    }
  }

  const renderDoge = () => {
    if (!crypto.doge) {
      return (
        <Row>
          <Col>Dogecoin (DOGE)</Col>
          <Col>
            <Spinner animation="grow" role="status" style={{width: '16px', height: '16px'}}>
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Col>
        </Row>
      )
    } else {
      return (
        <Row>
          <Col>Dogecoin (DOGE)</Col>
          <Col>{currencySymbol()}{parseFloat(crypto.doge).toFixed(2)}</Col>
        </Row>
      )
    }
  }

  const renderDot = () => {
    if (!crypto.dot) {
      return (
        <Row>
          <Col>Polkadot (DOT)</Col>
          <Col>
            <Spinner animation="grow" role="status" style={{width: '16px', height: '16px'}}>
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Col>
        </Row>
      )
    } else {
      return (
        <Row>
          <Col>Polkadot (DOT)</Col>
          <Col>{currencySymbol()}{parseFloat(crypto.dot).toFixed(2)}</Col>
        </Row>
      )
    }
  }

  const renderAvax = () => {
    if (!crypto.avax) {
      return (
        <Row>
          <Col>Avalanche (AVAX)</Col>
          <Col>
            <Spinner animation="grow" role="status" style={{width: '16px', height: '16px'}}>
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Col>
        </Row>
      )
    } else {
      return (
        <Row>
          <Col>Avalanche (AVAX)</Col>
          <Col>{currencySymbol()}{parseFloat(crypto.avax).toFixed(2)}</Col>
        </Row>
      )
    }
  }

  const renderBusd = () => {
    if (!crypto.busd) {
      return (
        <Row>
          <Col>Binance usd (BUSD)</Col>
          <Col>
            <Spinner animation="grow" role="status" style={{width: '16px', height: '16px'}}>
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Col>
        </Row>
      )
    } else {
      return (
        <Row>
          <Col>Binance usd (BUSD)</Col>
          <Col>{currencySymbol()}{parseFloat(crypto.busd).toFixed(2)}</Col>
        </Row>
      )
    }
  }

  const renderMatic = () => {
    if (!crypto.matic) {
      return (
        <Row>
          <Col>Polygon (MATIC)</Col>
          <Col>
            <Spinner animation="grow" role="status" style={{width: '16px', height: '16px'}}>
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Col>
        </Row>
      )
    } else {
      return (
        <Row>
          <Col>Polygon (MATIC)</Col>
          <Col>{currencySymbol()}{parseFloat(crypto.matic).toFixed(2)}</Col>
        </Row>
      )
    }
  }

  const renderShib = () => {
    if (!crypto.shib) {
      return (
        <Row>
          <Col>Shiba Inu (SHIB)</Col>
          <Col>
            <Spinner animation="grow" role="status" style={{width: '16px', height: '16px'}}>
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Col>
        </Row>
      )
    } else {
      return (
        <Row>
          <Col>Shiba Inu (SHIB)</Col>
          <Col>{currencySymbol()}{crypto.shib}</Col>
        </Row>
      )
    }
  }

  const renderUst = () => {
    if (!crypto.ust) {
      return (
        <Row>
          <Col>TerraUSD (UST)</Col>
          <Col>
            <Spinner animation="grow" role="status" style={{width: '16px', height: '16px'}}>
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Col>
        </Row>
      )
    } else {
      return (
        <Row>
          <Col>TerraUSD (UST)</Col>
          <Col>{currencySymbol()}{parseFloat(crypto.ust).toFixed(2)}</Col>
        </Row>
      )
    }
  }
  
  const renderCro = () => {
    if (!crypto.cro) {
      return (
        <Row>
          <Col>Crypo.com Coin (CRO)</Col>
          <Col>
            <Spinner animation="grow" role="status" style={{width: '16px', height: '16px'}}>
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Col>
        </Row>
      )
    } else {
      return (
        <Row>
          <Col>Crypo.com Coin (CRO)</Col>
          <Col>{currencySymbol()}{parseFloat(crypto.cro).toFixed(2)}</Col>
        </Row>
      )
    }
  }

  const renderWbtc = () => {
    if (!crypto.wbtc) {
      return (
        <Row>
          <Col>Wrapped Bitcoin (WBTC)</Col>
          <Col>
            <Spinner animation="grow" role="status" style={{width: '16px', height: '16px'}}>
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Col>
        </Row>
      )
    } else {
      return (
        <Row>
          <Col>Wrapped Bitcoin (WBTC)</Col>
          <Col>{currencySymbol()}{parseFloat(crypto.wbtc).toFixed(2)}</Col>
        </Row>
      )
    }
  }

  const renderDai = () => {
    if (!crypto.dai) {
      return (
        <Row>
          <Col>Dai (DAI)</Col>
          <Col>
            <Spinner animation="grow" role="status" style={{width: '16px', height: '16px'}}>
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Col>
        </Row>
      )
    } else {
      return (
        <Row>
          <Col>Dai (DAI)</Col>
          <Col>{currencySymbol()}{parseFloat(crypto.dai).toFixed(2)}</Col>
        </Row>
      )
    }
  }

  const renderLink = () => {
    if (!crypto.link) {
      return (
        <Row>
          <Col>Chainlink (LINK)</Col>
          <Col>
            <Spinner animation="grow" role="status" style={{width: '16px', height: '16px'}}>
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Col>
        </Row>
      )
    } else {
      return (
        <Row>
          <Col>Chainlink (LINK)</Col>
          <Col>{currencySymbol()}{parseFloat(crypto.link).toFixed(2)}</Col>
        </Row>
      )
    }
  }
  const renderRows = () => {
    return (
      <Container className="mt-5" >
        {renderBtc()}
        {renderEth()}
        {renderUsdt()}
        {renderBnb()}
        {renderUsdc()}
        {renderAda()}
        {renderSol()}
        {renderXrp()}         
        {renderLuna()} 
        {renderDoge()}
        {renderDot()}
        {renderAvax()}
        {renderBusd()}
        {renderMatic()}
        {renderShib()}
        {renderUst()}
        {renderCro()}
        {renderWbtc()}
        {renderDai()}
        {renderLink()}
      </Container>
    )    
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
          {renderRows()}
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