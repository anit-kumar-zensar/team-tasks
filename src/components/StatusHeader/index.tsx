import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./StatusHeader.css";

const StatusHeader = () => {
  return (
    <>
      <h1>Status Component</h1>
      <Container>
        <Row>
          <Col className="status-container backlog">Backlog</Col>
          <Col className="status-container in-progress">In Progress</Col>
          <Col className="status-container done">Done</Col>
        </Row>
      </Container>
    </>
  );
};

export default StatusHeader;
