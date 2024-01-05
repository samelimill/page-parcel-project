const { User } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const resolvers = {
  user: async (parent, args, context) => {
    if (context.user) {
      const user = await User.findById(context.user._id).populate({
        path: "orders.products",
        populate: "category",
      });

      user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

      return user;
    }

    throw AuthenticationError;
  },
};
