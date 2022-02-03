import React from 'react';
import { connect } from 'react-redux';
import { changeLanguage } from '../../actions';
import '../TopNav.css';

const LanguageSelector = props => {

  return (
    <div>
      <i className="flag us flags" onClick={() => props.changeLanguage('english')} />
      <i className="flag fr mx-5 flags" onClick={() => props.changeLanguage('french')}/>
      <i className="flag pt flags" onClick={() => props.changeLanguage('portuguese')}/>
    </div>
  )
};

const mapStateToProps = state => {
  return { language: state.language}
}

export default connect(mapStateToProps, { changeLanguage })(LanguageSelector);