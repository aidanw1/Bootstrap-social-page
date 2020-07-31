import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function SignUp() {
  return (
    <Card bg="primary">
      <Card.Body>
        <Card.Title>Sign Up Today</Card.Title>
        <Card.Text>Please fill out this form to register</Card.Text>
        <Form.Group>
          <Form.Control type="username" placeholder="Username" />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="e
            mail"
            placeholder="Email"
          />
        </Form.Group>
        <Form.Group>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group>
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>
        <Button type="submit" value="submit" variant="outline-light" block>
          Submit
        </Button>
      </Card.Body>
    </Card>
  );
}
