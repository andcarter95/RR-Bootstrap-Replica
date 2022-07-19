import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Fragment } from 'react';

export default function Stores() {
  return (
        <><h2 className='text-center'>Browse stores in Houston</h2>
        <Container style={{ marginTop: "40px", textAlign: "center" }}>
          <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly" }}>
              <Row>
                  <Col xs=".5">
                      <Image src="./Aldi.jpg" height={60} />
                  </Col>
                  <Col>
                      <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                      <p>Delivery * Pickup</p>
                  </Col>
              </Row>
              <Col sm="1"></Col>
              <Row>
                  <Col xs=".5">
                      <Image src="./Target.png" height={60} />
                  </Col>
                  <Col>
                      <h5 style={{ fontWeight: "bold" }}>Target</h5>
                      <p>Delivery * Pickup</p>
                  </Col>
              </Row>
              <Col sm="1"></Col>
              <Row>
                  <Col xs=".5">
                      <Image src="./Kroger.png" height={60} />
                  </Col>
                  <Col>
                      <h5 style={{ fontWeight: "bold" }}>Kroger</h5>
                      <p>Delivery</p>
                  </Col>
              </Row>
          </Row>
      </Container></>
  )
}
