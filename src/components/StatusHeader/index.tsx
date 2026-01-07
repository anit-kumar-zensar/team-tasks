import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./StatusHeader.css";
import TasksCard from "../TasksCard";

const StatusHeader = ({ data }) => {
  console.log("sdfsdf", data);
  return (
    <Container>
      <Row>
        {Object.entries(data).map(([key, section]) => {
          return (
            <Col className={`status-container ${key}`} key={key}>
              <h4 className="h4">{section?.displayName}</h4>
              {section?.tasks?.map((task) => (
                <div key={task.id}>
                  <TasksCard task={task} />
                </div>
              ))}
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default StatusHeader;
