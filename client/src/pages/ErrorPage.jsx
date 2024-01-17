// Importing the Jumbotron component from the '../components/Jumbotron' file
import Jumbotron from "../components/Jumbotron";

// Defining the Failure component
function Failure(props) {
  return (
    <div>
      {/* Rendering the Jumbotron component */}
      <Jumbotron>
        <h1>🚫 Error!</h1>
        <h2>Error loading page!</h2>
      </Jumbotron>
    </div>
  );
}

// Exporting the Failure component as the default export
export default Failure;
