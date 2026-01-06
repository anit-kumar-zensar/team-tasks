import MoveBackward from "../Buttons/MoveBackward";
import Assignees from "../Assignee";
import MoveForward from "../Buttons/MoveForward";

const TasksCard = () => {
  return (
    <div className="tasks-container">
      <div className="content">
        <h1 className="title">Tasks card component</h1>
        <p className="description">
          It will combine title, description, assignee component,buttons
          together
        </p>
        <div className="footer">
          <div>
            <MoveBackward />
          </div>
          <div>
            <Assignees />
          </div>
          <div>
            <MoveForward />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasksCard;
