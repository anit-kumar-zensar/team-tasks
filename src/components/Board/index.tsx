import { useEffect, useState } from "react";
import data from "../../mock/data.json";
import StatusHeader from "../StatusHeader";

const Boards = () => {
  const [status, setStatus] = useState([]);

  useEffect(() => {
    setStatus(data);
  }, []);

  return (
    <div>
      <h1>Board Component!</h1>
      <StatusHeader data={status} />
    </div>
  );
};

export default Boards;
