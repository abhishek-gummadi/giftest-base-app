import React from 'react';
import Header from '../Header';
import Feedback from '../Feedback';
import Footer from '../Footer';
import styled from 'styled-components';

const MainContainer = styled.section`
  width: 100%;
  height: 500px;
  background-image: url(giving-gift.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

class MainLayout extends React.Component {

  render() {
    return (
      <MainContainer>
        <Header />
          {this.props.children}
        <Feedback />
        <Footer />
      </MainContainer>
    );
  }
}

export default MainLayout;
