import React from 'react';
import styled from 'styled-components';
import { Form, Button } from 'react-bootstrap';

// Styled-components styles
const CONTAINER = styled.div`
  background: #F7F9FA;
  height: auto;
  width: 90%;
  margin: 5em auto;
  color: snow;
  -webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);

  @media(min-width: 786px) {
    width: 60%;
  }

  label {
    color: #24B9B6;
    font-size: 1.2em;
    font-weight: 400;
  }

  h1 {
    color: #24B9B6;
    padding-top: .5em;
  }

  .form-group {
    margin-bottom: 2.5em;
  }
`;

const MYFORM = styled(Form)`
  width: 90%;
  text-align: left;
  padding-top: 2em;
  padding-bottom: 2em;

  @media(min-width: 786px) {
    width: 50%;
  }
`;

const BUTTON = styled(Button)`
  background: #1863AB;
  border: none;
  font-size: 1.2em;
  font-weight: 400;

  &:hover {
    background: #1D3461;
  }
`;

const relocation = () => {
  return (
    <CONTAINER>
      <MYFORM className="mx-auto">
        <Form.Group controlId="transport">
          <Form.Label>transportation</Form.Label>
          <Form.Control
            type="number"
            name="transportation"
            placeholder="transportation"
            />
        </Form.Group>
        <Form.Group controlId="food">
          <Form.Label>food expenses</Form.Label>
          <Form.Control
            type="number"
            name="food"
            placeholder="food cost"
          />
        </Form.Group>
        <Form.Group controlId="health insurance">
          <Form.Label>health insurance</Form.Label>
          <Form.Control
            type="number"
            name="health insurance"
            placeholder="health cost"
            />
        </Form.Group>
        <Form.Group controlId="car insurance">
          <Form.Label>car insurance</Form.Label>
          <Form.Control
            type="number"
            name="car insurance"
            placeholder="car insurance"
            />
        </Form.Group>
        <Form.Group controlId="Health Loans">
          <Form.Label>Health Loans</Form.Label>
          <Form.Control
            type="number"
            name="Health Loans"
            placeholder="Health Loans"
            />
        </Form.Group>
        <Form.Group controlId="Car Loans">
          <Form.Label>Car Loans</Form.Label>
          <Form.Control
            type="number"
            name="Car Loans"
            placeholder="Car Loans"
            />
        </Form.Group>
        <Form.Group controlId="personal loans">
          <Form.Label>personal loans</Form.Label>
          <Form.Control
            type="number"
            name="personal loans"
            placeholder="personal loans"
            />
        </Form.Group>
        <Form.Group controlId="other expenses">
          <Form.Label>other expenses</Form.Label>
          <Form.Control
            type="number"
            name="other expenses"
            placeholder="other expenses"
            />
        </Form.Group>
        <Form.Group controlId="other description">
          <Form.Label>other description</Form.Label>
          <Form.Control
            type="text"
            name="other description"
            placeholder="other description"
            />
        </Form.Group>
        <BUTTON variant="primary" type="submit">
          Submit
        </BUTTON>
      </MYFORM>
    </CONTAINER>
  );
}


export default relocation;