import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col style={{ fontSize: "20px" }} className="text-center py-3">
            Copyright &copy;2020|All rights Reserved Designed with{" "}
            <span>
              <i
                className="fa fa-heart"
                style={{ fontSize: "26px", color: "red" }}
              ></i>
            </span>{" "}
            by Yash Verma
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
