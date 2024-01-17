import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  // Function to handle card item click
  const handleCardItemClick = (label, path) => {
    // Store the selected label and path in localStorage
    const uniquePackage = `package_${label}`;
    localStorage.setItem(uniquePackage, label);
  };

  return (
    <div className="cards">
      <h1>CHECK OUT OUR COLLECTION!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {/* Card item for Romance */}
            <CardItem
              src="/assets/images/booksbed.jpg"
              text="Discover a love that defies time, where every glance speaks volumes and every touch ignites a spark - your next romantic escape awaits."
              label="Romance"
              path="https://buy.stripe.com/test_9AQ3fX7BNgjMecw003"
              onClick={() => handleCardItemClick("Romance")}
            />
            {/* Card item for Non-Fiction */}
            <CardItem
              src="/assets/images/spiral.jpg"
              text="Unlock the power of real-life stories, guiding you on a journey of personal growth and empowerment."
              label="Non-Fiction"
              path="https://buy.stripe.com/test_14k03L1dp5F84BW4gi"
              onClick={() => handleCardItemClick("Non-Fiction")}
            />
          </ul>
          <ul className="cards__items">
            {/* Card item for Fiction */}
            <CardItem
              src="/assets/images/fiction.jpg"
              text="Escape reality and get lost in the captivating realms of fiction, where every page promises thrilling adventures and unforgettable characters."
              label="Fiction"
              path="https://buy.stripe.com/test_fZe7wd4pB5F8c4o9AB"
              onClick={() => handleCardItemClick("Fiction")}
            />
            {/* Card item for Fantasy */}
            <CardItem
              src="/assets/images/fantasy.jpg"
              text="Enter a world where magic reigns, mythical creatures roam, and extraordinary adventures await in the enchanting embrace of fantasy."
              label="Fantasy"
              path="https://buy.stripe.com/test_eVabMtbS39Vo5G0dQU"
              onClick={() => handleCardItemClick("Fantasy")}
            />
            {/* Card item for Mystery */}
            <CardItem
              src="/assets/images/stacks.jpg"
              text="Enter a world of suspense and intrigue, where every clue leads to the unexpected, inviting you into the captivating realm of mystery."
              label="Mystery"
              path="https://buy.stripe.com/test_3cs9ElcW76Jc7O8dQQ"
              onClick={() => handleCardItemClick("Mystery")}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
