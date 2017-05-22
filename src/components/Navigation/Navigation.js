import React from 'react';
import Link from '../Link';
import styled from 'styled-components';
import Grid from 'styled-components-grid';
import Button from '../Button';

const NavWrapper = styled.div`

`;

const LogoWrapper = styled.div`
  text-align: left;
  font-family: 'Source Sans Pro', sans-serif;

`;

const LinkWrapper = styled.div`
  text-align: right;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 13px;
  letter-spacing: 1px;
`;

const HeaderLink = styled(Link)`
  text-decoration: none;
  letter-spacing: 1px;
  color: #2ed3ae;
`;

const NavButton = styled(Button)`
  text-decoration: none;
  letter-spacing: 1px;
  background: transparent;
  border: 2px solid #2ed3ae;
  color: #2ed3ae;
  font-size: 13px;
`;

const HeaderSpan = styled.span`
  padding: 0 10px;
  color: #2ed3ae;
`;

class Navigation extends React.Component {

  render() {
    return (
      <NavWrapper>
        <Grid>
          <Grid.Unit width={5/10}>
          </Grid.Unit>
          <Grid.Unit width={5/10}>
            <LinkWrapper>
              <HeaderLink to="/login">LOG IN</HeaderLink>
                <HeaderSpan>|</HeaderSpan>
              <HeaderLink to="/about">ABOUT</HeaderLink>
                <NavButton to="/register">
                  SIGN UP FREE
                </NavButton>
            </LinkWrapper>
          </Grid.Unit>
        </Grid>
      </NavWrapper>
    );
  }
}

export default Navigation;
