import { Col, Container, Row } from "react-bootstrap";
import './Footer.css'
function Footer() {
    return (
      <div className="footer px-2">
        <Row>
          <Col md="4">
            <h4>Follow Us</h4>
            <ul className="list-unstyled">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </Col>
          <Col md="4">
            <h4>About Us</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Col>
          <Col md="4">
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
              <li><a href="#">Email</a></li>
              <li><a href="#">Phone</a></li>
              <li><a href="#">Address</a></li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <p>&copy; 2023 <span className="text-danger">Chef Hero</span>. All rights reserved.</p>
          </Col>
        </Row>
      </div>
    );
  }
  
  export default Footer;
  