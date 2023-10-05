import Alert from "react-bootstrap/Alert";

function Reminder() {
  return (
    <Alert variant="success">
      <Alert.Heading>Hello World</Alert.Heading>
      <hr />
      <p>
        This website uses the following npm packages:
        <ul>
          <li>
            React-Bootstrap
            <pre style={{ display: "inline" }}>
              {" "}
              (npm install react-bootstrap bootstrap)
            </pre>
          </li>
          <li>
            Bootstrap
            <pre style={{ display: "inline" }}> (npm i bootstrap)</pre>
          </li>
        </ul>
      </p>
    </Alert>
  );
}

export default Reminder;
