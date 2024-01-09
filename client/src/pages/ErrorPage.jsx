import Jumbotron from '../components/Jumbotron';

function Failure(props) {
    return (
        <div>
          <Jumbotron>
            <h1>🚫 Error!</h1>
            <h2>Error loading page!</h2>
          </Jumbotron>
        </div>
      );
}

export default Failure;