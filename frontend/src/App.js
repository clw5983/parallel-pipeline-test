import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import Reminder from "./components/Reminder";
import Slide from "./components/Slide";

function App() {
  return (
    <>
      <NavBar />
      <Container className="mt-4">
        <Reminder />
        <Slide />
      </Container>
    </>
  );
}

export default App;
