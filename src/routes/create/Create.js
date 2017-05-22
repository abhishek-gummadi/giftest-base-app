import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import {Grid, Col, Row} from 'react-styled-flexboxgrid';

import Input from '../../components/Input';

const Label = styled.label`
  order: 1;
  width: 10em;
  text-align: right;
  padding-right: 0.5em;
  white-space: nowrap;
  user-select: none;
  cursor: pointer;

`;

const FormHeading = styled.h1`
  font-size: 24px;
`;

const CreateForm = styled.form`
  width: 100%;
`;

const FormContainer = styled.section`
  margin-top: 50px;
  margin: 0 auto;
  max-width: 600px;
  padding: 10px 40px;
  background: #bdbdbd;
  height: 1000px;
  text-align: center;
`;

const FieldSet = styled.fieldset`
  width: 25em;
  margin: 20px;
  border: 0px;
  display: flex;
  align-items: center;
`;

const Legend = styled.legend`
  font-size: 30px;
  padding-bottom: 20px;
`;

const Div = styled.div`
  padding-bottom: 10px;

`;

class Create extends React.Component {

  render() {
    return (
      <div>
        <Grid fluid={true}>
          <Row>
            <Col md={12}>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Create;
