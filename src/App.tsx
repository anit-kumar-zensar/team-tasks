import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import StatusHeader from "./components/StatusHeader";

export const App = () => {
  return (
    <>
      <h1>Team Tasks App</h1>
      <StatusHeader />
      <p>List of cards</p>
    </>
  );
};
