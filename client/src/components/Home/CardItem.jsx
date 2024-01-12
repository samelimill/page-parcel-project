
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

function CardItem(props) {

  function showSub(){
    if (Auth.loggedIn()) {
      return (
        <Link to={props.path} target='_blank' rel='noopener noreferrer'>
          <button
            className='cards__item__btn'
            onClick={() => props.onClick(props.label, props.path)}
          >Subscribe</button>
      </Link>
      )} else {
        return;
      }
    };
    
  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Book Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            {showSub()}
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;