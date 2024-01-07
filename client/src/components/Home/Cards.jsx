
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>CHECK OUT OUR COLLECTION!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/assets/images/booksbed.jpg'
              text='Discover a love that defies time, where every glance speaks volumes and every touch ignites a spark - your next romantic escape awaits.'
              label='Romance'
              path='/'
            />
            <CardItem
              src='/assets/images/spiral.jpg'
              text='Unlock the power of real-life stories, guiding you on a journey of personal growth and empowerment.'
              label='Non-Fiction'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/assets/images/fiction.jpg'
              text='Escape reality and get lost in the captivating realms of fiction, where every page promises thrilling adventures and unforgettable characters.'
              label='Fiction'
              path='/'
            />
            <CardItem
              src='/assets/images/fantasy.jpg'
              text='Enter a world where magic reigns, mythical creatures roam, and extraordinary adventures await in the enchanting embrace of fantasy.'
              label='Fantasy'
              path='/'
            />
            <CardItem
              src='/assets/images/stacks.jpg'
              text='Enter a world of suspense and intrigue, where every clue leads to the unexpected, inviting you into the captivating realm of mystery.'
              label='Mystery'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;