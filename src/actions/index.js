import {
  CHANGE_LANGUAGE,
  FETCH_CARPLATE,
  FETCH_POSTCODE,
  FETCH_FIATEXCHANGE,
  FETCH_CRYPTOVALUE
} from './types';
import carPlate from "../apis/carPlate";
import postCode from '../apis/postCode';
import fiatExchange from '../apis/fiatExchange';
import cryptoValue from '../apis/cryptoValue';

export const changeLanguage = language => {
  return { type: CHANGE_LANGUAGE, payload: language }
}

export const fetchCarPlate = value => async dispatch => {
  const response = await carPlate.get(`/${value.toLowerCase()}/json`);

  dispatch({ type: FETCH_CARPLATE, payload: response.data});
}
// example: https://apicarros.com/v1/consulta/fui4130/json

export const fetchPostCode = value => async dispatch => {
  const response = await postCode.get(`/${value}/json`);

  dispatch({ type: FETCH_POSTCODE, payload: response.data})
}
// example: https://viacep.com.br/ws/${generalSearch.value}/json/

// fetchFiatExchange doesn't require the use of axios.create, but it's implemented this way so the pattern isn't broken, allowing for faster readability.
export const fetchFiatExchange = () => async dispatch => {
  const response = await fiatExchange.get('/latest/EUR');
  
  dispatch({ type: FETCH_FIATEXCHANGE, payload: response.data.conversion_rates });
}
// example: https://v6.exchangerate-api.com/v6/4f50c2f5843c9fe83fc45554/latest/EUR

export const fetchCryptoValue = (currency) => async dispatch => {
  const response = await cryptoValue.get(`/v1/exchangerate/${currency}?invert={invert}`, {
  params: {
    apiKey: 'F25BD0B8-BDA8-4122-880E-B6DE5C1C214A',
    filter_asset_id: 'BTC,ETH,USDT,BNB,USDC,ADA,SOL,XRP,LUNA,DOGE,DOT,AVAX,BUSD,MATIC,SHIB,UST,CRO,WBTC,DAI,LINK'
  }});
  
  dispatch({ type: FETCH_CRYPTOVALUE, payload: response.data.rates})
}
// example: https://api.cryptonator.com/api/ticker/shib-eur