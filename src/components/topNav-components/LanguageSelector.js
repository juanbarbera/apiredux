import React from 'react';
import { connect } from 'react-redux';
import { changeLanguage } from '../../actions';
import { NavDropdown } from 'react-bootstrap';
import '../TopNav.css';

const LanguageSelector = props => {
  const titleText = () => {
    if (props.language.language === 'english' || !props.language.language) {
      return 'Select Language'
    } else if (props.language.language === 'french') {
      return 'Sélectionner la Langue'
    } else {
      return 'Selecionar Idioma'
    }
  }

  return (    
    <NavDropdown title={titleText()} id="collasible-nav-dropdown">
      <NavDropdown.Item
        onClick={() => props.changeLanguage('english')}
      >
        <i className="flag us flags"/> English
      </NavDropdown.Item>
      <NavDropdown.Item
        onClick={() => props.changeLanguage('french')}
      >
        <i className="flag fr flags"/> Français
      </NavDropdown.Item>
      <NavDropdown.Item
        onClick={() => props.changeLanguage('portuguese')}
      >
        <i className="flag pt flags" /> Português
      </NavDropdown.Item>
      </NavDropdown>   
  );
};

const mapStateToProps = state => {
  return { language: state.language };
};

export default connect(mapStateToProps, { changeLanguage })(LanguageSelector);