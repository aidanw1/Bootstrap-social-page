import React from "react";
import SignUp from "./SignUp";
import Explore from "./Explore";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaCheck } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <header id="home-section">
        <div className="dark-overlay">
          <div className="home-inner">
            <div className="container">
              <Container>
                <Row style={{ color: "white" }}>
                  <Col lg={8} className="d-none d-lg-block">
                    <h1 className="display-4">
                      Build <strong>social profiles</strong> and gain revenue and profits.
                    </h1>
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
                    <div className="d-flex flex-row">
                      <div className="p-4 align-self-start">
                        <FaCheck className="tick-icon" />
                      </div>
                      <div className="p-4 align-self-end">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ipsam quis explicabo sint ducimus ab!</div>
                    </div>
                  </Col>
                  <Col lg={4}>
                    <SignUp />
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </header>
      <Explore />
    </>
  );
}
