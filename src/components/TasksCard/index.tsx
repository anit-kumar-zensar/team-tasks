import MoveBackward from "../Buttons/MoveBackward";
import Assignees from "../Assignee";
import MoveForward from "../Buttons/MoveForward";

const TasksCard = ({ task }) => {
  return (
    <div className="card text-bg-dark mb-3" style={{ maxWidth: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{task?.title}</h5>
        <p className="card-text text-truncate">{task?.description}</p>
        <div className="d-flex justify-content-around">
          <MoveBackward />
          <Assignees />
          <MoveForward />
        </div>
      </div>
    </div>
  );
};

export default TasksCard;
