// Importing necessary dependencies
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

// Functional component for an individual card item
function CardItem(props) {

  // Function to conditionally render subscription button based on user authentication
  function showSub() {
    if (Auth.loggedIn()) {
      return (
        <Link to={props.path} target='_blank' rel='noopener noreferrer'>
          <button
            className='cards__item__btn'
            onClick={() => props.onClick(props.label, props.path)}
          >Subscribe</button>
        </Link>
      );
    } else {
      return; // Render nothing if user is not logged in
    }
  };
    
  // Rendering the card item
  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link' to={props.path}>
          {/* Card image */}
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Book Image'
              src={props.src}
            />
          </figure>
          {/* Card information and subscription button */}
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            {showSub()} {/* Call the showSub function to conditionally render the subscription button */}
          </div>
        </div>
      </li>
    </>
  );
}

// Exporting the CardItem component as the default export
export default CardItem;
