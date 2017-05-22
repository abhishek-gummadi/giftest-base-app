import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/Button';

import Grid from 'styled-components-grid';
import styled from 'styled-components';

const HeroText = styled.div`
  padding-top: 150px;
  font-size: 46px;
  font-weight: 700;
  text-shadow: 0 1px 1px rgba(0,0,0,0.5);
  text-align: center;
  color: white;
  font-family: 'Source Sans Pro', sans-serif;
`;

class Home extends React.Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid.Unit width={12/12}>
            <HeroText>
                Let's get your gift exchange started!
            </HeroText>
          </Grid.Unit>
          <Grid.Unit width={12/12}>
            <Button
              fontSize={15}
              height={50}
              width={150}>
              Try Giftest Free
            </Button>
          </Grid.Unit>
        </Grid>
      </div>
    );
  }
}

export default Home;
