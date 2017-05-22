import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Feedback from '../Feedback';
import Footer from '../Footer';
import styled from 'styled-components';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div>
        <Header />
          {this.props.children}
        <Feedback />
        <Footer />
      </div>
    );
  }
}

export default Layout;
