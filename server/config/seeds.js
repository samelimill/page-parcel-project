const db = require("./connection");
const { User, Product } = require("../models");
const cleanDB = require("./cleanDB");

db.once("open", async () => {
  await cleanDB("Product", "products");
  await cleanDB("User", "users");

  const products = await Product.insertMany([
    {
      name: "Non-Fiction Package",
      description:
        "Embark on a journey of knowledge and discovery with our Non-Fiction Book Subscription Service. Each month, we carefully curate and deliver a thought-provoking non-fiction masterpiece directly to your doorstep. Immerse yourself in the realms of history, science, personal development, and more, as we bring you captivating narratives, profound insights, and the latest groundbreaking ideas. Expand your horizons one book at a time, as our subscription service delivers carefully selected non-fiction gems that promise to inform, inspire, and enrich your mind. Elevate your reading experience with our curated selection of impactful and compelling non-fiction titles, fostering a lifelong love for learning and personal growth.",
      price: 10,
    },
    {
      name: "Fiction Package",
      description:
        "Escape into the enchanting world of fiction with our Fiction Book Subscription Service. Immerse yourself in a captivating narrative every month as we curate and deliver a carefully selected work of fiction to your doorstep. Whether you crave thrilling adventures, heartwarming tales, or mind-bending mysteries, our subscription service promises to transport you to diverse worlds crafted by talented storytellers. Each book is a new adventure, a chance to explore different genres and characters, and a gateway to endless imagination. Join us on a literary journey where each monthly delivery brings the joy of discovering new stories and the magic of escaping reality. Ignite your imagination and feed your passion for fiction with our curated collection of compelling novels that promise to spark emotions, ignite creativity, and provide an escape into the extraordinary realms of storytelling.",
      price: 10,
    },
    {
      name: "Fantasy Package",
      description:
        "Embark on an epic journey beyond reality with our Fantasy Book Subscription Service. Each month, we transport you to mystical realms, enchanted lands, and magical worlds, delivering carefully curated fantasy novels that will captivate your imagination. From mythical creatures to heroic quests, our subscription service invites you to explore the limitless wonders of fantastical storytelling. Immerse yourself in tales of magic, adventure, and otherworldly wonders as our selections transport you to realms where anything is possible. Unveil the secrets of enchanted kingdoms, follow the footsteps of legendary heroes, and lose yourself in the magic of storytelling. Join us on a monthly adventure as we bring the extraordinary to your doorstep, igniting your love for fantasy literature and ensuring that every book is a portal to a world of enchantment and wonder.",
      price: 10,
    },
    {
      name: "Romance Package",
      description:
        "Indulge in the sweet allure of love and passion with our Romance Book Subscription Service. Each month, we curate a selection of heartwarming and captivating romance novels that promise to sweep you off your feet. Immerse yourself in the tender embrace of love stories that span across time, cultures, and emotions. Our subscription service delivers a perfect blend of romance genres, from contemporary love tales to historical epics, ensuring a delightful variety in every shipment. Lose yourself in the chemistry of unforgettable characters, experience the thrill of romantic adventures, and savor the joy of happily ever afters. Join us in celebrating the timeless magic of love as our monthly deliveries fill your world with the warmth and enchantment of romantic storytelling. Let each book be a journey into the heart, promising you a delightful escape into the world of love and connection.",
      price: 10,
    },
    {
      name: "Mystery Pick Package",
      description:
        "Uncover the excitement of the unknown with our Mystery Book Subscription Service. Each month, we handpick a compelling mystery novel for you, creating an element of surprise as you unwrap a literary enigma. While you won't know the title in advance, rest assured that our selections span a spectrum of mystery sub-genres, promising an exhilarating and unpredictable reading experience. From cozy mysteries to psychological thrillers, our curated picks ensure a captivating journey into the world of suspense and intrigue. Join us on this thrilling adventure where anticipation meets discovery, and let the pages of our chosen mystery novels transport you to places unknown and stories untold. Embrace the mystery, and let us guide you through a curated exploration of the enigmatic realms of literature.",
      price: 10,
    },
  ]);

  console.log("products seeded");

  await User.create({
    firstName: "Mickey",
    lastName: "Mouse",
    email: "mickey@disney.com",
    password: "mouseman1",
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id],
      },
    ],
  });

  await User.create({
    firstName: "Donald",
    lastName: "Duck",
    email: "donald@disney.com",
    password: "duckman1",
  });

  console.log("users seeded");

  process.exit();
});
