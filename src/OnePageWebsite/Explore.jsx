import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import { FaCheck } from "react-icons/fa";

export default function Explore() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* EXPLORE HEAD */}

      <section id="explore-head-section">
        <Container>
          <Row>
            <Col className="text-center">
              <div className="p-5">
                <h1 className="display-4">Explore</h1>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem vero obcaecati est vitae, deleniti ea exercitationem excepturi tenetur fugit culpa!</p>
                <Button value="submit" variant="outline-secondary">
                  Find out More
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* EXPLORE SECTION */}

      <section id="explore-section" className="p-5">
        <Container>
          <Row>
            <Col md={6}>
              <Image fluid roundedCircle className="mb-3" src="./img/explore-section1.jpg" />
            </Col>
            <Col md={6}>
              <h3>Explore & Connect</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis aliquam ex temporibus obcaecati sed similique deserunt cumque quae ab aperiam, ratione iste eligendi! Autem, explicabo aspernatur corrupti hic eveniet sit.</p>
              <div className="d-flex flex-row">
                <div className="p-4 align-self-start">
                  <FaCheck className="tick-icon" />
                </div>
                <div className="p-4 align-self-end">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ipsam quis explicabo sint ducimus ab!</div>
              </div>
              <div className="d-flex flex-row">
                <div className="p-4 align-self-start">
                  <FaCheck className="tick-icon" />
                </div>
                <div className="p-4 align-self-end">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ipsam quis explicabo sint ducimus ab!</div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CREATE HEAD */}

      <section id="explore-head-section" className="bg-primary">
        <Container>
          <Row>
            <Col className="text-center">
              <div className="p-5">
                <h1 className="display-4">Create</h1>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem vero obcaecati est vitae, deleniti ea exercitationem excepturi tenetur fugit culpa!</p>
                <Button value="submit" variant="outline-light">
                  Find out More
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CREATE SECTION */}

      <section id="create-section" className="p-5">
        <Container>
          <Row>
            <Col md={6}>
              <h3>Create Your Passion</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis aliquam ex temporibus obcaecati sed similique deserunt cumque quae ab aperiam, ratione iste eligendi! Autem, explicabo aspernatur corrupti hic eveniet sit.</p>
              <div className="d-flex flex-row">
                <div className="p-4 align-self-start">
                  <FaCheck className="tick-icon" />
                </div>
                <div className="p-4 align-self-end">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ipsam quis explicabo sint ducimus ab!</div>
              </div>
              <div className="d-flex flex-row">
                <div className="p-4 align-self-start">
                  <FaCheck className="tick-icon" />
                </div>
                <div className="p-4 align-self-end">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ipsam quis explicabo sint ducimus ab!</div>
              </div>
            </Col>
            <Col md={6}>
              <Image fluid roundedCircle className="mb-3" src="./img/create-section1.jpg" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* SHARE HEAD */}

      <section id="explore-head-section" className="bg-primary">
        <Container>
          <Row>
            <Col className="text-center">
              <div className="p-5">
                <h1 className="display-4">Share</h1>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem vero obcaecati est vitae, deleniti ea exercitationem excepturi tenetur fugit culpa!</p>
                <Button value="submit" variant="outline-light">
                  Find out More
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* SHARE SECTION */}

      <section id="explore-section" className="p-5">
        <Container>
          <Row>
            <Col md={6}>
              <Image fluid roundedCircle className="mb-3" src="./img/share-section1.jpg" />
            </Col>
            <Col md={6}>
              <h3>Share what you create</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis aliquam ex temporibus obcaecati sed similique deserunt cumque quae ab aperiam, ratione iste eligendi! Autem, explicabo aspernatur corrupti hic eveniet sit.</p>
              <div className="d-flex flex-row">
                <div className="p-4 align-self-start">
                  <FaCheck className="tick-icon" />
                </div>
                <div className="p-4 align-self-end">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ipsam quis explicabo sint ducimus ab!</div>
              </div>
              <div className="d-flex flex-row">
                <div className="p-4 align-self-start">
                  <FaCheck className="tick-icon" />
                </div>
                <div className="p-4 align-self-end">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ipsam quis explicabo sint ducimus ab!</div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FOOTER */}

      <footer id="main-footer" className="bg-dark">
        <Container>
          <Row>
            <Col className="text-center">
              <div className="py-4">
                <h1 className="h3">Social App</h1>
                <p>Copyright &copy; 2017</p>
                <Button onClick={handleShow}>Contact Us</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* CONTACT MODAL */}
      <Modal show={show} className="modal fade text-dark" id="contactModal" onHide={handleClose}>
        <div className="modal-content">
          <Modal.Header closeButton>
            <Modal.Title>Contact us</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" />
              </Form.Group>
            </Form>
            <Button block className="btn-primary" onClick={handleClose}>
              Submit
            </Button>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
}
