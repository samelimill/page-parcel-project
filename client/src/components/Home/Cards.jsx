// Importing React and necessary components/styles
import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

// Functional component for displaying a collection of cards
function Cards() {
  // Function to handle the click event on a card item
  const handleCardItemClick = (label) => {
    // Store the selected label in localStorage
    const uniquePackage = `package_${label}`;
    localStorage.setItem(uniquePackage, label);
  };

  // Rendering the Cards component
  return (
    <div className='cards'>
      <h1>CHECK OUT OUR COLLECTION!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          {/* First row of cards */}
          <ul className='cards__items'>
            <CardItem
              src='/assets/images/booksbed.jpg'
              text='Discover a love that defies time, where every glance speaks volumes and every touch ignites a spark - your next romantic escape awaits.'
              label='Romance'
              path='https://buy.stripe.com/test_9AQ3fX7BNgjMecw003'
              onClick={() => handleCardItemClick('Romance')}
            />
            <CardItem
              src='/assets/images/spiral.jpg'
              text='Unlock the power of real-life stories, guiding you on a journey of personal growth and empowerment.'
              label='Non-Fiction'
              path='https://buy.stripe.com/test_14k03L1dp5F84BW4gi'
              onClick={() => handleCardItemClick('Non-Fiction')}
            />
          </ul>
          {/* Second row of cards */}
          <ul className='cards__items'>
            <CardItem
              src='/assets/images/fiction.jpg'
              text='Escape reality and get lost in the captivating realms of fiction, where every page promises thrilling adventures and unforgettable characters.'
              label='Fiction'
              path='https://buy.stripe.com/test_fZe7wd4pB5F8c4o9AB'
              onClick={() => handleCardItemClick('Fiction')}
            />
            <CardItem
              src='/assets/images/fantasy.jpg'
              text='Enter a world where magic reigns, mythical creatures roam, and extraordinary adventures await in the enchanting embrace of fantasy.'
              label='Fantasy'
              path='https://buy.stripe.com/test_eVabMtbS39Vo5G0dQU'
              onClick={() => handleCardItemClick('Fantasy')}
            />
            <CardItem
              src='/assets/images/stacks.jpg'
              text='Enter a world of suspense and intrigue, where every clue leads to the unexpected, inviting you into the captivating realm of mystery.'
              label='Mystery'
              path='https://buy.stripe.com/test_3cs9ElcW76Jc7O8dQQ'
              onClick={() => handleCardItemClick('Mystery')}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

// Exporting the Cards component as the default export
export default Cards;
